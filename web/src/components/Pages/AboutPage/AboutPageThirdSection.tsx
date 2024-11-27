import {Badge} from "../../UI/Badges/Badge/Badge.tsx";
import about3 from '@/assets/svgs/about-3.svg'

export const AboutPageThirdSection = () => {
    return (
        <>
            <section id={'3'} className='aboutPage-third'>
                <img
                    data-aos-duration="1000"
                    data-aos='fade-right'
                    src={about3} alt=""/>

                <div className="pageRight">
                    <h2
                        data-aos-duration="1200"
                        data-aos='fade-left'
                    >Нам доверяют сотни клиентов!<br />
                        Yan Hait <span>&</span> Monetazone<br />
                        Более 8 лет на рынке финансов
                    </h2>
                    <Badge
                        data-aos-duration="1400"
                        data-aos='fade-left'>#Доверие</Badge>
                    <p
                        data-aos-duration="1600"
                        data-aos='fade-left'>В течении многих лет мы заботимся о качестве<br />
                        предоставляемых нами услуг.<br />
                    </p>
                    <p
                        data-aos-duration="1800"
                        data-aos='fade-left'>
                        Особый подход к каждому клиенту, а так же<br />
                        безупречная репутация на рынке обеспечивает<br />
                        доверие людей к Monetazone
                    </p>
                </div>

            </section>
        </>
    )
}