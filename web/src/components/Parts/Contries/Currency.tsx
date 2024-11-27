import {FC} from "react";

type CurrencyType = {
    name: string
}

export const Currency: FC<CurrencyType> = ({name}) => {
    return (
        <>
            <div className='currency'>
                <div className='circle' />
                {name}
            </div>
        </>
    )
}