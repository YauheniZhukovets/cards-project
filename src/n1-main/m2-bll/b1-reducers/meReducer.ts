type InitialStateType = {}
const initState = {}

export const meReducer = (state: InitialStateType = initState, action: MeACType): InitialStateType => {
    switch (action.type) {
        case 'ME': {
            return {...state}
        }
        default:
            return state
    }
}

type MeACType = ReturnType<typeof loginAC>
export const loginAC = () => ({type: 'ME'}) as const