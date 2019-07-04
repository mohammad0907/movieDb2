import React, {Component} from 'react'
import Ratings from './ratings'
import '../styles.css'





class Description extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  


  render(){
      let ratings = {...this.props.itemData.Ratings}
      let rate = {...ratings[0]}
      console.log(rate.Value)

    return(
      <div className = "description">

        <div>
          <h1>{this.props.itemData.Title} - {this.props.itemData.Year} </h1>
          <span>Run Time : {this.props.itemData.Runtime} </span>
        </div>
        <div>
         <h3>IMDB : {rate.Value}  </h3> 
        </div>

        <div>
          <h3>Overview</h3>
          <p>{this.props.itemData.Plot}</p>   
        </div>
        <div>
          <h3>Main Actors</h3>
         
          <div className = 'actors'>
            <div>
              {this.props.itemData.Actors}
            </div>
           
            
          </div>
          
        
        </div>
     
      </div>
    )
  }



}

export default Description
