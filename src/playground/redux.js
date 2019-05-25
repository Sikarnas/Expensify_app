import {createStore, bindActionCreators} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
    // or just incrementBY
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = ({reset = 0} = {}) => ({
    type: 'RESET',
    reset
})

const setCount = ({set} = {}) => ({
    type: 'SET',
    set
})

const store = createStore((state = { count: 0}, action) => {

    switch (action.type) {
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
        case 'RESET': 
        return {
            count: state.count = action.reset
        };
        case 'SET':
        return {
            count: state.count = action.set
        }
        default: return state;
    }  

});


store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount())

store.dispatch(resetCount({reset:69}))

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy: 50}))

store.dispatch(setCount({set: 420}))















// const book = {
//     title: 'tavo tevas',
//     author: 'Simonyte',
//     publisher: {
//         // name: 'lankos'
//     }
// }

// const {title, author} = book
// const {name = 'self-published'} = book.publisher

// console.log(`${title} was written by ${author} adn published by ${name}`)