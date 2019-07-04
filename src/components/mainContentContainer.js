import React, {Component} from 'react'
import Poster from './poster'
import Description from './description'
import '../styles.css'





class MainContent extends Component{
  constructor(){
    super()
    this.state = {

    }
  }


  render(){
    return(
      <div className = 'mainContent'>
        <Poster imgPoster = {this.props.content.Poster} />
        <Description itemData = {this.props.content} />
      </div>
    )
  }



}

export default MainContent
