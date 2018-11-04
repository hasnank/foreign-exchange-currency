import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add} from '../actions/add';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


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

    handleSubmit = event => {
        this.props.add(event.target.value);
    }


    render() {
        return (
            <div>                
                <Card>
                    <CardContent>
                        <Select
                            value={this.state.dropDownValue}
                            onChange={this.handleChange}
                        >
                            {this.props.dropDownList.map(function(item) {
                               return <MenuItem value={item}>{item}</MenuItem>                               
                            })}
                        </Select>
                    </CardContent>
                </Card>
            </div>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        dropDownList: state.dropDownList
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({add: add}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(AddCurrency);