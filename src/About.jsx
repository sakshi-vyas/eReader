import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import web from "../src/Images/img1.jpg"
import one from "../src/Images/one.jpg"
import two from "../src/Images/two.jpg"
import first from "../src/Images/trial.jpg"
import three from "../src/Images/three.jpg"
import logo from "../src/Images/logo.png"
import "./About.css"
const myCard={
  border: '2px solid black',
  borderRadius: '6px'
}
const About = ()=>{
    return(
      <>
       <section id="abt" className="d-flex align-items-center" >
            <div className="container">
        <h2><img src={logo} style={{height:"100px",width:"200px"}}/></h2><br></br>
              <p> How a group of readers, writers, developers, designers and planners 
                are bringing the ideas from the best nonfiction to some of the busiest 
                people on the planet.</p><br/>
    </div>
        </section>
     {/* <div className="first-comp">*/}
      <div className="first-comp">
        <div className="first-img">
<img src={first}></img>
        </div>
        <div style={{justifyContent: "flex-end",width:"40%",border:"1px solid red",marginLeft:"auto",marginRight:"2em",color:"black",paddingTop:"1em",paddingBottom:"1em"}}>
        
<h2 style={ { fontSize:"2em",color:"black",textAlign:"flex-start"}}>15-minute <br/>discoveries</h2>
<p>Almost none of us have the time to read everything we’d like to read. Yet we lose countless hours 
  to activities that bring us little joy such as commuting, chores and staring at our phones. What if
   we could turn these little blocks of unallocated time into precious and rewarding moments for learning
    and reflection? Founded in 2012 by four friends, Blinkist now connects 6-million readers worldwide to
   the biggest ideas from bestselling nonfiction via 15-minute audio and text. So what makes us tick?</p>
        </div>
      </div>
        <div>
      
        <br></br>
        <div className="container">
  <div className="row">
    <div className="col-sm">
    <div className="card" style={myCard}>
  <img className="card-img-top" src={one} alt="Card image cap"/>
  <div className="card-body">
    <h4 className="card-title"><strong>Creating a meaningful product</strong></h4>
    <p className="card-text">To help people integrate fresh and relevant ideas into their busy lives, we created a new format—the book-in-blinks. You get the key insights from a nonfiction book in just 15-minutes.</p>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div className="card" style={myCard} >
  <img className="card-img-top" src={two} alt="Card image cap"/>
  <div className="card-body">
    <h4 className="card-title"><strong>Humans before algorithms</strong></h4>
    <p className="card-text">We collaborate directly with authors as well as combing bestseller lists, new releases and recommendations to find the most intriguing books, which our expert readers distill into short Blinks and quality assured by Blinkist editors.</p>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div className="card" style={myCard}>
  <img className="card-img-top" src={three} alt="Card image cap"/>
  <div className="card-body">
    <h4 className="card-title"><strong>Awards and wonderful teammates</strong></h4>
    <p className="card-text">Unique company culture, built on self-organization, helps us ensure that everything we do is worth. International recognition for our work includes a United Nations World Summit Award.</p>
  </div>
</div>
    </div>
  </div>
</div>
        </div>
        </>
    )

};
export default About;