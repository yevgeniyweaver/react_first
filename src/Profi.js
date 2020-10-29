import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import './profi/css/main.css';
import './profi/css/style.css';
import Sidebar from './profi/Sidebar';
// import Content from './Content.js';
// import Vakansii from './Vakansii.js';

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

class Profi extends Component{
    render(){
        return(
            <div>
                <Sidebar />
            </div>
        )
    }
}

export default Profi;
