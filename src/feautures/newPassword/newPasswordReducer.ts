import {ThunkType} from '../../bll/store';
import {recoverAPI} from '../../api/recoveryAPI';
import {setAppStatusAC} from '../../app/appReducer';
import {AxiosError} from 'axios';
import {utilsError} from '../../utils/utils_error';

type newPasswordInitialStateType = {
    isCreated: boolean
}

export type newPasswordActionType = ReturnType<typeof setIsCreatedAC>

const initialState: newPasswordInitialStateType = {
    isCreated: false
}

export const newPasswordReducer = (state: newPasswordInitialStateType = initialState, action: newPasswordActionType): newPasswordInitialStateType => {
    switch (action.type) {

        case 'newPassword/SET-IS-CREATED': {
            return {...state, isCreated: action.status}
        }

        default:
            return state
    }
}

const setIsCreatedAC = (status: boolean) => {
    return {
        type: 'newPassword/SET-IS-CREATED',
        status
    } as const
}


export const createNewPasswordTC = (newPassword: string, token: string): ThunkType => async (dispatch) => {

    try {
        dispatch(setAppStatusAC('loading'))

        const res = await recoverAPI.setNewPassword(newPassword, token)

        if (res.data.info === 'setNewPassword success —ฅ/ᐠ.̫ .ᐟฅ—') {
            dispatch(setIsCreatedAC(true))
            dispatch(setAppStatusAC('succeeded'))
        }
    } catch (e) {
        const err = e as Error | AxiosError<{ error: string }>
        utilsError(err, dispatch)
    } finally {
        dispatch(setAppStatusAC('idle'))
    }

}