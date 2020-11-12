
import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {CardList } from './components/card-list/card-list.component' ;
import { SearchBox } from './components/search-box/search-box.component';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload test.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{    //App component
  constructor(){
     super();
     
     this.state = {
       monsters : [],
       searchField : ''
      //  monsters : [
      //    {
      //       name : 'Frankenstein',
      //       key : 1

      //  },
      //  {   
      //   name : 'Dracula',
      //   key : 2

      //  },
      //  {

      //   name : 'Demons',
      //   key : 3

      //  }
      
      // ]
      
     }
     
  }
 componentDidMount(){

    // fetch(`https://jsonplaceholder.typicode.com/users`)
    // .then(response=>{
    //  return response.json()
    // })
    // .then(users=>{
    //   console.log(users)});
    
   //using axios learnt earlier

   axios(`https://jsonplaceholder.typicode.com/users`).then(res=>{
      console.log(res);
      this.setState({monsters : res.data});

   })
 
  
//    axios(`http://127.0.0.1:1440/api/v1/tours/`).then(res=>{//get data from NodeJs
//     console.log(res);
//    // this.setState({monsters : res.data});

//  })
     

 }

 handleChange=(e)=>{

  this.setState({searchField : e.target.value})
  

 }

 checkThis(){

console.log(this);

 }

  render(){

    const {monsters, searchField} = this.state;
    let filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField));
    //console.log(filteredMonsters);

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.name}
          </p> */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}

          {/* <button onClick = {()=>this.setState({ name  : 'Tom Thomas Paul'})}>Change Name</button> */}
          {/* <button onClick = {this.ChangeName}>Display messgae</button> */}
        {/* </header> */}
          
         {/* <CardList name = 'Tommy'><h1>PropsChild</h1></CardList> */}
         <h1>Monsters Rolodex</h1>
         <SearchBox placeholder='Search Monster' handleChange = {this.handleChange}></SearchBox>
         {/*<input className='search' type='search' placeholder="Check this" onChange={this.checkThis.bind(this)}></input>*/}
         {/*this.checkThis    to check behaviour of this*/ }
         <CardList monsters = {filteredMonsters}></CardList>

      </div>
    );


  }

// ChangeName(){

// return (<p>Hello There</p>);

// }

}

export default App;
