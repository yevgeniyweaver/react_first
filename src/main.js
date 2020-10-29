'use strict';
import React from 'react';
import ReactDom from 'react-dom';

// var { Router, Route, IndexRoute, hashHistory, IndexLink, Link, browserHistory } = ReactRouter;
// const Router  = ReactRouterDOM.Router,Link = ReactRouterDOM.Link,
// const { createStore } = Redux;
// const initState = {
//     todos:[],
//     posts:[]
// };
// function myreducer( state=initState, action) {
//     console.log(action,state);
//     if(action.type==="ADD_TODO"){
//
//     }
// }
// const store = createStore(myreducer);
// const todoAction = {type:'ADD_TODO', todo:'buy milk'};
// const toeatAction = {type:'ADD_TOEAT', todo:'eat bread'};
// store.dispatch(todoAction);
// store.dispatch(toeatAction);
//
//
// function select(state) {
//     return state.some.deep.property
// }
// let currentValue;
// function handleChange() {
//     let previousValue = currentValue;
//     currentValue = select(store.getState());
//
//     if (previousValue !== currentValue) {
//         console.log(
//             'Некоторое глубокое вложенное свойство измененное от ',
//             previousValue,
//             'к',
//             currentValue)
//     }
// }
//
// const unsubscribe = store.subscribe(handleChange);
// unsubscribe();


const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const NavLink =  window.ReactRouterDOM.NavLink;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;
const browserHistory = window.ReactRouterDOM.browserHistory;
//const hashHistory = Router.HashRouter.hashHistory;
// console.log(browserHistory);

const domContainer = document.getElementById('like_button_container');
const AppBox = document.getElementById('app');
const reactApp = document.getElementById('react-app');
const routerBox = document.getElementById('router');
const mainBox = document.getElementById('main-block');
const optionBox = document.getElementById('option-box');
const menuDropBox = document.getElementById('m-menu-drop-box');

// class ErrorBoundary extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }
//
//     static getDerivedStateFromError(error) {
//         // Update state so the next render will show the fallback UI.
//         return { hasError: true };
//     }
//
//     componentDidCatch(error, info) {
//         // You can also log the error to an error reporting service
//         logErrorToMyService(error, info);
//     }
//
//     render() {
//         if (this.state.hasError) {
//             // You can render any custom fallback UI
//             return <h1>Something went wrong.</h1>;
//         }
//
//         return this.props.children;
//     }
// }


class TestPropBlock extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div>{this.props.title}</div>
                    <div>{this.props.content}</div>
                </div>
            </div>
        )
    }
}
TestPropBlock.defaultProps = {
    title:'TestPropBlock',
    content:'TestPropName'
};


const QuestionItem = ({ menuOpen, dataKey, isActive, questionBlock,  showDropdown }) => (

    <div className="question-item-box" data-key={dataKey} onClick={showDropdown}>
        <div className="question-item">
            <div className={isActive ? active : ""}> </div>
            <div className="question-edge"></div>
            <div className="question-info Color_800">
                <span className="question-span">{questionBlock.question}</span>
            </div>
            <div className="question-icon">
                <div className="question-chevron-bg">
                    <i style={{ 'transform': menuOpen? 'rotate(-180deg)':'' }} className="fa fa-chevron-down question-chevron  Primary_500_text"> </i>
                </div>
            </div>
        </div>
        <div className="question-drop Primary_100_bg" style={{ 'display': menuOpen ? 'block' : 'none' }}>{questionBlock.answer}</div>
    </div>
);



//
// class ExApp extends React.Component {
//     render() {
//         return (
//             <Router>
//                 <div>
//                     <ul>
//                         <li><Link to="/react">Home</Link></li>
//                         <li><Link to="/react/about">About</Link></li>
//                         <li><Link to="/react/contact">Contact</Link></li>
//                     </ul>
//                     {this.props.children}
//                 </div>
//             </Router>
//         )
//     }
// }
// class ExHome extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Home...</h1>
//             </div>
//         )
//     }
// }
// class ExAbout extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>About...</h1>
//             </div>
//         )
//     }
// }
// class ExContact extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Contact...</h1>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<ExApp />, reactApp);
// ReactDOM.render(<ExHome />, AppBox);
// // ReactDOM.render(<ExContact />, routerBox);
//
// ReactDOM.render((
//     <Router>
//         <Route path = "/react" component = {ExApp}>
//             <IndexRoute component = {ExHome} />
//             <Route path="/react" component={ExHome} />
//             <Route path = "/react/about" component = {ExAbout} />
//             <Route path = "/react/contact" component = {ExContact} />
//         </Route>
//     </Router>
//     // <Router history = {browserHistory}>
//     //     <Route path = "" component = {ExApp}>
//     //         <IndexRoute component = {ExHome} />
//     //         <Route path="/" component={ExHome} />
//     //         {/*<Route path = "/about" component = {ExAbout} />*/}
//     //     </Route>
//     // </Router>
// ), routerBox);




// class ExRouter extends React.Component{
//     render(){
//         return(
//             <Router history = {browserHistory}>
//                 <Route path = "/" component = {ExApp}>
//                     <IndexRoute component = {ExHome} />
//                     <Route path = "/" component = {ExContact} />
//                     <Route path = "/about" component = {ExAbout} />
//                 </Route>
//             </Router>
//         )
//     }
// }

// СОЗДАНИЕ ШАБЛОННОГО ПРИЛОЖЕНИЯ С НЕСКОЛЬКИМИ ПОВТОРЯЮЩИМИСЯ КОМПОНЕНТАМИ

// class MainHome extends React.Component{
//     render() {
//         return(
//             <h1>Welcome to the Home Page</h1>
//         )
//     }
// }
// class MainLayout extends React.Component{
//         render() {
//         return(
//             <div className="app">
//                 <header className="primary-header"></header>
//                 <Link to="/widgets">Widgets</Link>
//                     <aside className="primary-aside">
//                         <ul>
//                             {/*<li><Link to="/">Home</Link></li>*/}
//                             {/*<li><Link to="/users">Users</Link></li>*/}
//                             {/*<li></li>*/}
//                         </ul>
//                     </aside>
//                     <main>
//                         {this.props.children}
//                     </main>
//             </div>
//         );
//     }
// }
// class SearchLayout extends React.Component{
//     render() {
//         return(
//             <div className="search">
//                 <header className="search-header"> </header>
//                 <div className="results">
//                     {this.props.children}
//                 </div>
//                 <div className="search-footer pagination"> </div>
//             </div>
//         );
//     }
// }
// class UserList extends React.Component{
//     render() {
//         return(
//             <ul className="user-list">
//                 <li>Dan</li>
//                 <li>Ryan</li>
//                 <li>Michael</li>
//             </ul>
//         );
//     }
// }
// class WidgetList extends React.Component{
//     render() {
//         return(
//             <ul className="user-list">
//                 <li>Widget 1</li>
//                 <li>Widget 2</li>
//                 <li>Widget 3</li>
//             </ul>
//         );
//     }
// }
//
//
// ReactDOM.render((
//     <Router>
//         <Route component={MainLayout}>
//             <Route path="/" component={MainHome} />
//             <Route component={SearchLayout}>
//                 <Route path="/users" component={UserList} />
//                 <Route path="/widgets" component={WidgetList} />
//             </Route>
//         </Route>
//     </Router>
//
// ), document.getElementById('react-app'));//reactApp
//  ReactDOM.render(<SearchLayout />,  document.getElementById('app'));






const BasicExample = () => (
    <Router>
        <div>
            <div className="container">
                <div className="row test-react-block">
                    <ul>
                        <li>
                            <NavLink exact to="/react/" activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/react/about/" activeClassName="active">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/react/topics2/" activeClassName="active">
                                Topics2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/react/topics" activeClassName="active">
                                Topics
                            </NavLink> (click this and a sub-item to see <i>activeClassName</i> applied twice)
                        </li>
                    </ul>

                    <hr />


                    <Route exact path="react/" component={Home} />

                    <Route path="/react/about/" component={About} />
                    <Route path="/react/topics" component={Topics} />
                    <Route path="/react/topics2/" component={Topic2} />
                </div>
            </div>
        </div>
    </Router>
);
const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);
const About = ({ match }) => console.log(match)||(
    <div>
        <h2>About</h2>
    </div>
);

const Topics = ({ match }) => console.log(match)||(

    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <NavLink activeClassName="active" data-cont={`${match.cer}f1`} to={`${match.url}/rendering`}>
                    Rendering with React
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" data-cont={`${match.cer}f2`} to={`${match.url}/components`}>
                    Components
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" data-cont={`${match.url}:/f3`} to={`${match.url}/props-v-state`}>
                    Props v. State
                </NavLink>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />

        <Route
            exact
            path={match.url}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);
const Topic = ({ match }) =>console.log(match)|| (
    <div>
        <h3>{match.params.topicId}</h3>
        <ul>
            <li>
                <NavLink activeClassName="active" data-cont={`${match.cer}f1`} to={`${match.url}/item1`}>
                    Item One
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" data-cont={`${match.cer}f2`} to={`${match.url}/item2`}>
                    Item two
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" data-cont={`${match.url}:/f3`} to={`${match.url}/item3`}>
                    Item three
                </NavLink>
            </li>
        </ul>
        <Route path={`${match.url}/:itemId`} component={TopicItem} />
    </div>
);

const TopicItem = ({ match }) =>console.log(match)|| (
    <div>{match.params.itemId}</div>
);




class Topic2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match:props
        }
    }
    btnClickB = (match) => {
        console.log(this.state.match)
    };
    render() {
        return (
            <button onClick={ this.btnClickB() }>НАЖМИ</button>
        );
    }
}

export default BasicExample;
//ReactDOM.render(<BasicExample />, document.getElementById("router"));





// РОУТЕР №2
//
// const RouterApp = props => (
//     <ReactRouterDOM.HashRouter>
//         <ul>
//             <li><Link to="/">TO HOME</Link></li>
//             <li><Link to="/about">TO A</Link></li>
//             <li><Link to="/b">TO B</Link></li>
//             <li><Link to="/c">TO C</Link></li>
//         </ul>
//
//         <Route path="/" exact component={Home} />
//         <Route path="/about" component={A} />
//         <Route path="/b" component={B} />
//     </ReactRouterDOM.HashRouter>
// );

// const Home = props => <h1>HOME</h1>;
// const A = props => <h1>A</h1>;
// const B = props => <h1>B</h1>;
// class RouteC extends React.Component {
//     btnClickA() {
//         // Route.push('/a');
//         // console.log(browserHistory);
//     }
//
//     btnClickB() {
//         //browserHistory.push('/b');
//     }
//     render() {
//         return(
//             <div>
//                 <h2>Route C</h2>
//                 <div>
//                     <button className="btn btn-default" onClick={ this.btnClickA }>Goto A</button>
//                     <button className="btn btn-default" onClick={ this.btnClickB }>Goto B</button>
//                 </div>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<RouterApp />, document.querySelector('#router'));

// // РОУТЕР №3
// class RouteA extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             data: ''
//         };
//         this.btnClickB = this.btnClickB.bind(this);
//         this.btnClickC = this.btnClickC.bind(this);
//     };
//     btnClickB() {
//         hashHistory.push('/b');
//     }
//     btnClickC() {
//         hashHistory.push('/c');
//     }
//     render() {
//         return(
//             <div>
//                 <h2>Route A</h2>
//                 <div>
//                     <li><Link to="/react/">TO HOME</Link></li>
//                                  <li><Link to="/react/a">TO A</Link></li>
//                                  <li><Link to="/react/b">TO B</Link></li>
//                     {/*<button className="btn btn-default" onClick={ this.btnClickB }>Goto B</button>*/}
//                     {/*<button className="btn btn-default" onClick={ this.btnClickC }>Goto C</button>*/}
//                 </div>
//             </div>
//         );
//     }
// }
// class RouteB extends React.Component {
//     btnClickA() {
//         hashHistory.push('/a');
//     }
//     btnClickC() {
//         hashHistory.push('/c');
//     }
//     render() {
//         return(
//             <div>
//                 <h2>Route B</h2>
//                 <div>
//                     <li><Link to="/react/a">TO A</Link></li>
//                     <li><Link to="/react/b">TO B</Link></li>
//                     {/*<button className="btn btn-default" onClick={ this.btnClickA }>Goto A</button>*/}
//                     {/*<button className="btn btn-default" onClick={ this.btnClickC }>Goto C</button>*/}
//                 </div>
//             </div>
//         );
//     }
// }
// // class RouteC extends React.Component {
// //     btnClickA() {
// //         hashHistory.push('/a');
// //     }
// //
// //     btnClickB() {
// //         hashHistory.push('/b');
// //     }
// //     render() {
// //         return(
// //             <div>
// //                 <h2>Route C</h2>
// //                 <div>
// //                     <button className="btn btn-default" onClick={ this.btnClickA }>Goto A</button>
// //                     <button className="btn btn-default" onClick={ this.btnClickB }>Goto B</button>
// //                 </div>
// //             </div>
// //         );
// //     }
// // }
// ReactDOM.render(
//     <Router history={hashHistory}>
//         <Route path="/react/" component={RouteA} />
//         <Route path="/react/a" component={RouteA} />
//         <Route path="/react/b" component={RouteB} />
//         {/*<Route path="/c" component={RouteC} />*/}
//         {/*<Route path="*" component={RouteA} />*/}
//     </Router>,
//     document.getElementById('react-app')
// );
//
//
//




class Keys extends React.Component {
    constructor() {
        super();
        this.state = {
            data:[
                {component: 'First...', id: 1},
                {component: 'Second...', id: 2},
                {component: 'Third...', id: 3}
            ]
        }
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.data.map((dynamicComponent, i) => <KeysContent
                        key = {i} componentData = {dynamicComponent}/>)}
                </div>
            </div>
        );
    }
}
class KeysContent extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.componentData.component}</div>
                <div>{this.props.componentData.id}</div>
            </div>
        );
    }
}
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
class Form_1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState(e) {

        this.setState({data: e.target.value});
    }
    render() {
        return (
            <div className="container">
                <div className="row test-react-block">
                    <button id="react-btn-ajax" type="button">SendAjax</button>
                    <input name="form_input" type = "text" value = {this.state.data}
                           onChange = {this.updateState} />
                    <h4>{this.state.data}</h4>
                </div>
            </div>
        );
    }
}
class Form_2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState(e) {

        this.setState({data: e.target.value});
    }
    render() {
        return (
            <div className="container">
                <div className="row test-react-block">
                    <Form_1_item myDataProp = {this.state.data}
                                 updateStateProp = {this.updateState}>
                    </Form_1_item>
                </div>
            </div>
        );
    }
}
class Form_1_item extends React.Component {
    render() {
        return (
            <div>
                <input type = "text" value = {this.props.myDataProp}
                       onChange = {this.props.updateStateProp} />
                <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}
class WillUnmount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: true};
    }
    delHeader = () => {
        this.setState({show: false});
    };
    render() {
        let myheader;
        if (this.state.show) {
            myheader = <Child />;
        }
        return (
            <div className="container">
                <div className="row test-react-block">
                    {myheader}
                    <button type="button" onClick={this.delHeader}>Delete Header</button>
                </div>
            </div>
        );
    }
}

class Child extends React.Component {
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
    }
    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}
class GetSnapShot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
            "Before the update, the favorite was " + prevState.favoritecolor;
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
        return (
            <div className="container">
                <div className="row test-react-block">
                    <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                    <div id="div1"></div>
                    <div id="div2"></div>
                </div>
            </div>
        );
    }
}
class ShouldComponentUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritecolor: "red",
            colorOnes:[ "1","2","3","4","5","6","7","8","9",],
            colorEnds:["A","B","C","D","E","F"]
        };
    }
    shouldComponentUpdate() {
        return true;
    }
    changeColor = () => {
        this.setState({favoritecolor: "#0"+Math.floor(Math.random()*this.state.colorOnes.length)+Math.floor(Math.random()*this.state.colorEnds.length)});
    };
    render() {
        return (
            <div className="container">
                <div className="row test-react-block">
                    <h1>My Favorite Color is <span style={{color:this.state.favoritecolor}}>{this.state.favoritecolor}</span></h1>
                    <button type="button" onClick={this.changeColor}>Change color</button>
                </div>
            </div>
        );
    }
}
class ExSetState extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        };
        this.setStateHandler = this.setStateHandler.bind(this);// this.closeMenu = this.closeMenu.bind(this);
    }
    setStateHandler(){
        let item = 'add item';
        let myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({data:myArray});
    };
    render(){
        return(
            <div className="container">
                <div className="row test-react-block">
                    <div id="main-block">
                        <button onClick={this.setStateHandler}>ADD AN Item</button>
                        <h4>State array:{this.state.data}</h4>
                    </div>
                </div>
            </div>
        )
    }
}
class AddClass extends React.Component{
    constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            isActive: false,
        };
    }
    toggleClass() {
        const currentState = this.state.isActive;
        this.setState({ isActive: !currentState });
    };
    render(){
        //const { isActive } = this.state.isActive;
        return(
            <div className="container">
                <div className="row test-react-block">
                    <div className={this.state.isActive ? 'btn_active st-btn-100 bg_200': 'st-btn-100 bg_200'}   onClick={this.toggleClass}  >Add Class</div>
                </div>
            </div>
        )
    }
}
class ForceUpdate extends React.Component{
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }
    forceUpdateHandler(){
        this.forceUpdate();
    }
    render(){
        return(
            <div className="container">
                <div className="row test-react-block">
                    <div className="st-btn-100 bg_200"   onClick={this.forceUpdateHandler}>Force Update</div>
                    <h3>Random number: {Math.random()}</h3>
                </div>
            </div>
        )
    }
}
class LifeCycleDid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        }, 1800)
    }
    render() {
        return (
            <div className="container">
                <div className="row test-react-block">
                    <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                </div>
            </div>
        );
    }
}
class LifeCycleGetDerived extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
    }
    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    };
    render() {
        return (
            <div className="container">
                <div className="row test-react-block">
                    <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                    <button type="button" onClick={this.changeColor}>Change color</button>
                </div>
            </div>
        );
    }
}
class FindDomNode extends React.Component{
    constructor() {
        super();
        // noinspection JSAnnotator
        this.state = {
            isActive: false,
            blockStyle: {
                padding: '10px',
                textAlign: 'center',
                color: '#fff',
                width:'175px',
                margin: '10px auto',
                transition: '1s',
                borderRadius: '50px',
                backgroundColor: 'rgb(41, 132, 52)'
            },
            blockRed: {
                padding: '10px',
                textAlign: 'center',
                color: '#fff',
                width:'175px',
                margin: '10px auto',
                transition: '1s',
                borderRadius: '50px',
                backgroundColor: 'rgb(19, 133, 227)'
            },
        };
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    }
    findDomNodeHandler(){
        this.setState({ isActive: !this.state.isActive });

        let FindDomDrop = document.getElementById('find-dom-drop');
        ReactDOM.findDOMNode(this.refs.findDomInput).focus();
        ReactDOM.findDOMNode(FindDomDrop).style.color = '#fff';
        //ReactDOM.findDOMNode(FindDomDrop).style.color = 'white';
    }
    render(){
        return(
            <div className="container">
                <div className="row test-react-block">
                    <div className="st-btn-100 bg_200"   onClick={this.findDomNodeHandler}>Force Update</div>
                    <input ref="findDomInput" placeholder="Random number" name="findDomInput"/>
                    <div style={this.state.isActive?this.state.blockRed:this.state.blockStyle} id="find-dom-drop">Random number:</div>
                </div>
            </div>
        )
    }
}

class CategoryBlockItem extends React.Component{
    render(){
        return(
            <div className="col-sm-3">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <img src="images/home/gallery3.jpg" alt=""/>
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="#" className="btn btn-default add-to-cart">
                                <i className="fa fa-shopping-cart"></i>
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class CategoryBlock extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 padding-right">
                        <div className="category-tab">
                            <div className="tab-content">
                                <div className="tab-pane fade active in" id="tshirt">
                                    <CategoryBlockItem />
                                    <CategoryBlockItem />
                                    <CategoryBlockItem />
                                    <CategoryBlockItem />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



{/*<DropdownMenu text="New"  key={questionBlock.key} showDropdown={this.dropdownClicked(questionBlock.key)}  menuOpen={this.state.openedDropdown === questionBlock.key}/>*/}

// {/*<QuestionItem*/}
//     {/*questionBlock={questionBlock}*/}
//     {/*key={questionBlock.question + Math.random()}*/}
//     {/*onMark={this.handleOnMark.bind(this, questionBlock.question)}*/}
//     {/*showDropdown={this.showDropdown}*/}
//     {/*menuOpen={this.state.menuOpen}*/}
// {/*!/>*/}




class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();
        console.log(this.state.showMenu);
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }
    render() {
        return (
            <div>
                <div className="question-item-box" onClick={this.showMenu}>
                    <div className="question-item">
                        <div className="question-edge"></div>
                        <div className="question-info Color_800">
                            <span className="question-span">NAME</span>
                        </div>
                        <div className="question-icon">
                            <div className="question-chevron-bg">
                                <i className="fa fa-chevron-down question-chevron Primary_500_text" style={this.i_style}></i>
                            </div>
                        </div>
                    </div>
                    <div className="question-drop Primary_100_bg" style={{ 'display': this.state.showMenu ? 'block' : 'none' }}>kkkkkkkkkk
                    </div>
                </div>

                <div className="question-item-box" onClick={this.showMenu}>
                    <div className="question-item">
                        <div className="question-edge"></div>
                        <div className="question-info Color_800">
                            <span className="question-span">NAME</span>
                        </div>
                        <div className="question-icon">
                            <div className="question-chevron-bg">
                                <i className="fa fa-chevron-down question-chevron Primary_500_text" style={this.i_style}></i>
                            </div>
                        </div>
                    </div>
                    <div className="question-drop Primary_100_bg" style={{ 'display': this.state.showMenu ? 'block' : 'none' }}>kkkkkkkkkk
                    </div>
                </div>
                {/*<button onClick={this.showMenu}>*/}
                {/*Show menu*/}
                {/*</button>*/}
                {/*{*/}
                {/*this.state.showMenu*/}
                {/*? (*/}
                {/*<div className="menu">*/}
                {/*<button> Menu item 1 </button>*/}
                {/*<button> Menu item 2 </button>*/}
                {/*<button> Menu item 3 </button>*/}
                {/*</div>*/}
                {/*)*/}
                {/*: (*/}
                {/*null*/}
                {/*)*/}
                {/*}*/}
            </div>
        );
    }
}
//ReactDOM.render(<Card />, mainBox);
//document.write(QuestionBlock.handleOnMark());


const e =  React.createElement;

function MenuItem(props) {
    let myStyle= {
        color: '#000',
        width:'100%',
        float: 'left',
        backgroundColor:'rgb(217, 214, 205)'
    };
    return(
        <a style={myStyle} className="m-menu-drop-item" href={props.menu.ulr}>{props.menu.name}</a>
    );
}



class MainMenu extends React.Component{
    state = {
        menu:[
            {'name':'Все новострои','ulr':'https://premier-odessa.com.ua/novostroi.html'},
            {'name':'Приморский район','ulr':'https://premier-odessa.com.ua/primorskijj/novostori-jk'},
            {'name':'Малиновский район','ulr':'https://premier-odessa.com.ua/malinovskijj/novostori-jk'},
            {'name':'Суворовский район','ulr':'https://premier-odessa.com.ua/malinovskijj/novostori-jk'}
        ],
    };
    render(){
        return(
            <div>
                { this.state.menu.map(menu=>{
                    return(
                        <MenuItem menu={menu} key={menu.name}/>
                    )
                }) }
            </div>
        )
    }
}
// ReactDOM.render(<MainMenu />, menuDropBox);


class Check extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
        };
    };
    handleCheck = () => {
        this.setState({checked: !this.state.checked});
    };
    render() {
        var message;
        if (this.state.checked) {
            message = 'выбран';
        } else {
            message = 'не выбран';
        }
        return (
            <div className="container">
                <div className="row test-react-block">
                    <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} />
                    <p>Чекбокс {message}</p>
                </div>
            </div>
        );
    }
}




//ReactDOM.render(<App_main />, AppBox);
//export default App_main;




// class Task extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             edit: false,
//             value: props.value,
//         };
//     };
//     edit = () => {
//         this.setState ({edit: true});
//     };
//     remove = () => {
//         alert ("Нажата кнопка удалить");
//     };
//     save = () => {
//         this.setState ({edit: false,
//             value: 'X'
//         })
//     };
//     rendNorm = () => {
//         return (
//             <div className="boxs">
//                 <div className="text">{this.value}</div>
//                 <button onClick={this.edit} className="btn light">Редактировать</button>
//                 <button onClick={this.remove} className="btn red">Удалить</button>
//             </div>
//         );
//     };
//     rendEdit = () => {
//         return (
//             <div className="box">
//                 <textarea refs="baba" defaultValue={this.props.children}></textarea>
//                 <button onClick={this.save} className="btn success">Сохранить</button>
//             </div>
//         );
//     };
//     render() {
//         if (this.state.edit) {
//             return this.rendEdit ();
//         } else {
//             return this.rendNorm ();
//         }
//     }
// }
//
// ReactDOM.render(<div><Task /></div>, optionBox);








//
//  ReactDOM.render(<div><Check /></div>, optionBox);



// class Square extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: props.value,
//         };
//     }
//     render() {
//         return (
//             <button className="square"
//
//                     onClick={() => this.setState({value: 'X'})}
//             >
//                 {this.state.value}
//             </button>
//         );
//     }
// }

// class Board extends React.Component {
//     renderSquare(i) {
//         return <Square value={i}/>;
//     }
//
//     render() {
//         const status = 'Next player: X';
//
//         return (
//             <div>
//                 <div className="status">{status}</div>
//                 <div className="board-row">
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                     {this.renderSquare(3)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                     {this.renderSquare(6)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                     {this.renderSquare(9)}
//                 </div>
//
//             </div>
//         );
//     }
// }

// class Game extends React.Component {
//     render() {
//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board />
//                 </div>
//                 <div className="game-info">
//                     <div>{/* status */}</div>
//                     <ol>{/* TODO */}</ol>
//                 </div>
//             </div>
//         );
//     }
// }

// ========================================

//ReactDOM.render(<Game />, mainBox);





//
// class CityButton extends React.Component{
//     atention(){
//         alert('sss');
//     };
//     render(){
//         return (
//             <div>
//                 <button className="city-button" onClick={this.atention} >
//                     Выбрать город
//                 </button>
//                 <div className="city-drop">
//                 </div>
//             </div>
//         )
//     }
// }


//                    class CityButton extends React.Component{
//                        render(){
//                            return React.createElement('div', {className: 'shopping-list'},
//                                React.createElement('h1', null,'Вся недвижимость Украины'),
//                                React.createElement('ul', {className: 'city-list'},<li>Одесса</li>,<li>Харьков</li>)
//                            );
//                        }
//                    }
//                    ReactDOM.render(<div><MainButton/></div>, mainBox);

//                            render() {
//                                return (
//                                        <div className="box">
//                                            <div className="text">{this.props.children}</div>
//                                            <button id="asada" onClick={this.edit} className="btn light">Редактировать</button>
//                                            <button onClick={this.remove} className="btn red">Удалить</button>
//                                        </div>
//                            );
//                            }


//   ReactDOM.render(<div><Check/></div>, domContainer);
