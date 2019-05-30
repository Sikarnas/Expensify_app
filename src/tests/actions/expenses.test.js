import {startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase'

const CreateMockStore = configureMockStore([thunk])

test('should setup remove expense action object',() => {
    const action = removeExpense('id');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'id'
    })
})

test('should setup edit expense action object',() => {
    const action = editExpense('id', {notes: 'tavo tevas'})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'id',
        updates: {
            notes: 'tavo tevas'
        }
    })
})

test('should setup add expense action object with provided values', () => {  
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
       type:'ADD_EXPENSE',
       expense: expenses[2]
       }
    )
})

test('should add expense to database', (done) => {
    const store = CreateMockStore({})
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note: 'this is a good one',
        createdAt: 10000    
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')     
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()  
    })
})

test('should add expense defaults to database', (done) => {
    const store = CreateMockStore({})
    const expenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0   
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')     
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()  
    })
})

// test('should setup add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//        type:'ADD_EXPENSE',
//        expense: {
//         id: expect.any(String),
//         description: '', 
//         note: '', 
//         amount: 0, 
//         createdAt: 0,
//        }
//     })
// })
