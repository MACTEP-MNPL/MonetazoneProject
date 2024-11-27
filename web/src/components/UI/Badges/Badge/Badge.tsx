import './badge.scss'
import {FC} from "react";

type BadgeType = {
    style?: any
    children?: any
    targetId?: string
    className?: string
    otherProps?: any
}

export const Badge:FC<BadgeType> = ({children, targetId = '', className = '', ...otherProps}) => {
    const onClick = () => {
        document.getElementById(targetId)!.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <p
                {...otherProps} onClick={onClick} className={`badge pointer ${className}`}>{children}
            </p>
        </>
    )
}