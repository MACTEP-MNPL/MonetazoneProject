import {FC, forwardRef, LegacyRef, useId} from 'react';
import './input.scss'

interface InputProps {
    className?: any
    ref?: any
    state: string
    setState: any
    label: string
    type?: string
    placeholder?: string
}

export const Input: FC<InputProps> = forwardRef(({state, setState,label, type = 'text', placeholder, ...otherProps}, ref: LegacyRef<HTMLDivElement>) => {
    const id = useId()

    return (
        <div ref={ref} className='input' {...otherProps}>
            <label htmlFor={id}>{label}</label>

            <input value={state}
                   onChange={(e) => {setState(e.target.value)}}
                   type={type} id={id} name={id} placeholder={placeholder} />
        </div>
    )
})
