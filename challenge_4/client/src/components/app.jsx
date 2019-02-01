import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Component2.jsx';
class App extends React.Component {
  constructor(props){
    super(props);
     this.clickBoard = this.clickBoard.bind(this);
     this.clickColumnOne = this.clickColumnOne.bind(this);
     this.state = {
         color: true,
         columnOne : [0,0,0,0,0,0]
     }
    }
  clickBoard(){
   this.setState({color : !this.state.color});
  }
  clickColumnOne(){
    var array1 = this.state.columnOne;
   for(var i = array1.length; i > 0; i--){
     if(array1[i] === 0){
        array1[i] =1;
       this.setState({columnOne : array1 });
        return;
     }
   }
  }
  render(){
    if(this.state.columnOne[this.state.columnOne.length-5]){
    var style5 = {backgroundColor : 'red'};
    }

    if(this.state.columnOne[this.state.columnOne.length-4]){
    var style4 = {backgroundColor : 'red'};
    }
    
    if(this.state.columnOne[this.state.columnOne.length-3]){
    var style3 = {backgroundColor : 'red'};
    }
    
    if(this.state.columnOne[this.state.columnOne.length-2]){
    var style2 = {backgroundColor : 'red'};
    }

    if(this.state.columnOne[this.state.columnOne.length-1]){
    var style1 = {backgroundColor : 'red'};
    }
    return (
   <div>
     <h1> CONNECT FOUR </h1>
    
    <div className = 'row1' onClick = {this.clickColumnOne} >
    <div className = 'square'>
    <div className = 'circle' style = {style5} ></div>
    </div>
    </div>

    <div className = 'row1' onClick = {this.clickColumnOne} >
    <div className = 'square'>
    <div className = 'circle' style = {style4} ></div>
    </div>
    </div>

    <div className = 'row1' onClick = {this.clickColumnOne} >
      <div className = 'square'>
    <div className = 'circle' style = {style3} ></div>
    </div>
    </div>

    <div className = 'row1' onClick = {this.clickColumnOne} >
      <div className = 'square'>
    <div className = 'circle' style = {style2} ></div>
    </div>
    </div>
  
    <div className = 'row1' onClick = {this.clickColumnOne} >
    <div className = 'square'>
    <div className = 'circle' style = {style1} ></div>
    </div>
    </div>
   
   <input type = 'submit' value ='player1' onClick = {this.clickBoard}></input>
   <input type = 'submit' value ='player2' onClick = {this.clickBoard}></input>
   </div>
   )
  }  
}

export default App;
