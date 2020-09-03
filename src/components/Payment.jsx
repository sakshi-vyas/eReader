import React from "react";
import './Add.css';

class Payment extends React.Component{
  constructor(props)
  {
  super(props)
  this.state={
      name:"",
      email:"",
      phone:"",
      amount:"",
  }
  }
  handleNameChange=(event) => {
    this.setState({
        name: event.target.value
    })
}
handleEmailChange=(event)=>{
    this.setState({
        email: event.target.value
    })
}
handlePhoneChange=(event)=>{
    this.setState({
        phone: event.target.value
    })  
  }
  handleAmountChange=(event) => {
    this.setState({
        amount: event.target.value
    })
}
// handleImageChange=(event)=>{
//     this.setState({
//        image: event.target.value
//     })
// }
// handleTextFileChange=(event)=>{
//     this.setState({
//         textFile: event.target.value
//     })  
//   }
  handleSubmit=(event)=>{
    alert(`${this.state.name} ${this.state.email} ${this.state.phone} ${this.state.amount}`)
    event.preventDefault()
}

   render(){
       return (
    <div className="container" >
    <h2></h2><br></br>
    <form onSubmit={this.handleSubmit}>
    <div className="row pt-5 mx-auto add-book d-flex row" >
         <div className="col-8 form-group mx-auto add-book-input">
      <input  type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleNameChange} required/>
      </div>
      <div className="col-8 form-group mx-auto add-book-input">
      <input  type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleTitleChange} required/>
      </div>
      <div className="col-8 form-group mx-auto add-book-input">
      <input type="text" placeholder="Author" name="author" value={this.state.author} onChange={this.handleAuthorChange} required/>
      </div>
      <div className="col-8 form-group mx-auto add-book-textarea">
      <textarea type="text" cols="25" rows="5" placeholder="Desciption" name="description" value={this.state.description} onChange={this.handleDescriptionChange} required/>
      </div>
      <div className="col-8 form-group mx-auto add-book-select d-flex column">
      <label className="lbl">Image</label><input type="file" class="select" name="picture" accept=".png,.jpg,.jpeg" value={this.state.image} onChange={this.handleImageChange} required/>
      </div> 
      <div className="col-8 form-group mx-auto add-book-select d-flex column">
      <label className="lbl">TextFile</label><input type="file" class="select" name="text" accept=".txt,.docx,.pdf" value={this.state.textFile} onChange={this.handleTextFileChange} required/>
      </div>
      <div className="col-8 pt-3 mx-auto">
      <button type="submit" className="add">Pay Now</button>
      </div>
      </div>
    </form>
    </div>
  );
       }

}
export default Payment;