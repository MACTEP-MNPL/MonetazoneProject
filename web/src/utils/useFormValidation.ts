import { RefObject } from 'react'
import { useDispatch } from 'react-redux'
import { hideAppPopUp } from '@/store/appPopUpSlice'

export type FormField = {
  value: string | Date
  ref: RefObject<HTMLElement>
}

export const useFormValidation = (fields: FormField[]) => {
  const dispatch = useDispatch()

  const validateForm = (): boolean => {
    let isValid = true

    fields.forEach(({ value, ref }) => {
      if (!value) {
        isValid = false
        ref.current?.classList.add('empty-red')
      } else {
        ref.current?.classList.remove('empty-red')
      }
    })

    if (isValid) {
      dispatch(hideAppPopUp())
    }
    return isValid
  }

  return { validateForm }
}