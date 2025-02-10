import { Badge } from "@/components/UI/Badges/Badge/Badge"
import { Section } from "../../UI/Section/Section"
import fea1 from '@/assets/svgs/fea-1.svg'
import fea2 from '@/assets/svgs/fea-2.svg'
import fea3 from '@/assets/svgs/fea-3.svg'
import fea4 from '@/assets/svgs/fea-4.svg'
import fea5 from '@/assets/svgs/fea-5.svg'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

import './feaPage.scss'

export const FeaPage = () => {
    useDocumentTitle('ВЭД')
    return (
        <div className="page feaPage">
            <Section                            
                type='imgLeft'
                title='Быстрые и безопасные переводы для бизнеса без границ'
                badges={['#Задачи', '#Оплата', '#Резервы', '#Обслуживание']}
                img={{src: fea1, alt: ''}}
                className='feaPage-first'
                id='0'
            >
                <div className="guide"
                         data-aos-duration="1400"
                         data-aos='fade-left'>
                        Быстро переходите к интересующему<br/>
                        блоку информационого раздела<br/>
                        нажатием на <Badge style={{display: 'inline'}}>#Кнопку</Badge>
                </div>

            </Section>

            <Section 
                type='imgRight'
                title='Решение любых ВЭД задач – надежно, быстро, эффективно!'
                badges={['#Задачи']}
                description={['С нами ваш бизнес выходит на международный уровень без лишних трудностей. Мы предлагаем полный комплекс услуг для решения любых вопросов.']}
                img={{src: fea2, alt: ''}}
                className='feaPage-second'
                id='1'
            />

            <Section
                type='imgLeft'
                title='Удобные и гибкие способы оплаты для вашего комфорта!'
                badges={['#Оплата']}
                description={['С нами оплачивать услуги – просто и удобно. Мы предлагаем множество вариантов оплаты, которые подойдут именно вам.']}
                img={{src: fea3, alt: ''}}
                className='feaPage-third'
                id='2'
            />

            <Section
                type='imgRight'
                title='Надежность и стабильность с нашими большими резервами!'
                badges={['#Резервы']}
                description={['Мы всегда готовы поддержать ваш бизнес благодаря обширным финансовым резервам.']}
                img={{src: fea4, alt: ''}}
                className='feaPage-fourth'
                id='3'
            />

            <Section
                type='imgLeft'
                title='Клиентское обслуживание, на которое можно положиться!'
                badges={['#Обслуживание']}
                description={['Мы заботимся о каждом клиенте, предлагая первоклассный сервис на всех этапах сотрудничества.']}
                img={{src: fea5, alt: ''}}
                className='feaPage-fifth'
                id='4'
            />

        </div>
    )
}