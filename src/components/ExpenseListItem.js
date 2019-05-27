import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => (
// const ExpenseListItem = ({description, createdAt, amount, id}) => (
    <div>
        <Link to={`/edit/${props.id}`}>
        {props.description}</Link>
        <p>
        {`$ ${numeral(props.amount/100).format('00.00')}
         ${moment(props.createdAt).format('YYYY-MM-DD')}`}
         </p>
    </div>
)

export default (ExpenseListItem);
