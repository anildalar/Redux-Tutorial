//0. CONSTANTS
//const redux = require('redux');
const redux = require('redux');
const createStore  = require('redux').createStore;

const BUY_LAPTOP='BUY_LAPTOP';
const SELL_LAPTOP="SELL_LAPTOP"

//1. Action
/**
 * Action is a javascript object {p:v,function} having type property as a compulsory property
 * {
 *      type:somthing
 * }
 * {
 *      type:""
 * }
 */
/*
{
    type:BUY_LAPTOP
}
*/


//2. Action Creator
/**
 *  Action Creators are functions which return actions
 * 
 * function myFunction(){
 *      return {
 *          type:   
 *      }
 * }
 * 
 */


function buyNewLaptop(){ //Action Creator
    return {
        type:BUY_LAPTOP
    }
}

function sellOldLaptop(){
    return {
        type:SELL_LAPTOP
    }
}

//3. Reducer

/**
 *  What are reducers
 * 
 * Reducer are functions which accept initial state/data and return new state/data
 * 
 */

const initialState = {
    noOfLaptops:10
}

const rootReducer = (state = initialState,action)=>{ //formal Arg
    switch(action.type){
        case BUY_LAPTOP:
            return {
                ...state, // this is a spread operator
                noOfLaptops:state.noOfLaptops + 1
            }
            break;
        case SELL_LAPTOP:
            return {
                ...state, // this is a spread operator
                noOfLaptops:state.noOfLaptops - 1
            }
            break;
        case 3:
            return {

            }
            break;
        case 4:
            return {

            }
            break;
        default:
            return state;
    }
}


//4. Store

// Lets Create a Store Object
let store = createStore(rootReducer);

console.log(store);

/**
 * store object contain below methods
 * 1. store.dispatch();
 * 2. store.subscribe();
 * 3. store.getState();
 * 4. store.replaceReducer();
 * 
 */

console.log(store.getState());

//Call the action
console.log(store.dispatch(sellOldLaptop()));
console.log(store.dispatch(sellOldLaptop()));


//Call another action
console.log(store.dispatch(buyNewLaptop()));
console.log(store.dispatch(buyNewLaptop()));
console.log(store.dispatch(buyNewLaptop()));


console.log(store.getState());