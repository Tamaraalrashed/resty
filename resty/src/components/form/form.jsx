
import React from 'react';
import './Form.scss'

class Form extends React.Component{

constructor(props){
    super (props);
    this.state={
        url:'http://localhost:3000/',
        selectedOption:'get',
    };
 
}

urlHandler=(e)=>{
    e.preventDefault();
    let url=e.target.value ;
    // console.log('url',url);
    this.setState({ url });
    };


    handleClick=(e)=>{
        e.preventDefault();

};

onValueChange=(e)=>{
    e.preventDefault();
    let x=e.target.value
    // console.log('value',x);
this.setState({
    selectedOption: x
})
}

 render() {
     return(
<div>
     <form  className="form"action="">
             <label >
              
                   <input type="text" value={this.state.url} onChange={this.urlHandler}/>
                   <button onClick={this.handleClick} >GO!</button>
             </label>
           
             <div className="radio"  >
                 <label >
               <input type="radio" value="GET" name="method" 
        
               onChange={this.onValueChange} 
               />GET
                 </label>
        <label >
             <input type="radio" value="POST" name="method"  
         
              onChange={this.onValueChange}  
              />POST
              </label>
              <label htmlFor="">
             <input type="radio" value="PUT" name="method"  
            
              onChange={this.onValueChange}
               />PUT
               </label>
               <label htmlFor="">
             <input type="radio" value="DELETE" name="method"   
           
              onChange={this.onValueChange}
              />DELETE  
              </label>
             </div>
           
             
         </form>
         
     
     <div className="renderedData">
  
         <p>
         {this.state.selectedOption}  {this.state.url}
         </p>
        
     </div>
</div>
   )     
 }
}



export default Form