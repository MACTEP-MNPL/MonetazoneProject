import {Country} from "@/components/Parts/Contries/Country.tsx";
import './countries.scss'
import {CountryType} from "@/utils/countries.ts";
import {FC} from "react";

type CountriesType = {
    countries: CountryType []
}

export const Countries: FC<CountriesType> = ({countries}) => {
    return (
        <>
            {countries.length > 0 ? (
                <div className="countries lastSection">
                    {countries.map((country: CountryType) => (
                        <Country key={country.name} {...country}/>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                <h1>Страна не найдена!</h1>
                <p>Проверьте правильность ввода названия страны.</p>
                </div>
            )}
        </>
    )
}