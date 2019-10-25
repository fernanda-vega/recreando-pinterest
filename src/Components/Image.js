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
                        <div style={photoOverlay} className="overlay">
                            <div className="bottom-btn">
                                <div className="web-link"><svg className="ico-link" height="9" width="9" viewBox="0 0 24 24">
                                    <path d="M4.9283,1 C3.6273,1 2.5713,2.054 2.5713,3.357 C2.5713,4.66 3.6273,5.714 4.9283,5.714 L14.9523,5.714 L1.6893,18.976 C0.7703,19.896 0.7703,21.389 1.6893,22.31 C2.1503,22.771 2.7533,23 3.3573,23 C3.9603,23 4.5633,22.771 5.0243,22.31 L18.2853,9.047 L18.2853,19.071 C18.2853,20.374 19.3413,21.429 20.6433,21.429 C21.9443,21.429 23.0003,20.374 23.0003,19.071 L23.0003,1 L4.9283,1 Z"></path></svg>
                                    {this.props.web}
                                </div>
                                <div className="share-group">
                                    <button className="share-btn"><svg height="12" width="12" viewBox="0 0 24 24" aria-hidden="true" aria-label="Comparte" role="img"><path d="M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z"></path></svg></button>
                                    <button className="more-btn"><svg height="12" width="12" viewBox="0 0 24 24" aria-hidden="true" aria-label="Ver más" role="img"><path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path></svg></button>
                                </div>
                            </div>

                        </div>
                        <img src={this.props.url} alt=""/>
                        <div className="ima-detail">
                            <p className="ima-title">{this.props.tags}</p>
                            <p className="ima-user">{this.props.author}</p>
                        </div>
                        <div className="btn-group">
                            <button style={saveBar} className="dropdown-btn">{this.props.dropTag}<svg className="drop-arrow" height="12" width="12" viewBox="0 0 24 24" aria-label="Selecciona un tablero en el que quieras guardar" role="img"><path d="M12 19.5L.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path></svg></button>
                            <button style={saveBar} className="save-btn">Guardar</button>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
export default Image;