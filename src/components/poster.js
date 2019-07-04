import React, {Component} from 'react'
import '../styles.css'






class Poster extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  


  render(){
    return(
      <div style = {{padding : '10px'}}>
        <img  src = {this.props.imgPoster} alt ="Not Available" />
        
      </div>
    )
  }



}

export default Poster
