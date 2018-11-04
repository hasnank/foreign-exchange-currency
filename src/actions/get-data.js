import axios from 'axios'

export const getData = () => {
    
	return function (dispatch){
	   	return axios.get('https://api.exchangeratesapi.io/latest?base=USD').then(function (response) {
	   		// dispatch
		    dispatch( {
		    	type: 'CURRENCY',
		        payload: response.data
		    })	     	        
	    })
	}
};
