import './mobInput.scss'
import { FC } from 'react'

type MobInputProps = {
    icon?: string
    type?: string
    state: string
    setState?: any
    placeholder?: string
}

export const MobInput:FC<MobInputProps> = ({icon, type='text', state, setState, placeholder='Введите значение'}) => {
    return (
        <div className="mobInput">
            {icon && (<div className="icon"><img src={icon} alt="icon" /></div>)}
            <input 
                type={type} 
                value={state} 
                onChange={(e) => setState?.(e.target.value)} 
                placeholder={placeholder}
                readOnly={!setState}
            />
        </div>
    )
}