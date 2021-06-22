
import React from 'react';
import ReactJson from 'react-json-view';


class Results extends React.Component{

 render() {
     return(

        <React.Fragment>
        <div className="renderedData">
        <h2>Headers</h2>
        <ReactJson src={this.props.headers} />
        <h2>Results</h2>
        <ReactJson src={this.props.results} />
       
        </div>
    
        </React.Fragment> 
     
    
   )     
 }
}



export default Results