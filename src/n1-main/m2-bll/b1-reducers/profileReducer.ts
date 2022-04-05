type InitialStateType = {}
const initState = {}

export const profileReducer = (state:InitialStateType = initState, action: profileACType): InitialStateType => {
    switch (action.type) {
        case 'PROFILE': {
            return {...state}
        }
        default:
            return state
    }
}

type profileACType = ReturnType<typeof profileAC>
export const profileAC = () => ({type: 'PROFILE'}) as const