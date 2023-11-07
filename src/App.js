import './App.css';
import React ,{Component} from 'react';
import Child from './component/child/child';





  class App extends Component{
    state={
      value:"RINSHID",
      child:"HEY RINSHID"
    }
    clk=()=>{
      this.setState({
        value:"HELLO RINSHID.KT",
        child:"RINSHID.KT"
      })
    }
    render(){
      return(
        <div id="maindiv" style={{"background-color":"pink"}}>
            <h1 style={{"color":"red"}}>HELLO</h1>
            <h2>{this.state.value}</h2>
            <button onClick={this.clk}>Click</button>
            <Child ch={this.state.child}/>
            
        </div>
      )
    }
  }

  export default App;
























