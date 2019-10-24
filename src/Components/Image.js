import React, { Component } from 'react';
import './Image.css';


class Image extends Component{

    constructor(props) {
        super(props)
        this.state = { }
    }
  
    render(){
        return(
            <div className="item">
                <div className="ima-display">
                    <a href=""> 
                        <img src={this.props.url} alt=""/>
                        <div className="ima-detail">
                            <p className="ima-title">{this.props.tags}</p>
                            <p className="ima-user">{this.props.author}</p>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
export default Image;