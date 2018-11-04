import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getData} from '../actions/get-data';
import {remove} from '../actions/remove';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';

class CurrencyList extends Component {

    constructor(props) {
        super(props);
        this.props.getData();
    }

    handleSubmit(item){
        this.props.remove(item);
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                {this.props.activeCurrency.map(function(item) {
                    var name = item
                    var detail = ""
                    var val = 0
                    var total = 0
                    if (name === "CAD"){
                        detail = "CAD - Canadian Dollar"
                        val = this.props.currencyData.rates['CAD']
                        total = val*this.props.baseValue
                    }
                    return (<Card>
                        <CardContent>
                            <Table style={{ width: "auto", tableLayout: "auto" }}>
                                <TableRow>
                                    <TableCell>
                                        <Typography>{name}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>{total}</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography>{detail}</Typography>
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary" onClick={() => this.handleSubmit("CAD")}>
                                            Remove
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography>1 USD = {name} {val}</Typography>
                                    </TableCell>
                                </TableRow>
                            </Table>                                      
                                        
                        </CardContent>
                    </Card>                             
                    );
                }, this)}
            </div>

        );
    }

}


function mapStateToProps(state) {
    return {
        currencyData: state.currencyData,
        activeCurrency: state.activeCurrency,
        baseValue: state.baseValue
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({getData: getData, remove:remove}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CurrencyList);