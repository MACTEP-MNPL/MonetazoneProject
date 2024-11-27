import {FC, useState, useRef, useEffect, forwardRef, LegacyRef, RefObject} from "react";
import './select.scss'
import arrowRight from '@/assets/svgs/arrow-right.svg';
import arrowBottom from '@/assets/svgs/arrow-bottom.svg';


type SelectType = {
    ref?: any
    label: string
    placeholder: string
    options: string []
    setOption: any
    option: string
}

export const Select: FC<SelectType> = forwardRef(({options, placeholder = "Выберите" , label, setOption, option}, ref: LegacyRef<HTMLDivElement>) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef: RefObject<HTMLDivElement> = useRef(null);

    const handleOptionClick = (option: any) => {
        setOption(option);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Close dropdown when clicking outside
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

    return (
        <div ref={ref} className='select'>
            <div className="label">{label}</div>
            <div className="body" ref={dropdownRef}>
                <div className="top" onClick={toggleDropdown}>
                    {option ? option : placeholder}
                    {isOpen ?
                        <img src={arrowBottom} alt="arrow"/>
                        :
                        <img src={arrowRight} alt=""/>
                    }

                </div>
                {isOpen && (
                    <ul className="list">
                        {options.map((option) => (
                            <li
                                key={option}
                                className={`dropdown-item ${option === option ? "selected" : ""}`}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
})
