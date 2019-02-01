import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component{
  constructor(props){
   super(props);
    this.colorChange = this.colorChange.bind(this);
    this.state ={
      clicked : false
    };
  }
colorChange(){
  this.setState({clicked : !this.state.clicked});
}
render(){

return(
  <div className = 'square'>
    <div className = 'circle'></div>
  </div>
  )
 }
}

export default Square;