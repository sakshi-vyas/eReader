import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardDeck} from "react-bootstrap";
import {useState, useEffect} from 'react';
import "../css-components/Book.css";
import Rate from '../components/Rate';
import axios from 'axios';
import CardBook from "../components/CardBook"
const New = () => {
  const [category,setCategory]=useState("fantasy")
  const [cardInfo,setCardInfo]=useState([
  
  ]);
  const [isLoading,setIsLoading]=useState(true)
  const fetchBook=async()=>{
    const res= await fetch (`http://localhost:3000/api/users/category/${category}`);
    const data=await res.json();
    setCardInfo(data.data)
  }
  console.log(cardInfo);
    useEffect( ()=>{
    setIsLoading(true);
    fetchBook();
    setIsLoading(false);
  },[category])
    
  


  const handleCategory=e=>{
    const val=e.target.value
    setCategory(val);
    
  }
  
  return (
    <div>
    <select value={category} onChange={handleCategory}>
    <option>Select Category</option>
    <option value="young adult fiction">Young Adult Fiction</option>
    <option value="romance">Romance</option>
    <option value="science fiction">Science Fiction</option>
    <option value="adventure fiction">Adventure Fiction</option>
  <option value="fantasy">Fantasy</option>
 
 
</select>
  <CardDeck>
   {{isLoading} ? cardInfo.map(card=> <CardBook card={card}/>) : null}
 </CardDeck>
  </div>
  );
};


export default New;

// var image = document.createElement('image');
   
//     document.body.appendChild(image)