import {Badge} from "../../UI/Badges/Badge/Badge.tsx";
import about8 from '@/assets/svgs/about-8.svg'
import {Button} from "../../UI/Buttons/Button/Button.tsx";


export const AboutPageEightSection = () => {
    return (
        <>
            <section id={'8'} className='aboutPage-eight'>
                <div className="pageLeft">
                    <h2
                        data-aos-duration="1000"
                        data-aos='fade-right'
                    >Вы можете ознакомиться с <br />
                        отзывами реальных клиентов <br />
                        по всем нашим услугам</h2>
                    <Badge
                        data-aos-duration="1200"
                        data-aos='fade-right'>#Отзывы</Badge>
                    <p
                        data-aos-duration="1400"
                        data-aos='fade-right'
                    >Для ознакомления с базой перейдите <br />
                        в раздел отзывов.</p>

                    <Button
                        data-aos-duration="1600"
                        data-aos='fade-right'
                        isWide={true}>Перейте к разделу отзывов</Button>
                </div>

                <img
                    data-aos-duration="1600"
                    data-aos='fade-left'
                    src={about8} alt=""/>
            </section>
        </>
    )
}