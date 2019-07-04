import React, {Component} from "react";
import ReactDOM from "react-dom";
import NavBar from './components/nav'
import Search from './components/search'
import Content from './components/Content'
import "./styles.css";

class App extends Component {
  
    constructor(){
      super()
      this.state = {
          itemData: [{}],
          name:"",
          disp: 'none',
          itemDescr: [],
          test: ""
         
      }
    }

    componentDidMount(){
      fetch("https://www.omdbapi.com/?apikey=ccc94984&s=spider-man%20far%20from%20home")
      .then(response => response.json())
      .then(data => {

            this.setState({
              itemData: data.Search,
              disp: 'block'
            })
            this.getDes()
      }) 
    }

   
    
    componentDidUpdate(prevProps, prevState){
      if (prevState.name !== this.state.name){
        fetch("https://www.omdbapi.com/?apikey=ccc94984&s=" + this.state.name)
          .then(response => response.json())
          .then(data => {
            if (data.Response === 'True'){
                this.setState({
                  itemData: data.Search,
                  disp: 'block',
                  itemDescr: []
                  
                })
                 this.getDes() 
            }else{
              alert('Movie or tv Show not found, enter a valid query')
            }
          })
         
      }

     

    
    }

    getName = (e) =>{
      e.preventDefault()
      let itemName = e.target.elements.itemName.value
      

      this.setState({
        name : itemName
      })
    }

      getDes = () =>{
       let x = {}
        this.state.itemData.map(items =>{
          fetch("https://www.omdbapi.com/?apikey=ccc94984&i=" + items.imdbID )
          .then(response => response.json())
          .then(data => {
            this.setState({
              test : data,
              itemDescr: this.state.itemDescr.concat(data)
            })
            
          })
            
       
         
        })

        
      }
   
     
  
  
  render(){
 
  
    const output = this.state.itemDescr.map(items =>{
      return (
      <Content data = {items} />
      )
    })

    console.log(output)
    return (
      
      <div>
        <NavBar />
        <Search  getNameFromSearch = {this.getName} />
        
        
        <div style = {{display : this.state.disp}}>
             {output}
        </div>

        
      </div>
    );

  }
 
}

export default App;
