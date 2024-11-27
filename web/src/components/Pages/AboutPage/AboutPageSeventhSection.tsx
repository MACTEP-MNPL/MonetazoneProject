import {Badge} from "../../UI/Badges/Badge/Badge.tsx";
import about7 from '@/assets/svgs/about-7.svg'
import {Button} from "../../UI/Buttons/Button/Button.tsx";
import {useDispatch} from "react-redux";
import {showAppPopUp} from "../../../store/appPopUpSlice.ts";

export const AboutPageSeventhSection = () => {
    const dispatch = useDispatch()
    const showApplicationPopUp = () => {
        dispatch(showAppPopUp())
    }
    return (
        <>
            <section id={'7'} className='aboutPage-seventh'>
                <img data-aos-duration="1000"
                     data-aos='fade-right'
                     src={about7} alt=""/>

                <div className="pageRight">
                    <h2
                        data-aos-duration="1200"
                        data-aos='fade-left'
                    >Вы можете написать нашему <br />
                        менеджеру в Telegram, WhatsApp, <br />
                        а так же следить за новостями<br />
                        в нашем Telegram канале
                    </h2>

                    <Badge
                        data-aos-duration="1400"
                        data-aos='fade-left'>#Контакты</Badge>

                    <p
                        data-aos-duration="1600"
                        data-aos='fade-left'>Следите за новостями ВЭД, а так же <br />
                        спец предложениями в нашем<br />
                        Telegram канале.
                    </p>

                    <div>
                        <p
                            data-aos-duration="1800"
                            data-aos='fade-left'
                        >
                            Связаться с нами можно по:
                        </p>

                        <div
                            data-aos-duration="2000"
                            data-aos='fade-left'
                            className="aboutBadges">
                            <Badge>Telegram</Badge>
                            <Badge>TG Channel</Badge>
                            <Badge>WhatsApp</Badge>
                        </div>
                    </div>

                    <p
                        data-aos-duration="2200"
                        data-aos='fade-left'>Либо создать заявку автоматически,<br/>
                        после чего вас моментально обслужат<br/>
                        не дожидаясь ответа.</p>

                    <Button
                        onClick={showApplicationPopUp}
                        data-aos-duration="2400"
                        data-aos='fade-left'
                        isWide={true}>
                        Создать заявку моментально
                    </Button>
                </div>
            </section>
        </>
    )
}