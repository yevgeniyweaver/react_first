import React, {Component} from 'react';





class Header extends Component{
    state ={
        myStyle:{
            textAlign: 'center'
        }
    };
    render(){
        return(
            <div>
                <h1 style={this.state.myStyle}>HEADER</h1>
            </div>
        )
    }
}

export default Header;