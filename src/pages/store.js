import {configureStore, createSlice} from '@reduxjs/toolkit';
import './style/style.css'; 



const user = createSlice({
    name : 'user',

    initialState : {name :'김건아', memberYear :1 },

    reducers : {

        changeName(state){
            state.name = state.name + ' [ 아무거나 ] '
        },
        changeYear(state, action){
            state.memberYear += action.payload
        }
    }

}) //createSlice


export const { changeName, changeYear } = user.actions


const cart = createSlice({
    name:'cart',
    initialState : [],
    reducers : {
        addItem(state, action){
            const index = state.findIndex((findId) => {return findId.id === action.payload.id})
            if(index > -1){
                state[index].count++
            }else{
                state.push(action.payload)
            }
        }, //addItem
        deleteItem(state,action){
            const index = state.findIndex((findId) => {
                return findId.id === action.payload
            })
            state.splice(index,1)
        }, //deleteItem
        addCount(state,action){
            const index = state.findIndex((findId) => {
                return findId.id === action.payload
            })
            state[index].count++
        },

        subCount(state,action){
            const index = state.findIndex((findId) => {
                return findId.id === action.payload
            })
            if(state[index].count > 1) state[index].count--
        },
    }
})

export const { addItem, deleteItem, addCount,subCount } = cart.actions


 
export default configureStore({
    reducer : {
        user : user.reducer,
        cart : cart.reducer
    }
})