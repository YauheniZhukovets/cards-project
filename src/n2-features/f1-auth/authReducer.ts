type InitialStateType = {}
const initState = {}

export const authReducer = (state:InitialStateType = initState, action: loginACType): InitialStateType => {
    switch (action.type) {
        case 'LOGIN': {
            return {...state}
        }
        default:
            return state
    }
}

type loginACType = ReturnType<typeof loginAC>
export const loginAC = () => ({type: 'LOGIN'}) as const