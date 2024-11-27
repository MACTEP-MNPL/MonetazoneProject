import {Currency} from "@/components/Parts/Contries/Currency.tsx";
import {FC} from "react";

type CurrencyType = {
    currencies: string []
}

export const Currencies:FC<CurrencyType> = ({currencies}) => {
    return (
        <>
            <div className="currencies">
                {currencies.map((name: string) => {
                    return (
                        <>
                            <Currency key={name} name={name}/>
                        </>
                    )
                })}
            </div>
        </>
    )
}