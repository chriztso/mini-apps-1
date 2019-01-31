class App extends React.Component{
  constructor(props){
    super(props);
    this.checkoutOnClick = this.checkoutOnClick.bind(this);
    this.formOneSwitch = this.formOneSwitch.bind(this);
    this.formTwoSwitch = this.formTwoSwitch.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changePhoneNumber = this.changePhoneNumber.bind(this);
    this.changeCreditCard = this.changeCreditCard.bind(this);
    this.changeExpirationDate = this.changeExpirationDate.bind(this);
    this.purchaseClicked = this.purchaseClicked.bind(this);
    this.state ={
      originalPageRender : true,
      formOneRender : false, 
      formTwoRender : false, 
      formThreeRender : false,
      information : {},
      customerData : []
    }
  }
  
  checkoutOnClick(){
    this.setState({originalPageRender : false,
      formOneRender : true});
  }
  formOneSwitch(){
    this.setState({formOneRender : false,
    formTwoRender : true
    });
    console.log(this.state.information);
  }
  formTwoSwitch(){
    this.setState({formTwoRender : false,
    formThreeRender : true
    });
    console.log(this.state.information);
  }
  
  purchaseClicked(){
    this.state.customerData.push(this.state.information);
    this.setState({information : {}});
    console.log(this.state.customerData);
    console.log(this.state.information);
    this.setState({originalPageRender: true,
      formThreeRender: false});
  }
  
  changeName(){
    var information = this.state.information;
    information.name = event.target.value; 
    this.setState({information : information});
  }
  
  changeEmail(){
    var information = this.state.information;
    information.email = event.target.value; 
    this.setState({information : information});
  }
  
  changePassword(){
    var information = this.state.information;
    information.password = event.target.value; 
    this.setState({information : information});
  }
  
  changeAddress(){
    var information = this.state.information;
    information.address = event.target.value; 
    this.setState({information : information});
  }
  
  changePhoneNumber(){
    var information = this.state.information;
    information.phonenumber = event.target.value; 
    this.setState({information : information});
  }
  
  changeCreditCard(){
    var information = this.state.information;
    information.creditcard = event.target.value; 
    this.setState({information : information});
  }
  
  changeExpirationDate(){
    var information = this.state.information;
    information.expiration = event.target.value; 
    this.setState({information : information});
  }
  
  render(){
    var originalPage;
    if(this.state.originalPageRender){
    originalPage =
    <div>
    <h1> Chris's Store </h1>
    <input type = 'Submit' value = 'Checkout' onClick = {this.checkoutOnClick}></input>
    </div>
    } 
    
    var formOne;
    if(this.state.formOneRender){
    formOne = 
    <div>
      <h1> Form One </h1> 
       Name: <input type = 'text' onChange = {this.changeName}></input>
       Email:  <input type = 'text' onChange = {this.changeEmail}></input>
      Password: <input type = 'text'onChange = {this.changePassword}></input>
      <input type = 'Submit' value = 'Next' onClick = {this.formOneSwitch}></input>
    </div>
    }
    
    var formTwo;
    if(this.state.formTwoRender){
    formTwo = 
    <div>
      <h1> Form Two </h1>
       Ship To Address: <input type = 'text' onChange = {this.changeAddress}></input>
       Phone Number:  <input type = 'text' onChange = {this.changePhoneNumber}></input>
      <input type = 'Submit' value = 'Next' onClick = {this.formTwoSwitch}></input>
    </div>
    
    }
    
    var formThree;
    if(this.state.formThreeRender){
    formThree = 
    <div>
      <h1> Form Three </h1>
        Credit Card #: <input type = 'text' onChange = {this.changeCreditCard} ></input>
        Expiration Date: <input type = 'text' onChange = {this.changeExpirationDate}></input>
      <input type = 'Submit' value = 'Purchase' onClick = {this.purchaseClicked}></input>
    </div>
    
    }
    
    return (
    <div>
    {originalPage}
    {formOne}
    {formTwo}
    {formThree}
    </div>
  
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



