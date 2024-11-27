import { Button } from "@/components/UI/Buttons/Button/Button.tsx"
import { MobSelect } from "@/components/UI/Selects/MobSelect/MobSelect"
import { useState } from "react"

import nameSVG from "@/assets/svgs/mobile/person.svg"
import serviceSVG from "@/assets/svgs/mobile/service.svg"
import officeSVG from "@/assets/svgs/mobile/office.svg"
import dateSVG from "@/assets/svgs/mobile/clock.svg"
import compassSVG from "@/assets/svgs/mobile/compass.svg"
import walletSVG from "@/assets/svgs/mobile/wallet.svg"
import dollarSVG from "@/assets/svgs/mobile/dollar.svg"
import noteSVG from "@/assets/svgs/mobile/note.svg"
import globeSVG from "@/assets/svgs/mobile/globe.svg"
import { MobInput } from "@/components/UI/Inputs/MobInput/MobInput"
import { MobDatePicker } from "@/components/UI/DatePickers/MobDatePicker/MobDatePicker.tsx"
import { hideAppPopUp } from "@/store/appPopUpSlice"
import { useAppDispatch } from "@/store/hooks"
import { FeaApplicationData } from "@/components/UI/MobApplication/application"
import { ErrorMessage } from "@/components/UI/ErrorMessage/ErrorMessage.tsx"




export const MobFeaTypeApplication = () => {
    const dispatch = useAppDispatch()

    const [currentStep, setCurrentStep] = useState(1)
    const TOTAL_STEPS = 3
    
    const [name, setName] = useState('')
    const [typeOfService, setTypeOfService] = useState('')
    const [office, setOffice] = useState('')
    const [date, setDate] = useState<any>('')

    const [paymentAssignment, setPaymentAssignment] = useState('')
    const [fundsJurisdiction, setFundsJurisdiction] = useState('')
    const [intakeMoneyJurisdiction, setIntakeMoneyJurisdiction] = useState('')
    const [amount, setAmount] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('')

    const [submitError, setSubmitError] = useState<string | null>(null)

    //helper function

    const isStepValid = (step: number) => {
        switch(step) {
            case 1:
                return name && typeOfService && date && office;
            case 2:
                return paymentAssignment && fundsJurisdiction && 
                       intakeMoneyJurisdiction && amount && paymentMethod;
            default:
                return true;
        }
    }

    //--------------

    const handleNext = () => {
        if (currentStep < TOTAL_STEPS && isStepValid(currentStep)) {
            setCurrentStep(prev => prev + 1)
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1)
        }
    }

    const submitApplication = async () => {
        setSubmitError(null)
        try {
            const applicationData: FeaApplicationData = {
                type: 'fea',
                name,
                date: date ? new Date(date).toLocaleDateString() : '',
                office,
                details: {
                    typeOfService,
                    paymentAssignment,
                    fundsJurisdiction,
                    intakeMoneyJurisdiction,
                    amount,
                    paymentMethod
                }
            };

            const response = await fetch('http://localhost:2999/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(applicationData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit application');
            }

            const result = await response.json();
            
            if (result.success) {
                dispatch(hideAppPopUp());
            } else {
                setSubmitError('Произошла ошибка во время отправки заявки')
            }
        } catch (error) {
            setSubmitError('Произошла ошибка во время отправки заявки')
        }
    };

    const renderStep = () => {
        switch(currentStep) {
            case 1:
                return (
                    <>
                        <MobInput icon={nameSVG} placeholder="Ваше имя" state={name} setState={setName} />
                        <MobSelect icon={serviceSVG} options={['Платёжный агент', 'Возврат валютной выручки']} placeholder="Необходимая услуга" setValue={setTypeOfService} value={typeOfService} />
                        <MobDatePicker icon={dateSVG} date={date} setDate={setDate} placeholder="Дата сделки" />
                        <MobSelect icon={officeSVG} options={['Moscow City, Башня Федерация', 'Южное Тушино, Строительный проезд 7а']} placeholder="Выберите офис" setValue={setOffice} value={office} />
                    </>
                )
            case 2:
                return (
                    <>
                        <MobInput icon={compassSVG} placeholder="Назначение платежа" state={paymentAssignment} setState={setPaymentAssignment} />
                        <MobInput icon={noteSVG} placeholder="Юрисдикция фондов" state={fundsJurisdiction} setState={setFundsJurisdiction} />
                        <MobInput icon={globeSVG} placeholder="Юрисдикция поступления средств" state={intakeMoneyJurisdiction} setState={setIntakeMoneyJurisdiction} />
                        <MobInput type="number" icon={dollarSVG} placeholder="Сумма сделки" state={amount} setState={setAmount} />
                        <MobInput icon={walletSVG} placeholder="Способ оплаты" state={paymentMethod} setState={setPaymentMethod} />
                    </>
                )
            case 3:
                return (
                    <div className="summary">
                        <h3>Проверьте данные:</h3>
                        <p>Имя: {name}</p>
                        <p>Тип услуги: {typeOfService}</p>
                        <p>Дата сделки: {date ? new Date(date).toLocaleDateString() : ''}</p>
                        <p>Офис: {office}</p>
                        <p>Назначение платежа: {paymentAssignment}</p>
                        <p>Юрисдикция фондов: {fundsJurisdiction}</p>
                        <p>Юрисдикция поступления средств: {intakeMoneyJurisdiction}</p>
                        <p>Сумма сделки: {amount}</p>
                        <p>Способ оплаты: {paymentMethod}</p>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <>
            <div className="top">
                {currentStep !== 3 && <p>Укажите необходимую информацию:</p>}
                <div className="inputs">
                    {renderStep()}
                </div>
                <div className="progressBar">
                    <div 
                        className="progress" 
                        style={{width: `${(currentStep / TOTAL_STEPS) * 100}%`}}
                    />
                </div>
            </div>

            <div className="bottom">
                {submitError && <ErrorMessage message={submitError} />}
                <div className="buttons">
                    {currentStep > 1 && (
                        <Button type="trans" onClick={handleBack}>Назад</Button>
                    )}
                    <Button 
                        type="blue" 
                        onClick={currentStep === TOTAL_STEPS ? submitApplication : handleNext}
                        className={!isStepValid(currentStep) ? 'disabled' : ''}
                    >
                        {currentStep === TOTAL_STEPS ? 'Создать заявку' : 'Продолжить'}
                    </Button>
                </div>
            </div>
        </>
    )
}