import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import './main.css';
//import './main';
import Header from './Header.js';
import Content from './Content.js';
import Vakansii from './Vakansii.js';

// function App() {
//   return (
//       <div>
//         <Header />
//         <Content />
//       </div>
//     // {/*<div className="App">*/}
//     //   {/*<header className="App-header">*/}
//     //     {/*<img src={logo} className="App-logo" alt="logo" />*/}
//     //     {/*<p>Edit <code>src/App.js</code> and save to reload.</p>*/}
//     //     {/*<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>*/}
//     //   {/*</header>*/}
//     // {/*</div>*/}
//   );
// }
let fa =11;
if(1<2){
    var fa_2 =22;
}
function crHtml(name){
    return `<p> ${ name }</p>`;
}
console.log(fa);
console.log(fa_2);
console.log(crHtml('ES2015'));

class App extends Component{
    render(){
        return(
            <div>
              <Header />
              <Content />
            </div>
        )
    }
}

export default App;
