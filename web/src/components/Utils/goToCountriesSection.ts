import { NavigateFunction } from "react-router-dom";

export const goToCountriesSection = (navigator: NavigateFunction) => {
    window.scrollTo(0, 0)

    setTimeout(() => {
        navigator('/cash');

    setTimeout(() => {
        const countriesSection = document.getElementsByClassName('WP-fifth');
            countriesSection[0]?.scrollIntoView({behavior: 'smooth'});
        }, 1000)
    }, 1000)
}