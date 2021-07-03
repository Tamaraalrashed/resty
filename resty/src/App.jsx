
// import './App.scss';
import React from 'react';
import Header from "./components/header/header";
import Form from "./components/form/form";
import Footer from "./components/footer/footer";
import Results from "./components/results/results";
import History from "./components/history/history";
import Help from "./components/help/help";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count:0,
      results:[],
      headers:[],
      flag:false,
      storageData:[]
    }
  }

  formHandler= (headers, results,storageData) => {
   
    this.setState({headers,results,storageData})
  }


  render(){
return (
  <Router>

  <React.Fragment>
     <div className="App">
    <Header/>
    <Switch>
    <Route exact path="/">
                      
    <Form submitHandler={this.formHandler}/>
    <Results headers={this.state.headers}  results={this.state.results} flag={this.state.flag?true:false}/>
    <History/>
    </Route>  
    <Route exact path="/history" component={History} />
   <Route  exact path="/help" component={Help} />              
   </Switch>
 
    <Footer/>
    </div>
  </React.Fragment>
   </Router>
   
  )
}
}

export default App
