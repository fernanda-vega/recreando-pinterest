import React, { Component } from 'react';
import './Image.css';


class Image extends Component{

    constructor(props) {
        super(props)
        this.state = { }
    }
  
    render(){
        return(
            <div className="ima-container">
                <div className="ima-display">
                    <a href={this.props.large}> 
                        <img className="img" src={this.props.url} alt=""/>
                    </a>
                </div>
            </div>
        )
    }
}
export default Image;