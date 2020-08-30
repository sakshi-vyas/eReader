import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card, CardDeck} from "react-bootstrap";
import "./Book.css";
//import StarRatingComponent from './StarRatingComponent';
import Rate from './Rate'
const New = () => {
  const cardInfo = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAQldFbywLQbnBBgho5Q8roFArNyJIQrs_3Q&usqp=CAU',
      title: "Lebron Jam",
      author:"Author1",
      text: "THE GOAT",
      rating: 3,
    },
    {
        image: "",
      title: "Michael Jordan",
      author:"Author2",
      text: "he is very close to goat",
      rating: 3,
    },
    {   
        image: "",
      title: "Lebron James",
      author:"Author3",
      text: "THE GOAT",
      rating: 3,
    },
    {
        image: "",
      title: "Alex Caruso",
      author:"Author4",
      text: "THE TRUE GOAT",
      rating: 3,
    },
    {
        image: "",
      title: "Steph Curry",
      author:"Author5",
      text: "he good",
      rating: 3,
    },
    {
      image: "",
      title: "Michael Jordan",
      author:"Author6",
      text: "he is very close to goat",
      rating: 3,
    },
    {
        image: "",
      title: "Lebron James",
      author:"Author7",
      text: "THE GOAT",
      rating: 3,
    },
    {
        image: "",
      title: "Alex Caruso",
      author:"Author8",
      text: "THE TRUE GOAT",
      rating: 3,
    },
    {
        image: "",
      title: "Steph Curry",
      author:"Author9",
      text: "he good",
      rating: 3,
    },
    {
      image: "",
      title: "Michael Jordan",
      author:"Author10",
      text: "he is very close to goat",
      rating: 3,
    },
    {
        image: "",
      title: "Lebron James",
      author:"Author11",
      text: "THE GOAT",
      rating: 3,
    },
    {
      image: "",
      title: "Alex Caruso",
      author:"Author12",
      text: "THE TRUE GOAT",
      rating: 3,
    },
  ];

  function onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
  function clickHandler(e){
    e.target.value.toggle('');
  }
  const mystyle={
      marginLeft:"15px",
      
  }
  const myRating={
    
  }
  const renderCard = (card, index) => {
    return (
        <div className="col" style={mystyle}>
<Card style={{ width: '18rem' }} className="flip-card  mb-4 ml-0 mr-0">
  <div className="flip-card-inner">
    <div  className="flip-card-front">
  <Card.Img variant="top" src="holder.js/100px180" src={card.image} height="200px" />
  <Card.Body>
    <Card.Title className="cardA-title">{card.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted cardA-subtitle">{card.author}</Card.Subtitle>
    <Card.Text className="cardA-text">

{card.text} 
</Card.Text>
    
   
    </Card.Body>
    </div>
    
   <Card.Body className="flip-card-back">
   <Rate/>
   
    </Card.Body>
  </div>
</Card>
</div>
    );
  };

  return <div className="last"><CardDeck>{cardInfo.map(renderCard)}</CardDeck></div>;
};


export default New;