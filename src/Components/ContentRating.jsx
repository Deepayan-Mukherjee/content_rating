
import  { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();

    this.state = {
      
      likes:0,
      
      dislikes:0,

      totalRatings:0,

      handleLike:()=>{
        this.setState((prevState)=>({

          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings +1


        }))
      },
      handleDislike:()=>{
        this.setState((prevState)=>({

          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings +1

        }))
      }

      
    }


  }
  render() {
    return (
     <>
     <div className="content-rating">
      <p>

        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quo sit, aliquid quibusdam molestiae quas perspiciatis tenetur magni <br></br>neque labore voluptatibus dolorum vel deleniti nam amet vitae inventore fugiat adipisci!

      </p>
      
      <div className="rating-buttons">
        <button className="like-button" onClick={this.state.handleLike}>Like ({this.state.likes})</button>
        <button className="dislike-button" onClick={this.state.handleDislike}>Dislike({this.state.dislikes})</button>

        <h2>Total Ratings:({this.state.totalRatings}) </h2>
      
      </div>
      
      </div>
     </>
    );
  }
}

export default ContentRating;
