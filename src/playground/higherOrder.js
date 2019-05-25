import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>tievas</h1>
        <p>aw jis {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>this is private info!</p>
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
        return (props) => (
            <div>
            {props.isAuthenticated === true ? <WrappedComponent {...props}/> : <p>please log in</p> }         
            </div>
        )
}

const AdminInfo = withAdminWarning(Info);
const Authinfo = requireAuthentication(Info);

ReactDOM.render(<Authinfo isAuthenticated={false} info="these are the details"/>, document.getElementById('app'))