import React from 'react';
import {connect} from 'react-redux'
import {startLogin} from '../actions/auth'

const LoginPage = (props) => (
    <div className="login_box">
        <div className="login_box__box">
            <h1 className="box-layout__title">Expensify App</h1>
            <p>Track your expenses with ease</p>
            <button className="ui primary button" onClick={props.startLogin}><i className="google icon"></i> Login with Google</button>
        </div>   
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)