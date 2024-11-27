import {FC} from "react";
import {City} from "@/components/Parts/Contries/City.tsx";

type CitiesType = {
    cities: string []
}

export const Cities:FC<CitiesType> = ({cities}) => {
    return (
        <>
            <div className="cities">
                {cities.map((name: string) => {
                    return (
                        <City key={name} name={name}/>
                    )
                })}
            </div>
        </>
    )
}