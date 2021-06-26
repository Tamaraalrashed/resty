
// import './App.scss';
import React from 'react';
import Header from "./components/header/header";
import Form from "./components/form/form";
import Footer from "./components/footer/footer";
import Results from "./components/results/results";
import History from "./components/history/history";


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count:0,
      results:[],
      headers:[]
    }
  }

  formHandler= (headers, results) => {
   
    this.setState({headers,results})
  }


  render(){
return (
  <React.Fragment>
     <div className="App">
    <Header/>
    <Form submitHandler={this.formHandler}/>
    <div id='container'>
          <ul>
            <History />
          </ul>
    {/* <History /> */}
    </div>
    <Results headers={this.state.headers}  results={this.state.results}/>
    <Footer/>
    </div>
  </React.Fragment>
   
  )
}
}

export default App
