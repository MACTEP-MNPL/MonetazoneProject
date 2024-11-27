import {Cities} from "@/components/Parts/Contries/Cities.tsx";
import {Currencies} from "@/components/Parts/Contries/Currencies.tsx";
import {FC} from "react";
import {Badge} from "@/components/UI/Badges/Badge/Badge.tsx";
import {Button} from "@/components/UI/Buttons/Button/Button.tsx";
import {flagIcons} from "@/flagIcons.ts";
import {setAppType, setCountry, showAppPopUp} from "@/store/appPopUpSlice.ts";
import {useDispatch} from "react-redux";


type CountryType = {
    name: string,
    flagSVG: any,
    issue: boolean,
    intake: boolean,
    cities: any[],
    currencies: any[]
}

export const Country:FC<CountryType> = ({name, flagSVG, issue, intake, cities, currencies}) => {

    const dispatch = useDispatch()

    const showApplicationPopUp = () => {
        dispatch(setAppType('cash'))
        dispatch(setCountry(name))
        dispatch(showAppPopUp())
    }

    return (
        <>
            <div className="country"
                 data-aos-duration="1000"
                 data-aos='zoom-in'
            >

                <div className="top">
                    <div className="left">
                        <h2>{name}</h2>
                        <img src={flagIcons[flagSVG]} alt=""/>
                    </div>

                    <div className="right">
                        {issue && <Badge>#Выдача</Badge>}
                        {intake && <Badge>#Приём</Badge>}
                    </div>

                </div>


                <div className="bottom">

                    <div className="left">
                        <div>
                            <label htmlFor="" className="label">Города:</label>
                            <Cities cities={cities}/>
                        </div>

                        <div>
                            <label htmlFor="" className='label'>Валюта:</label>
                            <Currencies currencies={currencies}/>
                        </div>
                    </div>

                    <div className="right">
                        <Button onClick={showApplicationPopUp} isWide={true}>Создать заявку</Button>
                    </div>

                </div>
            </div>
        </>
    )
}