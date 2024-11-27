import './popUp.scss'
import {FC} from "react";
import {useDispatch} from "react-redux";

type PopUpType  = {
    type: 'mobNav' | 'app'
    children: any
    isShown: boolean
    hidePopUpFunction: any
    className?: string
}

export const PopUp: FC<PopUpType> = ({type, isShown, className, hidePopUpFunction, children, ...otherProps}) => {
    const dispatch = useDispatch()
    const hidePopUp = () => {
        dispatch(hidePopUpFunction())
    }

    if(isShown) {
        
        document.documentElement.classList.add('noOverflow' + type)
        return (
            <>
                <div onClick={hidePopUp} className={className ? `popUp ${className}` : 'popUp'} {...otherProps}>
                    {children}
                </div>
            </>
        )
    } else {
        document.documentElement.classList.remove('noOverflow' + type)
        return (<></>)
    }
}