import { GET_DATA, SElECT_CHECKBOX, GET_DATA_ERROR } from '../actions/data-actions'
import { setElementValue } from '../../utils/data-utils'

const INITIALSTATE = {
    tree: [],
};


export function dataReducer (state = INITIALSTATE, action) {
    switch (action.type) {
        case GET_DATA_ERROR:
            return {
                ...state,
                errorMessage: action.payload.message,
            };
        case GET_DATA:
            return {
                ...state,
                errorMessage: "",
                tree: action.payload.data,
            };
        case SElECT_CHECKBOX :
            const selectedItem = action.payload;
            const tree = [...state.tree];
            setElementValue(tree, selectedItem.id, selectedItem.value);
            return {
                ...state,
                tree,
            };
        default:
            return {
                ...state
            }
    }
}
