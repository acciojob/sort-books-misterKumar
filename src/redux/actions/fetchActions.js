import { FETCH, FETCH_SUCCESS, FETCH_ERROR, SORT_BY_AUTHOR, SORT_BY_TITLE } from "./actionTypes";
import axios from "axios";

export const fetch_data = () => {
    return {
        type: FETCH
    }
}

export const fetch_success = (data) => {
    return {
        type: FETCH_SUCCESS,
        payload: data.books
    }
}

export const fetch_error = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error
    }
}

export const sort_by_author = () => {

    return {
        type: SORT_BY_AUTHOR,
    }
}
export const sort_by_title = () => {
    return {
        type: SORT_BY_TITLE,
    }
}

export const fetchData = () => {
    return async function (dispatch) {
        try {
            dispatch(fetch_data())
            const response = await axios.get('https://www.dbooks.org/api/recent')
            dispatch(fetch_success(response.data))
        }
        catch (err) {
            dispatch(fetch_error(err.message))

        }
    }
}