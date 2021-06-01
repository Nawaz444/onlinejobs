
/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { withRouter } from 'react-router-dom';


class main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.applynow = this.applynow.bind(this);
    }

    applynow() {
        
            const { history } = this.props;

            history.push('/Home');
        }
    render() {
        return (
            <div>
           
            <h1>Application For Job</h1> 
                <button type="button" onClick={this.applynow}>apply now</button>
               
            </div>
        );
    }
}

export default withRouter(main);
