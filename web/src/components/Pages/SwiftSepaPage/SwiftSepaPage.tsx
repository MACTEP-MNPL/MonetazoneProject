import { Section } from "@/components/UI/Section/Section"
import { Badge } from "@/components/UI/Badges/Badge/Badge"
import { Button } from "@/components/UI/Buttons/Button/Button"
import swift1 from '@/assets/svgs/swift-1.svg'
import swift2 from '@/assets/svgs/swift-2.svg'
import swift3 from '@/assets/svgs/swift-3.svg'
import swift4 from '@/assets/svgs/swift-4.svg'
import swift5 from '@/assets/svgs/swift-5.svg'
import swift6 from '@/assets/svgs/swift-6.svg'
import swift7 from '@/assets/svgs/swift-7.svg'
import './swiftSepaPage.scss'
import { useDispatch } from 'react-redux'
import { showAppPopUp, setAppType } from '@/store/appPopUpSlice'

export const SwiftSepaPage = () => {
    const dispatch = useDispatch()

    const showApplicationPopUp = () => {
        dispatch(setAppType('swift'))
        dispatch(showAppPopUp())
    }

    return (
        <div className="swiftSepaPage page">
            <Section
                type='imgLeft'
                img={{src: swift1, alt: ''}}
                className='SSP-first'
                id='0'
            >
                <h1 data-aos-duration="1200" data-aos='fade-left'>
                    Monetazone - решение<br />
                    ваших задач по<br />
                    Swift <span className='h1'>&</span> Sepa переводам<br />
                    по всему миру!<br />
                </h1>

                <div className="badges" data-aos-duration="1400" data-aos='fade-left'>
                    <Badge targetId='2'>#Мир</Badge>
                    <Badge targetId='3'>#Авто</Badge>
                    <Badge targetId='4'>#Валюты</Badge>
                    <Badge targetId='5'>#Бизнес</Badge>
                    <Badge targetId='6'>#БезГраниц</Badge>
                    <Badge targetId='7'>#Заявка</Badge>
                </div>

                <div className="guide" data-aos-duration="2000" data-aos='fade-left'>
                    Быстро переходите к интересующему<br/>
                    блоку информационого раздела<br/>
                    нажатием на <Badge style={{display: 'inline'}}>#Кнопку</Badge>
                </div>
            </Section>

            <Section
                type='imgLeft'
                title='Swift & Sepa удобные международные платежи с monetazone'
                badges={['#Мир']}
                description={[
                    'Платежи за товары и услуги по всему миру теперь стали проще благодаря Swift & Sepa.',
                    'Наши решения позволяют вам оперативно и безопасно переводить средства за любые продукты и услуги, будь то недвижимость, маркетинг, IT-проекты или товары первой необходимости.',
                    'Мы заботимся о том, чтобы ваш бизнес мог без проблем взаимодействовать с партнерами и клиентами по всему миру, используя проверенные временем системы международных переводов.'
                ]}
                img={{src: swift2, alt: ''}}
                className='SSP-second'
                id='2'
            />

            <Section
                type='imgRight'
                title='Автоматизированная система Swift & Sepa переводов'
                badges={['#Авто']}
                description={[
                    'Наша автоматизированная система Swift & Sepa переводов обеспечивает максимальную скорость и эффективность при проведении международных платежей.',
                    'Благодаря передовым технологиям, мы минимизируем время обработки транзакций и гарантируем безопасность каждого перевода.',
                    'Автоматизация процессов позволяет нам предоставлять услуги высочайшего качества при оптимальных затратах времени и ресурсов.'
                ]}
                img={{src: swift3, alt: ''}}
                className='SSP-third'
                id='3'
            />

            <Section
                type='imgLeft'
                title='Работаем со всеми основными мировыми валютами'
                badges={['#Валюты']}
                description={[
                    'Мы поддерживаем операции во всех основных мировых валютах, что позволяет нашим клиентам проводить международные платежи без ограничений.',
                    'Наши специалисты помогут выбрать оптимальную валюту для ваших переводов и обеспечат выгодные курсы конвертации.',
                    'Благодаря широкой сети банков-партнеров, мы гарантируем быстрое проведение платежей в любой валюте.'
                ]}
                img={{src: swift4, alt: ''}}
                className='SSP-fourth'
                id='4'
            />

            <Section
                type='imgRight'
                title='Swift & Sepa для вашего бизнеса'
                badges={['#Бизнес']}
                description={[
                    'Мы предлагаем комплексные решения для бизнеса любого масштаба, обеспечивая надежные и эффективные международные переводы.',
                    'Наши услуги помогают компаниям оптимизировать финансовые потоки и развивать международное сотрудничество.',
                    'Индивидуальный подход к каждому клиенту позволяет нам предоставлять решения, максимально соответствующие потребностям вашего бизнеса.'
                ]}
                img={{src: swift5, alt: ''}}
                className='SSP-fifth'
                id='5'
            />

            <Section
                type='imgLeft'
                title='Переводы без границ с Swift & Sepa'
                badges={['#БезГраниц']}
                description={[
                    'Осуществляйте международные переводы без ограничений и барьеров с помощью систем Swift & Sepa.',
                    'Наша глобальная сеть партнеров позволяет проводить платежи практически в любую точку мира.',
                    'Мы обеспечиваем высокую скорость и надежность переводов, независимо от географического расположения получателя.'
                ]}
                img={{src: swift6, alt: ''}}
                className='SSP-sixth'
                id='6'
            />

            <Section
                type='imgLeft'
                title='Создавайте заявку в разделе Swift & Sepa прямо сейчас и получите обслуживание в течении 15-ти минут'
                badges={['#Заявка']}
                description={[
                    'Создавайте заявку за пару минут и получите быструю консультацию от наших операторов, которые ответят на любой интересующий вопрос и оперативно проведут сделку.'
                ]}
                img={{src: swift7, alt: ''}}
                className='SSP-seventh'
                id='7'
            >
                <Button
                    onClick={showApplicationPopUp}
                    type='whiteBrd'
                    data-aos-duration="1800"
                    data-aos='fade-left'
                    isWide={true}
                >
                    Создать заявку Swift <span>&</span> Sepa
                </Button>
            </Section>
        </div>
    )
}