import { prepareData } from '../../utils/data-utils';

export const GET_DATA = 'GET_DATA';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';
export const SElECT_CHECKBOX = 'SElECT_CHECKBOX';


export function getData(str) {
    let data;
    try{
        data = JSON.parse(str);
    }catch (e) {
        return {
            type: GET_DATA_ERROR,
            payload: {
                message: "Invalid JSON data",
            }
        }
    }
    data.forEach(prepareData)
    return {
        type: GET_DATA,
        payload: {
            data,
        }
    }
}

export function selectedCheckBox(data) {
    return {
        type: SElECT_CHECKBOX,
        payload: data
    }
}
