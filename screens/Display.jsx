/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = {
    table: {
        minWidth: 0,
    },
};

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            onlinejobs: [],
        };
        this.deleteapplication = this.deleteapplication.bind(this);
        this.fetch = this.fetch.bind(this);
    }

    async componentDidMount() {
        this.fetch();
    }

    async fetch() {
        const { data } = await axios.get('http://localhost:4000/onlinejobs');
        this.setState({ onlinejobs: data, isLoading: false });
    }

    async deleteapplication(onlinejobsId) {
        await axios.delete(`http://localhost:4000/onlinejobs/${onlinejobsId}`);
        await this.fetch();
    }

    

    render() {
        const { classes } = this.props;
        const { onlinejobs, isLoading } = this.state;

        if (isLoading === true) {
            return <h1>Loading...</h1>;
        }

      
        return (
            <div>
               <h1>Your Job Application Has Been  Submitted</h1>
                  <TableContainer component={Paper}>
                    <Table className={classes} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {onlinejobs.map((row) => (
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row">
                                        {row.title}
                                    </TableCell>
                                    <TableCell align="left">{row.code}</TableCell>
                                    <TableCell align="left"> 
                                        <button 
                                            variant="contained"
                                            onClick={() => this.deleteapplication(row._id)}
                                            color="secondary"
                                        >
                                            Deleteapplication
                                        </button>
                                      
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> 
            </div>
        );
    }
}

export default withRouter(withStyles(useStyles)(Display));

       