import svg from '@/assets/svgs/withdraw-3.svg'
import {Badge} from "../../UI/Badges/Badge/Badge.tsx";


export const WPThirdSection = () => {

    return (
        <section id='3' className='WP-third'>
            <img
                data-aos-duration="1000" data-aos='fade-right'
                src={svg} alt=""/>

            <div className="pageRight">
                <h2
                    data-aos-duration="1200" data-aos='fade-left'
                >Предоставляем любые обьемы<br/>
                    наличных в каждой стране<br/>
                    с которой мы работаем
                </h2>

                <Badge
                    targetId='0'
                    data-aos-duration="1400" data-aos='fade-left'
                >#Резервы</Badge>

                <p
                    data-aos-duration="1600" data-aos='fade-left'
                >Наши резервы позволяют выполнить <br/>
                    любую задачу клиента.
                </p>

                <p
                    data-aos-duration="1800" data-aos='fade-left'
                >Мы выдаем наличные от 20.000$ <br/>
                    без лимитов на максимальную <br/>
                    сумму совершения сделки.
                </p>
            </div>
        </section>
    )
}
