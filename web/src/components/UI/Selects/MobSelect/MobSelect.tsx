import {FC, useState, useRef, useEffect} from "react"
import './mobSelect.scss'
import {cn} from "@/lib/utils"

import arrow from '@/assets/svgs/mobile/arrow.svg'

interface IMobSelect {
    icon?: string
    options: string[]
    value: string | undefined
    setValue: (value: string) => void
    placeholder?: string
    withSearch?: boolean
}

export const MobSelect: FC<IMobSelect> = ({
    icon,
    options,
    value,
    setValue,
    placeholder = 'Выберите значение',
    withSearch = false
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: any) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div className="mobSelect" ref={dropdownRef}>
            <div className={`trigger pointer ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                {icon && (<div className="icon"><img src={icon} alt="icon" /></div>)}
                <div
                    className={cn(
                        "w-full justify-start text-left",
                    )}
                >
                    {value ? value : <p className='gray'>{placeholder}</p>}
                </div>
                <div className="arrow">
                    <img 
                        src={arrow} 
                        alt="arrow"
                        style={{
                            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease'
                        }}
                    />
                </div>
            </div>

            <div className={`content ${isOpen ? 'open' : ''}`}>
                {withSearch && (
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Поиск..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}
                <div className="options">
                    {filteredOptions.map((option) => (
                        <div
                            key={option}
                            className={`option ${value === option ? 'selected' : ''}`}
                            onClick={() => {
                                setValue(option);
                                setIsOpen(false);
                                setSearchValue('');
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
