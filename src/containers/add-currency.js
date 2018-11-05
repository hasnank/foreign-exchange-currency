import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add} from '../actions/add';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


class AddCurrency extends Component {

    constructor(props) {
        super(props);
        this.state = {dropDownValue: ""};
    }

    componentDidMount() {
        this.forceUpdate();
    }

    handleChange = event => {
        this.setState({
            dropDownValue: event.target.value
        });
        
    }

    handleSubmit(item){
        this.props.add(item);
        this.forceUpdate();
    }


    render() {
        return (
            <div>                
                <Card>
                    <CardContent>
                        <Table style={{ width: "auto", tableLayout: "auto" }}>
                            <TableRow>
                                <TableCell>
                                    <form>
                                        <FormControl fullWidth={true}>
                                            <Select
                                                autoWidth={true}
                                                style={{display:'flex', margin: 0, fullWidth: true, wrap: 'nowrap'}}
                                                value={this.state.dropDownValue}
                                                onChange={this.handleChange}
                                                input={<Input id="add" />}
                                            >                                                
                                                {this.props.dropDownList.map(function(item) {
                                                   return <MenuItem value={item}>{item}</MenuItem>                               
                                                })}
                                            </Select>
                                            <FormHelperText>Add More Currencies</FormHelperText>
                                        </FormControl>
                                    </form>
                                </TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" onClick={() => this.handleSubmit(this.state.dropDownValue)}>
                                        Submit
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        );
    }

}


function mapStateToProps(state) {
    return {
        dropDownList: state.dropDownList
    };
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({add: add}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AddCurrency);