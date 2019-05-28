import expensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const res = expensesTotal([])
    expect(res).toBe(0)
})

test('should return a single amount', () => {
    const res = expensesTotal([expenses[0]])
    expect(res).toBe(195)
})

test('should return a total of all expenses', () => {
    const res = expensesTotal(expenses)
    expect(res).toBe(765)
})

