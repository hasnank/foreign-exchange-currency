import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeValue} from '../actions/change-value';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {textFieldValue: this.props.baseValue};
    }

    handleChange = event => {
        this.setState({
            textFieldValue: event.target.value
        });
        this.props.changeValue(event.target.value);
    }


    render() {
        return (
            <div>                
                <Card>
                    <CardContent>
                        <Table style={{ width: "auto", tableLayout: "auto" }}>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography>
                                            USD - United States Dollars
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography>
                                            USD
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            value={this.state.textFieldValue}
                                            onChange={this.handleChange}
                                        />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        baseValue: state.baseValue
    };
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({changeValue: changeValue}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Main);