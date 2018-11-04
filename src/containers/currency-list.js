import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getData} from '../actions/get-data';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


class CurrencyList extends Component {

    // renderList() {
    //     return this.props.users.map((user) => {
    //         return (
    //             <li
    //                 key={user.id}
    //                 onClick={() => this.props.selectUser(user)}
    //             >
    //                 {user.first} {user.last}
    //             </li>
    //         );
    //     });
    // }

    loadData() {
        this.props.getData();
    }



    render() {
        return (
            <div>
                // {() => this.props.getData()}
                {this.loadData()}

                <Paper>
                  <Grid container spacing={16}>
                    
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={16}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            Standard license
                          </Typography>
                          <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                          <Typography color="textSecondary">ID: 1030114</Typography>
                        </Grid>
                        <Grid item>
                          <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">$19.00</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
            </div>        


        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        currencyData: state.currencyData,
        activeCurrency: state.activeCurrency,
        baseValue: state.baseValue
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({getData: getData}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(CurrencyList);