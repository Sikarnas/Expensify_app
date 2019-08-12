import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => (
// const ExpenseListItem = ({description, createdAt, amount, id}) => (
        <Link className="list-item" to={`/edit/${props.id}`}>
            <div>
                <h3 className="list_item__title">{props.description}</h3>
                <span className="list_item_subtitle">{moment(props.createdAt).format('YYYY-MM-DD')}</span>
            </div>
            <div>
                <h3 className="list-item__amount">{numeral(props.amount/100).format('00.00')} €</h3>
            </div>
        </Link>
)

export default (ExpenseListItem);
