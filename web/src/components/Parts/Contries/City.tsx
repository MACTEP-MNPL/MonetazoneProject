import {FC} from "react";

type CityType = {
    name: string
}

export const City:FC<CityType> = ({name}) => {
    return (
        <>
            <div className='city'>
                <div className='circle' />
                {name}
            </div>
        </>
    )
}