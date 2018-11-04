import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeValue} from '../actions/change-value';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {textFieldValue: this.props.baseValue};
    }

    componentDidMount() {
        this.forceUpdate();
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
                        <Typography>
                            USD - United States Dollars
                        </Typography>
                        <Typography>
                            USD
                        </Typography>
                        <TextField
                            value={this.state.textFieldValue}
                            onChange={this.handleChange}
                        />
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
        baseValue: state.baseValue
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({changeValue: changeValue}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Main);