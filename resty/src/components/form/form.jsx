
import React from 'react';
import './Form.scss'

class Form extends React.Component{

constructor(props){
    super (props);
    this.state={
        url:'',
        selectedOption:'get',
    };
 
}

submitHandler= async e=>{
    e.preventDefault();
    let raw=await fetch(this.state.url)
    let headers ={};
        raw.headers.forEach((val,idx)=>{
          headers[idx]=val;
        return headers;
        })
   
    const results =await raw.json();
    console.log('data2',  results)
   this.props.submitHandler(headers,results);
    
    

}




urlHandler=(e)=>{

    e.preventDefault();

    let url=e.target.value ;
 
    this.setState({ url });
    };

onValueChange=(e)=>{
    e.preventDefault();
 
    let selectedOption=e.target.value

this.setState({
    selectedOption: selectedOption
})
}

 render() {
     return(
<div>
     <form onSubmit={this.submitHandler} className="form"action="">
             <label >
              
                   <input type="text" value={this.state.url} onChange={this.urlHandler}/>
                   <button >GO!</button>
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
         
</div>
   )     
 }
}



export default Form