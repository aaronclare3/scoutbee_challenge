import axios from 'axios';
import { GET_DISHES, DELETE_DISH, ADD_DISH } from './types';

// GET DISHES //
export const getDishes = () => dispatch => {
    axios.get('/api/dishes/')
        .then(res => {
            dispatch({
                type: GET_DISHES,
                payload: res.data
            });
        }).catch(err => console.log(err));
}


// DELETE DISHES //
export const deleteDish = (id) => dispatch => {
    axios.delete(`/api/dishes/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_DISH,
                payload: id
            });
        }).catch(err => console.log(err));
}


// ADD DISHES //
export const addDish = (dish) => dispatch => {
    axios.post('/api/dishes/', dish)
        .then(res => {
            dispatch({
                type: ADD_DISH,
                payload: res.data
            });
        }).catch(err => console.log(err));
}
