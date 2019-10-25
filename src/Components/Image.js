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
        let saveBar;
        let photoOverlay;
        if (this.state.hover) {
            saveBar = {display:'block'};
            photoOverlay = {display:'block', height: this.props.height}

          
          } else {
            saveBar = {display:'none'};
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
                        <div className="btn-group">
                            <button style={saveBar} className="dropdown-btn">{this.props.dropTag}<svg class="drop-arrow" height="12" width="12" viewBox="0 0 24 24" aria-label="Selecciona un tablero en el que quieras guardar" role="img"><path d="M12 19.5L.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path></svg></button>
                            <button style={saveBar} className="save-btn">Guardar</button>
                        </div>
                        {/* <div className="circleDots"><img className="dots"  /></div> */}
                    </a>
                </div>
            </div>
        )
    }
}
export default Image;