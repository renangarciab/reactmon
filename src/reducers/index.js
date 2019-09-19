import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './pokemonsReducer';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});