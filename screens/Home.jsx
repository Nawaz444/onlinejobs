/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import qs from 'querystring';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        onlinejobsId: '',
        firstname: '',
        lastname:'',
        email:'',
        qualification:'',
        address:'',
        contact_no:'',
        
    };
        this.addNew = this.addNew.bind(this);
        ;
    }

    async componentDidMount() {
        const { location } = this.props;
        const { search } = location;
        const queryParams = qs.parse(search.slice(1));
        if (queryParams.onlinejobsId); {
            const { data } = await axios.get(`http://localhost:4000/onlinejobs/${queryParams.onlinejobsId}`);
            this.setState({
                onlinejobsId: queryParams.onlinejobsId,
                firstname: data.value.firstname,
                lastname:data.value.lastname,
                email:data.value.email,
                qualification:data.value.qualification,
                address:data.value.address,
                contact_no:data.value.contact_no,
            });
        }
    }

    async addNew() {
        const { history } = this.props;
        const {firstname,lastname,email,qualification,address,contact_no} = this.state;
        await axios.post('http://localhost:4000/onlinejobs', { firstname ,lastname,email,address,qualification, contact_no});
        history.push('/Display');
    }

    render() {
        const {  firstname,lastname,email,qualification,address,contact_no, onlinejobsId } = this.state;
        return (
            <div>
                <h1> Job Application Form</h1>
            
            
            <Grid
            
                container
                spacing={1}
                direction="row"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <TextField
                    id="firstname"
                    label="Enter firstname"
                    variant="outlined"
                    value={firstname}
                    onChange={(event) => this.setState((prev) => ({
                       
                        firstname:  event.target.value,
                       
                    }))}
                    />
                       
            
                 <TextField
                    id="lastname"
                    label="Enter lastname"
                    variant="outlined"
                    value={lastname}
                    onChange={(event) => this.setState((prev) => ({
                        lastname: event.target.value,
                        
                        
                    }))}
                />
                 <TextField
                    id="email"
                    label="Enter email"
                    variant="outlined"
                    value={email}
                    onChange={(event) => this.setState((prev) => ({
                       
                        email:  event.target.value,
                        

                    }))}
                />
                 <TextField
                    id="qualification"
                    label="Enter qualification"
                    variant="outlined"
                    value={qualification}
                    onChange={(event) => this.setState((prev) => ({
                        
                        qualification: event.target.value,
                     
                    }))}
                />
                 <TextField
                    id="address"
                    label="Enter address"
                    variant="outlined"
                    value={address}
                    onChange={(event) => this.setState((prev) => ({
                        
                        address: event.target.value,
                       
                    }))}
                />
                 <TextField
                    id="contact_no"
                    label="Enter contact_no"
                    variant="outlined"
                    value={contact_no}
                    onChange={(event) => this.setState((prev) => ({
                        
                        contact_no:  event.target.value,
                        
                    }))}
                />
                
                    
                         <Button variant="contained" onClick={this.addNew} color="primary">apply</Button>
                       
    
            </Grid>
            </div>
            
        );
    }
}

export default withRouter(Home);
