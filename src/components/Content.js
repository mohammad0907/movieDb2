import React, {Component} from 'react'
import MainContent from './mainContentContainer'
import '../styles.css'





class Content extends Component{
  constructor(){
    super()
    this.state = {

    }
  }


  render(props){
    
    return(
      <div className = 'content'>
        <MainContent content = {this.props.data} />
        
      </div>
    )
  }



}

export default Content