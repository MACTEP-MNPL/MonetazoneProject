import {FC} from "react";

type noLabelInputType = {
    children?: any
    value: string
    setValue: any
    type?: string
    placeholder?: string
}

export const NoLabelInput: FC<noLabelInputType> = ({type = 'text', placeholder, children, value, setValue, ...otherProps}) => {
    return (
        <div className='noLabelInput input' {...otherProps}>

            <input value={value}
                   onChange={(e) => setValue(e.target.value)}
                   type={type}
                   placeholder={placeholder}
            />

            <div className="children">
                {children}
            </div>

        </div>
    )
}