import React, {Component} from 'react'
import '../styles.css'
import NoImage from './noImage.png'






class Poster extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  


  render(){
    return(
      <div style = {{padding : '10px'}}>
        <img  src = {this.props.imgPoster === "N/A" ? NoImage : this.props.imgPoster} width = "300" height = "445" alt ="Not Available" />
        
      </div>
    )
  }



}

export default Poster
