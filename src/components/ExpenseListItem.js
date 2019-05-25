import React from 'react';
import {removeExpense} from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
// const ExpenseListItem = ({description, createdAt, amount, id}) => (
    <div>
        <Link to={`/edit/${props.id}`}>
        {props.description}</Link>
        <p>{`$ ${props.amount/100} ${props.createdAt}`}</p>
    </div>
)

export default (ExpenseListItem);
