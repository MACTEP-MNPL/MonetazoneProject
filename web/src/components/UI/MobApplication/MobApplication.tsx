import { FC } from "react"
import cross from '../../../assets/svgs/mobile/cross.svg'
import './mobApplication.scss'
import { MobBadge } from "@/components/UI/Badges/MobBadge/MobBadge"
import { useDispatch, useSelector } from "react-redux"
import { MobFeaTypeApplication } from "./MobFeaTypeApplication"
import {hideAppPopUp, setAppType} from "@/store/appPopUpSlice.ts";
import { MobSwiftTypeApplication } from "./MobSwiftTypeApplication"
import { MobCashTypeApplication } from "./MobCashTypeApplication"


export const MobApplication: FC = () => {
    const dispatch = useDispatch()

    const {applicationType} = useSelector((state: any) => state.appPopUp)

    const handleSubmit = (event: any) => {
        event.preventDefault()
    };

    return (
        <div onClick={(e) => e.stopPropagation()} className="mobApplication">
            <div className="top">
                <div className="title">
                    <h2>Создание заявки</h2>

                    <div onClick={() => dispatch(hideAppPopUp())}>
                        <img className="pointer" src={cross} alt="close" />
                    </div>

                </div>
            </div>

            <div className="types">
                <p>Выберите интересующий раздел:</p>
                <div className="badges">


                    <MobBadge active={applicationType === 'fea'} onClick={() => dispatch(setAppType('fea'))}>
                        ВЭД
                    </MobBadge>

                    <MobBadge active={applicationType === 'swift'} onClick={() => dispatch(setAppType('swift'))}>
                        Swift/SEPA
                    </MobBadge>

                    <MobBadge active={applicationType === 'cash'} onClick={() => dispatch(setAppType('cash'))}>
                        Наличные
                    </MobBadge>
                </div>
            </div>

            <div className="applications">
                {applicationType === 'fea' && <form className="mobFeaTypeApplication" onSubmit={handleSubmit}><MobFeaTypeApplication /></form>}
                {applicationType === 'swift' && <form className="mobSwiftTypeApplication" onSubmit={handleSubmit}><MobSwiftTypeApplication /></form>}
                {applicationType === 'cash' && <form className="mobCashTypeApplication" onSubmit={handleSubmit}><MobCashTypeApplication /></form>}
            </div>

            <div className="bottom">
                <p>Создавая заявку вы подтверждаете что ознакомились с <a className="bold" href="">пользовательским соглашением</a> и <a className="bold" href="">AML/KYC политикой</a></p>
            </div>
            
        </div>
    )
}