import React, { Component } from 'react';
import './Image.css';


class Image extends Component{

    constructor(props) {
        super(props)
        this.state = { 
            hover: false
        }
        this.toggleHover = this.toggleHover.bind(this)
    }
  
    toggleHover() {
        this.setState({ hover: !this.state.hover})
    }

    

    render(){
        let photoOverlay;
        if (this.state.hover) {
            photoOverlay = {display:'block', height: this.props.height}

          
          } else {
            photoOverlay = {display:'none'}
          }

        return(
            <div className="item" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                <div className="ima-display">
                    <a>
                        <div style={photoOverlay} className="overlay"></div>
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