import React from 'react';
import { Link } from 'react-router-dom';
import {startLogout} from '../actions/auth'
import {connect} from 'react-redux'

export const Header = ({startLogout}) => (
        <header className="header">
        <div className="ui container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard" exact={'true'}><h1><span/> <i className="money bill alternate outline icon"></i>Expense App</h1></Link>
                {/* <NavLink to="/help" activeClassName="is-active">Help</NavLink> */}
                <button className="ui inverted button" onClick={startLogout}><i className="user outline icon"></i>Logout</button>
            </div>
        </div>   
    </header>

    
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)

