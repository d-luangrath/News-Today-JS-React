import axios from "axios"


const initialState = {
    loading: false,
    articles: []
};

const PENDING = 'PENDING';
const REQUEST_ARTICLE = 'REQUEST_ARTICLE';

export const requestArticles = async (dispatch) => {
    dispatch({type: PENDING})
    let articles = await axios.get('/api/medium').then(res => res.data);
    dispatch({ dispatch: REQUEST_ARTICLE, payload: articles })
}

export default function mediumReducer (state=initialState, action) {
    return state;
}