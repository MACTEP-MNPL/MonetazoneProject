import { FC, useState } from "react"
import { MobInput } from "@/components/UI/Inputs/MobInput/MobInput"
import { MobSelect } from "@/components/UI/Selects/MobSelect/MobSelect"
import { MobDatePicker } from "@/components/UI/DatePickers/MobDatePicker/MobDatePicker"
import { Button } from "@/components/UI/Buttons/Button/Button.tsx"
import { useAppDispatch } from "@/store/hooks"
import { hideAppPopUp } from "@/store/appPopUpSlice"

// Import icons
import nameSVG from "@/assets/svgs/mobile/person.svg"
import serviceSVG from "@/assets/svgs/mobile/service.svg"
import officeSVG from "@/assets/svgs/mobile/office.svg"
import dateSVG from "@/assets/svgs/mobile/clock.svg"
import rubSVG from "@/assets/svgs/mobile/rub.svg"
import walletSVG from "@/assets/svgs/mobile/wallet.svg"
import globeSVG from "@/assets/svgs/mobile/globe.svg"
import compassSVG from "@/assets/svgs/mobile/compass.svg"

import { SwiftApplicationData } from "@/components/UI/MobApplication/application"
import { ErrorMessage } from "@/components/UI/ErrorMessage/ErrorMessage.tsx"

export const MobSwiftTypeApplication: FC = () => {
    const dispatch = useAppDispatch()
    const [currentStep, setCurrentStep] = useState(1)
    const TOTAL_STEPS = 3

    const [name, setName] = useState('')
    const [paymentAssignment, setPaymentAssignment] = useState('')
    const [paymentSystem, setPaymentSystem] = useState('')
    const [currency, setCurrency] = useState('')
    const [office, setOffice] = useState('')
    const [country, setCountry] = useState('')
    const [date, setDate] = useState<any>('')
    const [amount, setAmount] = useState('')
    const [intakeCurrency, setIntakeCurrency] = useState('')
    const [submitError, setSubmitError] = useState<string | null>(null)

    const isStepValid = (step: number) => {
        switch(step) {
            case 1:
                return name && paymentSystem && date && office;
            case 2:
                return paymentAssignment && currency && country && amount && intakeCurrency;
            default:
                return true;
        }
    }

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
            const applicationData: SwiftApplicationData = {
                type: 'swift',
                name,
                date: date ? new Date(date).toLocaleDateString() : '',
                office,
                details: {
                    paymentSystem,
                    paymentAssignment,
                    country,
                    currency,
                    amount,
                    intakeCurrency
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
                        <MobSelect icon={serviceSVG} options={['Swift', 'Sepa']} placeholder="Платежная система" value={paymentSystem} setValue={setPaymentSystem} />
                        <MobDatePicker icon={dateSVG} date={date} setDate={setDate} placeholder="Дата сделки" />
                        <MobSelect icon={officeSVG} options={['Moscow City, Башня Федерация', 'Южное Тушино, Строительный проезд 7а']} placeholder="Выберите офис" value={office} setValue={setOffice} />
                    </>
                )
            case 2:
                return (
                    <>
                        <MobInput icon={compassSVG} placeholder="Назначение платежа" state={paymentAssignment} setState={setPaymentAssignment} />
                        <MobSelect icon={walletSVG} options={['Безналичный рубль']} placeholder="Валюта на сделке" value={currency} setValue={setCurrency} />
                        <MobInput icon={globeSVG} placeholder="Страна зачисления" state={country} setState={setCountry} />
                        <MobInput type="number" icon={rubSVG} placeholder="Сумма" state={amount} setState={setAmount} />
                        <MobSelect icon={walletSVG} options={['RUB', 'USD', 'EUR', 'USDT TRC20']} placeholder="Валюта зачисления" value={intakeCurrency} setValue={setIntakeCurrency} />
                    </>
                )
            case 3:
                return (
                    <div className="summary">
                        <h3>Проверьте данные:</h3>
                        <p>Имя: {name}</p>
                        <p>Платежная система: {paymentSystem}</p>
                        <p>Дата сделки: {date ? new Date(date).toLocaleDateString() : ''}</p>
                        <p>Офис: {office}</p>
                        <p>Назначение платежа: {paymentAssignment}</p>
                        <p>Валюта на сделке: {currency}</p>
                        <p>Страна зачисления: {country}</p>
                        <p>Сумма: {amount} ₽</p>
                        <p>Валюта зачисления: {intakeCurrency}</p>
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