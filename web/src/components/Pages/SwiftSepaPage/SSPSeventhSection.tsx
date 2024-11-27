import {Badge} from "@/components/UI/Badges/Badge/Badge.tsx";
import {Button} from "@/components/UI/Buttons/Button/Button.tsx";
import swift7 from '@/assets/svgs/swift-7.svg'
import {useDispatch} from "react-redux";
import {setAppType, showAppPopUp} from "@/store/appPopUpSlice.ts";

export const SSPSeventhSection = () => {
    const dispatch = useDispatch()

    const showApplicationPopUp = () => {
        dispatch(setAppType('swift'))
        dispatch(showAppPopUp())
    }

    return (
        <>
            <section id='7' className='SSP-seventh'>
                <img data-aos-duration="1000"
                     data-aos='fade-right'
                     src={swift7} alt=""/>

                <div className="pageRight">
                    <h2
                        data-aos-duration="1200"
                        data-aos='fade-left'
                    >Создавайте заявку <br />в разделе
                        Swift <span>&</span> Sepa <br /> прямо сейчас и <br />получите обслуживание <br/> в течении 15-ти минут</h2>
                    <Badge
                        data-aos-duration="1400"
                        data-aos='fade-left'
                    >#Заявка</Badge>
                    <p
                        data-aos-duration="1600"
                        data-aos='fade-left'
                    >
                        Создавайте заявку за пару минут
                        и получите быструю консультацию
                        от наших операторов, которые ответят
                        на любой интересующий вопрос и
                        оперативно проведут сделку.
                    </p>
                    <Button
                        onClick={showApplicationPopUp}
                        type='whiteBrd'
                        data-aos-duration="1800"
                        data-aos='fade-left'
                        isWide={true}>Создать заявку Swift <span>&</span> Sepa</Button>
                </div>
            </section>
        </>
    )
}