const initialState: InitialStateType = {
    status: 'idle',
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsAppType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-APP-STATUS': {
            return {...state, status: action.payload.status}
        }
        default:
            return state
    }
}

//action
export const setAppStatusAC = (status: AppStatusType) => {
    return {type: 'login/SET-APP-STATUS', payload: {status}} as const
}

//type
export type AppStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type InitialStateType = {
    status: AppStatusType
}

export type SetAppStatusACType = ReturnType<typeof setAppStatusAC>

type ActionsAppType = SetAppStatusACType
