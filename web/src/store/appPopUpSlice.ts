import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AppPopUpState {
    isShown: boolean;
    applicationType: 'fea' | 'swift' | 'cash';
    isCash: 'Выдача наличных по миру' | ''
    whatCountry: string
}

const initialState: AppPopUpState = {
    isShown: false,
    applicationType: 'fea',
    isCash: '',
    whatCountry: ''
}

const appPopUpSlice = createSlice({
    name: 'appPopUpSlice',
    initialState,
    reducers: {
        showAppPopUp: (state: AppPopUpState) => {
            state.isShown = true
        },
        hideAppPopUp: (state: AppPopUpState) => {
            state.isShown = false
        },
        setAppType: (state: AppPopUpState, action:  PayloadAction<'fea' | 'swift' | 'cash'>) => {
            state.applicationType = action.payload

        },
        resetAppType: (state: AppPopUpState) => {
            state.applicationType = 'fea'
        },
        setCountry: (state: AppPopUpState, action: PayloadAction<string>) => {
            state.isCash = 'Выдача наличных по миру'
            state.whatCountry = action.payload
        },
        isCash: (state: AppPopUpState) => {
            state.isCash = 'Выдача наличных по миру'
        }
    }
})

export const {showAppPopUp,
    hideAppPopUp,
    setAppType,
    setCountry,
    isCash} = appPopUpSlice.actions;

export const appPopUpReducer = appPopUpSlice.reducer;
