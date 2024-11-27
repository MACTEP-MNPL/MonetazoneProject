import {Countries} from "@/components/Parts/Contries/Countries.tsx"
import {useAppSelector} from "@/store/hooks.ts";



export const WPCountriesSection = () => {

    const {currentCountries} = useAppSelector(state => state.countries)

    return (
        <>
            <Countries countries={currentCountries}/>
        </>
    )
}