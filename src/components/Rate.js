import StarRatingComponent from 'react-star-rating-component';
import React from 'react';
import ReactDOM from 'react-dom';
class Rate extends React.Component { 
  constructor() {
    super();
 
    this.state = {
      rating: 3
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <h3 style={{color:"white",fontSize:"1em"}}>Rating: {rating}</h3>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
export default Rate;