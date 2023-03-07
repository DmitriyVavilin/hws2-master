
type isLoadingType ={
    isLoading: boolean
}

const initState:isLoadingType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionType): isLoadingType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}


type ActionType = LoadingActionType


type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
}as const)
