import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let copyState = [...state].sort((a, b) => {
                switch (action.payload) {
                    case "down":
                        return a.name < b.name ? 1 : -1
                    case "up":
                        return a.name > b.name ? 1 : -1
                    default:
                        return 0;
                }
            })
            return copyState
        }
        case 'check': {
            let copyState = [...state].filter(el => el.age > action.payload)
            return copyState
        }
        default:
            return state
    }
}
