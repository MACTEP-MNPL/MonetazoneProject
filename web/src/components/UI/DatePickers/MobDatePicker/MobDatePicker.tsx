import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { FC, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/UI/Button"
import { Calendar } from "@/components/UI/Calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/UI/Popover"

import './mobDatePicker.scss'

type MobDatePickerProps = {
    icon?: string
    date: Date | undefined
    setDate: (date: Date | undefined) => void
    placeholder?: string
}

export const MobDatePicker: FC<MobDatePickerProps> = ({
    icon,
    date,
    setDate,
    placeholder = 'Выберите дату'
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            
            // Check if click is inside the popover
            const isInsidePopover = popoverRef.current?.contains(target);
            
            // Check if click is on calendar navigation or calendar elements
            const isCalendarElement = 
                target.closest('.rdp') || // Full calendar
                target.closest('.rdp-nav') || // Navigation arrows
                target.closest('.rdp-button') || // Any calendar button (including nav)
                target.closest('[role="button"]'); // Backup check for buttons
            
            // Only close if click is outside both popover and calendar
            if (!isInsidePopover && !isCalendarElement) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="mobDatePicker" ref={popoverRef}>
            <Popover 
                open={isOpen} 
                onOpenChange={setIsOpen}
            >
                <PopoverTrigger asChild>
                    <div className={`trigger ${isOpen ? 'open' : ''}`}>
                        {icon && (<div className="icon"><img src={icon} alt="icon" /></div>)}
                        <Button
                            variant="datePicker"
                            size='datePicker'
                            className={cn(
                                "w-full justify-start text-left font-normal"
                            )}
                        >
                            {date ? (
                                format(date, "d MMMM yyyy", { locale: ru })
                            ) : (
                                <p className='gray'>{placeholder}</p>
                            )}
                        </Button>
                    </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 z-50" align="start">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(newDate) => {
                            setDate(newDate);
                            if (newDate) setIsOpen(false);
                        }}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}