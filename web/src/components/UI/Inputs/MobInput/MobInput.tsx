import './mobInput.scss'
import { FC } from 'react'

type MobInputProps = {
    icon?: string
    type?: string
    state: string
    setState?: any
    placeholder?: string
    isWide?: boolean
}

export const MobInput:FC<MobInputProps> = ({icon, type='text', state, setState, placeholder='Введите значение', isWide=false}) => {
    return (
        <div className="mobInput" style={{gridColumn: isWide ? '1 / 3' : 'auto'}}>
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