import { format} from "date-fns"
import { ru } from "date-fns/locale";

import { cn } from "@/lib/utils"
import { Button } from "@/components/UI/Button"
import { Calendar } from "@/components/UI/Calendar"

import './datePicker.scss'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/UI/Popover"
import {FC, forwardRef, LegacyRef, useId} from "react";

type DatePickerType = {
    className?: string
    ref?: any
    label: string
    date: Date
    setDate: any
}

export const DatePicker: FC<DatePickerType> = forwardRef(({label, date, setDate}, ref: LegacyRef<HTMLDivElement>) => {
    const id = useId()

    return (
        <>
            <div ref={ref} className="datePicker">
                <label htmlFor={id}>{label}</label>

                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="datePicker"
                            size='datePicker'
                            className={cn(
                                "w-full justify-start text-left font-normal"
                            )}
                        >
                            {date ? format(date, "d MMMM yyyy", { locale: ru }) : <p className='gray'>Выберите дату сделки</p>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 z-50">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>

            </div>
        </>

    )
})
