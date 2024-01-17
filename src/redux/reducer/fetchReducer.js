import { FETCH, FETCH_ERROR, FETCH_SUCCESS, SORT_BY_AUTHOR, SORT_BY_TITLE } from "../actions/actionTypes"

let intialState = {
    loading: false,
    data: [],
    error: null
}

const fetchReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH: return { ...state, loading: true }

        case FETCH_SUCCESS: return ({ ...state, loading: false, data: action.payload, error: null })

        case FETCH_ERROR: return ({ ...state, loading: false, data: [], error: action.payload })

        case SORT_BY_AUTHOR: return ({ ...state, data: [...state.data].sort((a, b) => a.authors.localeCompare(b.authors)) })

        case SORT_BY_TITLE: return ({ ...state, data: [...state.data].sort((a, b) => a.title.localeCompare(b.title)) })

        default: return state
    }
}

export default fetchReducer;