import { FC, PropsWithChildren } from "react";
import './mobBadge.scss'

type MobBadgeProps = PropsWithChildren & {
    active?: boolean
    onClick?: () => void
    className?: string
}

export const MobBadge: FC<MobBadgeProps> = ({ children, active, className, ...otherProps }) => {
    return (
        <div className={`mobBadge pointer ${active ? 'active' : ''} ${className}`} {...otherProps}>
            {children}
        </div>
    )
}