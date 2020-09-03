import React from "react"
import "../css-components/Book.css"
import { Card, CardDeck} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Rate from "../components/Rate"
import {Base64} from "js-base64";
import {encode, decode} from "js-base64";
const CardBook =(props)=>{
   const card=props.card;
   const mystyle={
    marginLeft:"15px"
}
function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return window.btoa(binary);
};
// const blobUrl = URL.createObjectURL(card.bimage);
var base64Flag = 'data:image/jpeg;base64,';
        var imageStr = arrayBufferToBase64(card.bimage.data);
       var im= base64Flag + imageStr;
    return(

<div className="col" key={card.bid} style={mystyle}>
<Card style={{ width: '18rem' }}  className="flip-card  mb-4 ml-0 mr-0">
  <div className="flip-card-inner">
    <div  className="flip-card-front">
   <Card.Img variant="top" src="holder.js/100px180" src={im} height="200px" /> 

   {/* image.src = 'data:image/bmp;base64,'+Base64.encode(blob); */}
  <Card.Body>
    <Card.Title className="cardA-title" style={{fontSize:"0.9em",fontWeight:"bold"}}>{card.bname}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted cardA-subtitle">{card.bauthor}</Card.Subtitle>
    <Card.Text className="cardA-text" >
    {/* {card.bdescription}   */}
 {card.bdescription < 120 ? `${card.bdescription}` : `${card.bdescription.substring(0,100)}...`}

</Card.Text>




    
   
    </Card.Body>
    </div>
    
   <Card.Body className="flip-card-back col d-flex justify-content-center flex-column">
   <Rate/>
     {/* <button>View Book</button>*/}
   
    </Card.Body>
  </div>
</Card>
</div>
    )
}
export default CardBook