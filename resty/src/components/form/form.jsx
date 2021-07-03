import React from "react";
import "./Form.scss";
import If from "../if/if";
import Loader from "../loader/loader";
const superagent = require("superagent");

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      selectedOption: "get",
      body: {},
      flg:false
    };
  }

  submitHandler = async (e) => {
    e.preventDefault();

    // let raw=await fetch(this.state.url,)
    //    setTimeout(()=>{
    let results = await superagent[this.state.selectedOption](this.state.url)
      .send(this.state.body)
      .set("Content-Type", "application/json");
    let headers = results.headers;
    // console.log('data2',  results)
    const storageData = JSON.parse(localStorage.getItem("queryParameters"));
    const { url, selectedOption, body } = this.state;
    console.log('thisstate', this.state);
    const queryParams = { url, selectedOption, body };
    if (!storageData) {
      localStorage.setItem("queryParameters", JSON.stringify([queryParams]));
    } else {
      
      const found = storageData.find((data) => {
        // console.log('data.selectedOption:', data.selectedOption,'data.url:' , data.url);
        return (
         
          data.selectedOption === selectedOption &&
          data.url === url &&
          data.body === body
          );
        });
        if (!found) {
          console.log('not found!');
          storageData.push(queryParams);
          localStorage.setItem("queryParameters", JSON.stringify(storageData));
        }
      }
      this.props.submitHandler(headers, results.body,storageData);

    //    },1000)
  };

  urlHandler = (e) => {
    e.preventDefault();

    let url = e.target.value;

    this.setState({ url });
  };

  onValueChange = (e) => {
    e.preventDefault();
    let selectedOption = e.target.value.toLowerCase();
    // console.log("selected", selectedOption);
    this.setState({
      selectedOption: selectedOption,
    });
  };

  sendBody = (e) => {
    e.preventDefault();
    let body = e.target.value;
    // console.log("value of body", body);
    this.setState({ body });
  };

  toggle = () => {
    this.setState({ flag: !this.state.flag });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler} className="form" action="">
          <label>
            <input
              type="text"
              value={this.state.url}
              onChange={this.urlHandler}
            />
            <button>GO!</button>
          </label>
          <If condition={this.state.flag}>
            <Loader></Loader>
          </If>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="GET"
                name="method"
                onChange={this.onValueChange}
              />
              GET
            </label>
            <label>
              <input
                type="radio"
                value="POST"
                name="method"
                onChange={this.onValueChange}
              />
              POST
            </label>
            <label htmlFor="">
              <input
                type="radio"
                value="PUT"
                name="method"
                onChange={this.onValueChange}
              />
              PUT
            </label>
            <label htmlFor="">
              <input
                type="radio"
                value="DELETE"
                name="method"
                onChange={this.onValueChange}
              />
              DELETE
            </label>

            <textarea
              name="textArea"
              id=""
              cols="100"
              rows="4"
              onChange={this.sendBody}
            ></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
