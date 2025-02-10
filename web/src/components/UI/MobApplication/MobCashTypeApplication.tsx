import { FC, useState, useEffect, useCallback } from "react"
import { MobInput } from "@/components/UI/Inputs/MobInput/MobInput"
import { MobSelect } from "@/components/UI/Selects/MobSelect/MobSelect"
import { MobDatePicker } from "@/components/UI/DatePickers/MobDatePicker/MobDatePicker"
import { Button } from "@/components/UI/Buttons/Button/Button"
import {useAppDispatch, useAppSelector} from "@/store/hooks"
import { hideAppPopUp } from "@/store/appPopUpSlice"

import nameSVG from "@/assets/svgs/mobile/person.svg"
import serviceSVG from "@/assets/svgs/mobile/service.svg"
import officeSVG from "@/assets/svgs/mobile/office.svg"
import dateSVG from "@/assets/svgs/mobile/clock.svg"
import globeSVG from "@/assets/svgs/mobile/globe.svg"
import compassSVG from "@/assets/svgs/mobile/compass.svg"
import walletSVG from "@/assets/svgs/mobile/wallet.svg"

import usdSVG from "@/assets/svgs/mobile/usd.svg"
import euroSVG from "@/assets/svgs/mobile/euro.svg"
import rubSVG from "@/assets/svgs/mobile/rub.svg"
import usdtSVG from "@/assets/svgs/mobile/usdt.svg"


import { countries } from "@/utils/countries"
import { CashApplicationData } from "@/components/UI/MobApplication/application"
import { ErrorMessage } from "@/components/UI/ErrorMessage/ErrorMessage.tsx"
import { endpoints } from "@/utils/api"
export const MobCashTypeApplication: FC = () => {
    const {isCash, whatCountry} = useAppSelector(state => state.appPopUp)

    const [submitError, setSubmitError] = useState<string | null>(null)

    const dispatch = useAppDispatch()
    const [currentStep, setCurrentStep] = useState(1)

    const [name, setName] = useState('')
    const [type, setType] = useState<string>(isCash)
    const [office, setOffice] = useState('')
    const [date, setDate] = useState<any>('')

    const [amount, setAmount] = useState('')
    const [country, setCountry] = useState(whatCountry)
    const [city, setCity] = useState('')
    const [currency, setCurrency] = useState('')
    const [cashCurrency, setCashCurrency] = useState('')

    const [giveAmount, setGiveAmount] = useState('')
    const [giveAmountCurrency, setGiveAmountCurrency] = useState('USDT')
    const [getAmount, setGetAmount] = useState('')
    const [getAmountCurrency, setGetAmountCurrency] = useState('USD')

    const [exchangeRate, setExchangeRate] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const TOTAL_STEPS = type === 'Обмен валют' ? 3 : 4

    const AVAILABLE_PAIRS = {
        'USDT': ['USD', 'RUB', 'EUR'],
        'USD': ['RUB', 'EUR'],
        'EUR': ['RUB', 'USD'],
        'RUB': ['USD', 'EUR']
    };

    const isStepValid = (step: number) => {
        switch(step) {
            case 1:
                return name && type && office && date;
            case 2:
                return type === 'Обмен валют' ? (giveAmount && getAmount) : (country && currency);
            case 3:
                return type === 'Обмен валют' ? true : (cashCurrency && city);
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
        try {
            setSubmitError(null)
            const applicationData = (type === 'Обмен валют' 
                ? {
                    type: 'cash_exchange',
                    name,
                    date: date ? new Date(date).toLocaleDateString() : '',
                    office,
                    details: {
                        giveAmount,
                        giveAmountCurrency,
                        getAmount,
                        getAmountCurrency,
                        rate: exchangeRate
                    }
                }
                : {
                    type: 'cash_withdrawal',
                    name,
                    date: date ? new Date(date).toLocaleDateString() : '',
                    office,
                    details: {
                        amount,
                        country,
                        currency,
                        city,
                        cashCurrency
                    }
                }
            ) as CashApplicationData;

            const response = await fetch(endpoints.newApplication, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(applicationData)
            });


            const result = await response.json();
            
            if (result.success) {
                dispatch(hideAppPopUp());
                window.open(result.chatLink, '_blank');
            } else {
                setSubmitError('Произошла ошибка во время отправки заявки')
            }
        } catch (error) {
            setSubmitError('Произошла ошибка во время отправки заявки')
        }
    };

    const getCurrencyIcon = (currency: string) => {
        switch(currency) {
            case 'USDT': return usdtSVG;
            case 'Доллар': return usdSVG;
            case 'Евро': return euroSVG;
            case 'EUR': return euroSVG;
            case 'RUB': return rubSVG;
            case 'USD': return usdSVG;
            default: return usdSVG;
        }
    }

    const calculateMargin = (rate: number, margin: number) => {
        return rate * (1 + margin / 100);
    }

    const fetchExchangeRate = async (fromCurrency: string, toCurrency: string) => {
        try {
            setIsLoading(true)
            setError(null)

            const marginResponse = await fetch(endpoints.margin)
                const marginData = await marginResponse.json()
                const margin = marginData.margin

            
            // If USDT is involved, use direct rate
            if (fromCurrency === 'USDT' || toCurrency === 'USDT') {
                const market = fromCurrency === 'USDT' ? `${fromCurrency.toLowerCase()}${toCurrency.toLowerCase()}` 
                                                      : `${toCurrency.toLowerCase()}${fromCurrency.toLowerCase()}`;
                const response = await fetch(`https://garantex.org/api/v2/depth?market=${market}`);
                const data = await response.json();

                if (data.asks && data.asks[0]) {
                    const rate = parseFloat(data.asks[0].price);
                    const finalRate = fromCurrency === 'USDT' ? rate : 1 / rate;
                    setExchangeRate(calculateMargin(finalRate, margin));
                }

            } else {
                // For non-USDT pairs (like USD/RUB, EUR/RUB), convert through USDT
                const fromToUsdt = await getDirectRate('USDT', fromCurrency);  // Get USDT/USD rate
                const toToUsdt = await getDirectRate('USDT', toCurrency);      // Get USDT/RUB rate
                
                if (fromToUsdt && toToUsdt) {
                    // Calculate cross rate: first convert to USDT, then to target currency
                    const crossRate = (1 / fromToUsdt) * toToUsdt;
                    setExchangeRate(calculateMargin(crossRate, margin));
                }
            }
        } catch (error) {
            setError('Ошибка при получении курса');
            console.error('Ошибка при получении курса:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const getDirectRate = async (fromCurrency: string, toCurrency: string) => {
        try {
            const market = `${fromCurrency.toLowerCase()}${toCurrency.toLowerCase()}`;
            const response = await fetch(`https://garantex.org/api/v2/depth?market=${market}`);
            const data = await response.json();
            
            if (data.asks && data.asks[0]) {
                return parseFloat(data.asks[0].price);
            }

            return null;
        } catch (error) {
            console.error(`Error fetching ${fromCurrency}/${toCurrency} rate:`, error);
            return null;
        }
    };

    const calculateGetAmount = (amount: string) => {
        if (exchangeRate && amount) {
            const calculated = (parseFloat(amount) * exchangeRate).toFixed(2);
            setGetAmount(calculated);
        }
    };

    const debounce = (func: Function, wait: number) => {
        let timeout: NodeJS.Timeout;
        return (...args: any[]) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    };

    const debouncedFetchRate = useCallback(
        debounce((fromCurrency: string, toCurrency: string) => {
            fetchExchangeRate(fromCurrency, toCurrency);
        }, 500),
        [] // Empty dependency array since we don't want to recreate this function
    );

    useEffect(() => {
        if (giveAmount === '') {
            setGetAmount('');
            return;
        }

        if (giveAmountCurrency && getAmountCurrency) {
            debouncedFetchRate(giveAmountCurrency, getAmountCurrency);
        }
    }, [giveAmountCurrency, getAmountCurrency, giveAmount]);

    // Add a separate effect to update getAmount whenever exchangeRate or giveAmount changes

    useEffect(() => {
        if (exchangeRate && giveAmount) {
            calculateGetAmount(giveAmount);
        }
    }, [exchangeRate, giveAmount]);



    const renderStep = () => {
        switch(currentStep) {
            case 1:
                return (
                    <>
                        <MobInput 
                            icon={nameSVG} 
                            placeholder="Ваше имя" 
                            state={name} 
                            setState={setName} 
                        />

                        <MobSelect 
                            icon={serviceSVG}
                            options={['Обмен валют', 'Выдача наличных по миру']}
                            placeholder="Тип услуги"
                            value={type}
                            setValue={setType}
                        />
                        
                        <MobDatePicker 
                            icon={dateSVG}
                            date={date}
                            setDate={setDate}
                            placeholder="Дата сделки"
                        />

                        <MobSelect 
                            icon={officeSVG}
                            options={['Moscow City, Башня Федерация', 'Южное Тушино, Строительный проезд 7а']}
                            placeholder="Выберите офис"
                            value={office}
                            setValue={setOffice}
                        />
                    </>
                )
            case 2:
                return (
                    <>
                        {type === 'Обмен валют' ? (
                            <>
                                <div className="flex">
                                    <MobSelect
                                        icon={getCurrencyIcon(giveAmountCurrency)}
                                        placeholder=""
                                        value={giveAmountCurrency}
                                        setValue={(value) => {
                                            setGiveAmountCurrency(value);
                                            if (!AVAILABLE_PAIRS[value as keyof typeof AVAILABLE_PAIRS].includes(getAmountCurrency)) {
                                                setGetAmountCurrency(AVAILABLE_PAIRS[value as keyof typeof AVAILABLE_PAIRS][0]);
                                            }
                                        }}
                                        options={['USDT', 'USD', 'EUR', 'RUB']}
                                    />

                                    <MobInput
                                        icon={getCurrencyIcon(giveAmountCurrency)}
                                        placeholder="Отдаете"
                                        state={giveAmount}
                                        setState={(value: string) => {
                                            setGiveAmount(value);
                                            if (exchangeRate) {
                                                calculateGetAmount(value);
                                            }
                                        }}
                                        type="number"
                                    />
                                </div>

                                <div className="flex">
                                    <MobSelect
                                        placeholder=""
                                        icon={getCurrencyIcon(getAmountCurrency)}
                                        value={getAmountCurrency}
                                        setValue={setGetAmountCurrency}
                                        options={AVAILABLE_PAIRS[giveAmountCurrency as keyof typeof AVAILABLE_PAIRS] || []}
                                    />

                                    <MobInput
                                        icon={getCurrencyIcon(getAmountCurrency)}
                                        placeholder="Получаете"
                                        state={getAmount}
                                        type="number"
                                    />
                                </div>

                                {isLoading && (
                                    <p className="rate-status">
                                        <span className="loader"></span>
                                        Загрузка курса...
                                    </p>
                                )}
                                {error && <p className="rate-status error">{error}</p>}
                                {exchangeRate && !isLoading && !error && (
                                    <p className="rate-status">
                                        Курс обмена:
                                        1 {giveAmountCurrency} = {exchangeRate.toFixed(4)} {getAmountCurrency}
                                    </p>
                                )}
                            </>
                        ) : (
                            <>
                                <MobSelect
                                    withSearch
                                    options={countries.map(country => country.name)}
                                    icon={globeSVG}
                                    placeholder="Страна выдачи наличных"
                                    value={country}
                                    setValue={setCountry}
                                />

                                <MobSelect
                                    icon={getCurrencyIcon(currency)}
                                    options={['USDT', 'USD', 'EUR', 'RUB']}
                                    placeholder="Валюта на сделке"
                                    value={currency}
                                    setValue={setCurrency}
                                />

                                <MobInput
                                    icon={walletSVG}
                                    placeholder="Сумма сделки"
                                    state={amount}
                                    setState={setAmount}
                                    type="number"
                                    isWide
                                />
                            </>

                        )

                        }
                    </>
                );
            case 3:
                return type === 'Обмен валют' ? (
                    <div className="summary">
                        <h3>Проверьте данные:</h3>
                        <p>Имя: {name}</p>
                        <p>Тип услуги: {type}</p>
                        <p>Дата сделки: {date ? new Date(date).toLocaleDateString() : ''}</p>
                        <p>Офис: {office}</p>
                        <p>Отдаете: {giveAmount} {giveAmountCurrency}</p>
                        <p>Получаете: {getAmount} {getAmountCurrency}</p>
                    </div>
                ) : (
                    <>
                        <MobSelect
                            options={countries.find(c => c.name === country)?.cities || []}
                            icon={compassSVG}
                            placeholder="Город выдачи наличных"
                            value={city}
                            setValue={setCity}
                        />

                        <MobSelect
                            options={countries.find(c => c.name === country)?.currencies || []}
                            icon={getCurrencyIcon(cashCurrency)}
                            placeholder="Валюта выдачи наличных" 
                            value={cashCurrency} 
                            setValue={setCashCurrency} 
                        />
                    </>
                )
            case 4:
                return type === 'Обмен валют' ? null : (
                    <div className="summary">
                        <h3>Проверьте данные:</h3>
                        <p>Имя: {name}</p>
                        <p>Тип услуги: {type}</p>
                        <p>Дата сделки: {date ? new Date(date).toLocaleDateString() : ''}</p>
                        <p>Офис: {office}</p>
                        <p>Страна выдачи наличных: {country}</p>
                        <p>Валюта на сделке: {currency}</p>
                        <p>Город выдачи наличных: {city}</p>
                        <p>Валюта выдачи наличных: {cashCurrency}</p>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <>
            <div className="top">
                {currentStep !== TOTAL_STEPS && <p>Укажите необходимую информацию:</p>}
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