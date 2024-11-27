import { Section } from "@/components/UI/Section/Section"
import { Badge } from "@/components/UI/Badges/Badge/Badge"
import about1 from '@/assets/svgs/about-1.svg'
import about2 from '@/assets/svgs/about-2.svg'
import about3 from '@/assets/svgs/about-3.svg'
import about4 from '@/assets/svgs/about-4.svg'
import about5 from '@/assets/svgs/about-5.svg'
import about6 from '@/assets/svgs/about-6.svg'
import about7 from '@/assets/svgs/about-7.svg'
import './aboutPage.scss'
import { useImageLoader } from '@/hooks/useImageLoader'
import { Button } from "@/components/UI/Buttons/Button/Button"
import { useAppDispatch } from "@/store/hooks"
import { setAppType } from "@/store/appPopUpSlice"
import { showAppPopUp } from "@/store/appPopUpSlice"
import { useNavigate } from "react-router-dom"
import { goToCountriesSection } from "@/components/Utils/goToCountriesSection"
export const AboutPage = () => {

    const navigator = useNavigate()

    const about1Src = useImageLoader(about1)

    const dispatch = useAppDispatch()

    const showFeaAppPopUP = () => {
        dispatch(setAppType('fea'))
        dispatch(showAppPopUp())
    }

    const showCashAppPopUp = () => {
        dispatch(setAppType('cash'))
        dispatch(showAppPopUp())
    }

    return (
        <div className="aboutPage page">
            <section className='aboutPage-first' id='0'>
                <div className="left"
                     data-aos-duration="1000" data-aos='fade-down-right'>
                        <h2 className="title">O нас</h2>
                        <p>Узнайте информацию о работе<br /> нашей компании, адреса и<br /> контакты менеджеров.</p>
                        <img src={about1Src} alt=""/>

                </div>

                <div className="pageRight">
                    <h1 data-aos-duration="1200"
                        data-aos='fade-left'
                        className="title">
                        Мы - проверенный <br /> ВЭД брокер<br /> на рынке финансов<br /> Yan Hait & Monetazone
                    </h1>

                    <div className="badges"
                         data-aos-duration="1400" data-aos='fade-left'
                         >
                        <Badge
                            targetId={'2'}
                            data-aos-duration="1200"
                            data-aos='fade-up'
                            >#Гарантии</Badge>
                        <Badge
                            targetId={'3'}
                            data-aos-duration="1300"
                            data-aos='fade-up'
                            >#Доверие</Badge>
                        <Badge
                            targetId={'4'}
                            data-aos-duration="1400"
                            data-aos='fade-up'
                            >#ВЭД</Badge>
                        <Badge
                            targetId={'5'}
                            data-aos-duration="1500"
                            data-aos='fade-up'
                            >#Наличные</Badge>
                        <Badge
                            targetId={'6'}
                            data-aos-duration="1600"
                            data-aos='fade-up'
                        >#Адрес</Badge>
                        <Badge
                            targetId={'7'}
                            data-aos-duration="1700"
                            data-aos='fade-up'
                            >#Контакты</Badge>

                    </div>

                    <div className="guide"
                         data-aos-duration="2000"
                         data-aos='fade-left'>
                        Быстро переходите к интересующему<br/>
                        блоку информационого раздела<br/>
                        нажатием на <Badge style={{display: 'inline'}}>#Кнопку</Badge>
                    </div>

                </div>


            </section>

            <Section
                type='imgRight'
                title='Monetazone обеспечивает гарантию безопасного, а так же эффективного сотрудничества по ВЭД и наличным'
                badges={['#Гарантии']}
                description={[
                    'Мы работаем почти во всех странах мира, обеспечивая удобные и быстрые обмены, в том числе и переводы по системам SWIFT & SEPA.',
                    'Мы гарантируем безопасность ваших транзакций, минимизируем риски и ускоряем процесс обмена. Наша команда придаёт большое значение безопасности клиентов, применяя строгие меры защиты информации.',
                    'Сотрудничество с нами — это гарантия вашего спокойствия. Мы берем на себя все формальности по оплате счетов и переводу средств, чтобы вы могли сосредоточиться на развитии своего бизнеса.'
                ]}
                img={{src: about2, alt: ''}}
                className='aboutPage-second'
                id='2'
            />

            <Section
                type='imgLeft'
                title='Нам доверяют крупные компании и частные клиенты'
                badges={['#Доверие']}
                description={[
                    'Мы гордимся доверием, которое нам оказывают как крупные корпорации, так и частные клиенты.',
                    'Наша репутация построена на многолетнем опыте успешного сотрудничества и безупречном качестве услуг.',
                    'Каждый клиент для нас особенный, и мы стремимся оправдать оказанное нам доверие, предоставляя сервис высочайшего уровня.'
                ]}
                img={{src: about3, alt: ''}}
                className='aboutPage-third'
                id='3'
            />

            <Section
                type='imgRight'
                title='Monetazone - ваш надежный партнер в сфере ВЭД'
                badges={['#ВЭД']}
                description={[
                    'Мы специализируемся на предоставлении комплексных решений для внешнеэкономической деятельности.',
                    'Наша команда экспертов поможет вам эффективно организовать международные платежи и оптимизировать финансовые потоки.',
                    'Мы обеспечиваем полное сопровождение ВЭД операций, гарантируя их безопасность и соответствие всем требованиям законодательства.'
                ]}
                img={{src: about4, alt: ''}}
                className='aboutPage-fourth'
                id='4'
            >
                <Button  
                    data-aos-duration={1200}
                    data-aos='fade-right'
                    onClick={showFeaAppPopUP}
                    type='basic'
                    isWide={true}>
                    Создать заявку ВЭД
                </Button>
            </Section>

            <Section
                type='imgLeft'
                title='Удобные операции с наличными средствами'
                badges={['#Наличные']}
                description={[
                    'Мы предлагаем широкий спектр услуг по работе с наличными средствами.',
                    'Наши клиенты могут быстро и безопасно проводить операции с наличными в различных валютах.',
                    'Мы обеспечиваем конфиденциальность и безопасность каждой операции.'
                ]}
                img={{src: about5, alt: ''}}
                className='aboutPage-fifth'
                id='5'
            >
                <div style={{alignItems: 'end'}} className="flex flex-col gap-2 justify-start items-start">
                    <Button 
                    data-aos-duration={1200}
                        data-aos='fade-left'
                        className="w-full" 
                        style={{borderBottomRightRadius: 0}} 
                        onClick={showCashAppPopUp} 
                        type='basic' 
                        isWide={true}>
                        Создать заявку наличные
                    </Button>

                    <Button 
                        style={{borderTopRightRadius: 0, width: '80%'}} className='flex justify-center'
                        data-aos-duration={1200}
                        data-aos='fade-left'
                        onClick={() => goToCountriesSection(navigator)}
                        type='trans' 
                        isWide={true}>
                        Гео выдачи наличных
                    </Button>
                </div>
            </Section>

            <Section
                type='imgRight'
                title='Добираться к нам удобно из любой точки Москвы'
                badges={['#Адрес']}
                description={[
                    'Мы заботимся о времени наших клиентов, именно по этому вы можете добраться к нам быстро с любой части города.',
                    'Наши офисы находятся по адресу:'
                ]}
                img={{src: about6, alt: ''}}
                className='aboutPage-sixth'
                id='6'
            >
                <div className="aboutBadges">
                    <a href="https://yandex.ru/maps/-/CDtnM0iG" target="_blank">
                        <Badge data-aos-duration="2000" data-aos='fade-right'>
                            Moscow City, Башня Федерация
                        </Badge>
                    </a>
                    
                    <a href="https://yandex.ru/maps/-/CDtnMOII" target="_blank">
                        <Badge data-aos-duration="1800" data-aos='fade-right'>
                            Южное Тушино, Строительный проезд 7а
                        </Badge>    
                    </a>

                </div>
            </Section>

            <Section
                type='imgLeft'
                title='Свяжитесь с нами удобным способом'
                badges={['#Контакты']}
                description={[
                    'Наши менеджеры всегда на связи и готовы ответить на любые вопросы.',
                    'Выберите удобный способ связи:'
                ]}
                img={{src: about7, alt: ''}}
                className='aboutPage-seventh'
                id='7'
            >
                <div className="aboutBadges">
                    <Badge data-aos-duration="1800" data-aos='fade-left'>
                        Telegram
                    </Badge>
                    <Badge data-aos-duration="2200" data-aos='fade-left'>TG Channel</Badge>
                    <Badge data-aos-duration="2000" data-aos='fade-left'>
                        WhatsApp
                    </Badge>
                </div>
            </Section>
        </div>
    )
}