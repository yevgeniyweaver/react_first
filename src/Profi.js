import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


import Sidebar from './profi/Sidebar';
import Object from './profi/Object';
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

class Refs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    };
    updateState(e) {
        this.setState({data: e.target.value});
        console.log(this);
    }
    clearInput() {
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }
    render() {
        return (
            <div className="container">
                <div className="row test-react-block">
                    <input value = {this.state.data} onChange = {this.updateState}
                           ref = "myInput"></input>
                    <button onClick = {this.clearInput}>CLEAR</button>
                    <h4>{this.state.data}</h4>
                </div>
            </div>
        );
    }
}

class Profi extends React.Component{

    // static propTypes = {
    //     dataName: React.PropTypes.string
    // };

    render(){
        console.log('Props', this.props);
        return(
            <div>
                <Sidebar />
                <Refs />
                <Object />
            </div>
        )
    }
}
//
// Profi.propTypes = {
//     dataName: React.PropTypes.string,
//     // propBool: React.PropTypes.bool.isRequired,
//     // propFunc: React.PropTypes.func,
//     // propNumber: React.PropTypes.number,
//     // propString: React.PropTypes.string,
//     // propObject: React.PropTypes.object
// }

export default Profi;
