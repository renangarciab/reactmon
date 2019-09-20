export default function favorite(state = [], action) {    
    switch (action.type){
        case 'ADD_TO_FAVORITE':
            return [ ...state, action.pokemon ]
        default:
            return state
    }
    
}