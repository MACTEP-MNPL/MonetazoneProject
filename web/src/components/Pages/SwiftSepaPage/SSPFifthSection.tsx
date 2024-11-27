import {Badge} from "@/components/UI/Badges/Badge/Badge.tsx";
import swift5 from '@/assets/svgs/swift-5.svg'

export const SSPFifthSection = () => {
    return (
        <>
            <section id='5' className='SSP-fifth'>
                <img data-aos-duration="1000"
                     data-aos='fade-right'
                     src={swift5} alt=""/>

                <div className="pageRight">
                    <h2
                        data-aos-duration="1200"
                        data-aos='fade-left'
                    >Удобные Swift <span>&</span> Sepa <br />
                        платежи для любых <br />
                        необходимых бизнес-услуг</h2>
                    <Badge
                        data-aos-duration="1400"
                        data-aos='fade-left'
                    >#Бизнес</Badge>
                    <p
                        data-aos-duration="1500"
                        data-aos='fade-left'
                    >От маркетинговых кампаний до IT-разработок. <br />
                        Swift <span>&</span> Sepa помогают вам успешно <br />
                        оплачивать любые деловые услуги, <br />
                        которые требуются вашему бизнесу.<br />
                    </p>

                    <p
                        data-aos-duration="1600"
                        data-aos='fade-left'
                    >
                        С нами вы можете не беспокоиться о задержках <br />
                        в оплатах или сложностях с международными <br />
                        партнерами — все финансовые <br />
                        процессы под контролем</p>
                </div>
            </section>
        </>
    )
}