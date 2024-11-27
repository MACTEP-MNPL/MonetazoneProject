import {Badge} from "../../UI/Badges/Badge/Badge.tsx";
import about5 from '@/assets/svgs/about-5.svg'
import {Button} from "../../UI/Buttons/Button/Button.tsx";
import {useDispatch} from "react-redux";
import {setAppType, showAppPopUp} from "../../../store/appPopUpSlice.ts";

export const AboutPageFifthSection = () => {
    const dispatch = useDispatch()

    const showApplicationPopUp = () => {
        dispatch(setAppType('cash'))
        dispatch(showAppPopUp())
    }

    return (
        <>
            <section id={'5'} className='aboutPage-fifth'>
                <img
                    data-aos-duration="1500"
                    data-aos='fade-right'
                    src={about5} alt=""/>
                <div className="pageRight">
                    <h2
                        data-aos-duration="1000"
                        data-aos='fade-left'
                    >Обменивайте наличные<br />
                        на крипту, <br />
                        а так же совершайте <br />
                        перестановки средств <br />
                        по всему миру! <br />
                    </h2>
                    <Badge
                        data-aos-duration="1200"
                        data-aos='fade-left'
                    >#Наличные</Badge>
                    <p
                        data-aos-duration="1400"
                        data-aos='fade-left'>
                        Мы проводим обмен наличных в комфортабельном<br />
                        офисе в Moscow City, а так же выдаем<br />
                        в более 40 странах мира.
                    </p>
                    <p
                        data-aos-duration="1600"
                        data-aos='fade-left'>
                        Весь процесс занимает до 20-ти минут,<br />
                        максимально безопасно и<br />
                        конфеденциально.
                    </p>

                    <div className='buttons'>
                        <Button
                            onClick={showApplicationPopUp}
                            data-aos-duration="1800"
                            data-aos='fade-left'
                            isWide={true}>Создать заявку наличные</Button>
                        <Button
                            data-aos-duration="2000"
                            data-aos='fade-left'
                            type='trans'>Гео выдачи наличных</Button>
                    </div>
                </div>
            </section>
        </>
    )
}