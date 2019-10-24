import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Image from './Components/Image';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      query:'',
      start: 1,
      count: 1
    }
    this.showImg = this.showImg.bind(this);
    this.scrollData = this.scrollData.bind(this);
  }

//trayendo las fotos
  componentDidMount(){
    fetch(`https://pixabay.com/api/?key=1858501-7166f0d9f959bd64071f003d7&image_type=photo&orientation=vertical&per_page=20`)
    .then(response => response.json())
    .then(data => this.setState({images: data.hits}))
    .catch(error => console.log('parsing failed', error))
  }

  scrollData(){
    const { start } = this.state;
    this.setState({ start: this.state.start + this.state.count});
    fetch(`https://pixabay.com/api/?key=1858501-7166f0d9f959bd64071f003d7&image_type=photo&orientation=vertical&page=${start}&per_page=20`)
    .then(response => response.json())
    .then(data => this.setState({images: this.state.images.concat(data.hits)}))
    .catch(error => console.log('parsing failed', error))
}

//mostrando las fotos
  showImg(){
    return(
      this.state.images.map((image, index) => {
        return (
          <Image  key={index} url={image.webformatURL} tags={image.tags} author={image.user}/>
        )
      })
    )
  }

  render(){

    const breakpointColumnsObj = {
      default: 9,
      2000: 7,
      1200: 6,
      1440: 5,
      1100: 3,
      700: 2,
      500: 1
    };

    return (
      <div className="App">
        <header>
          <Navbar/>
        </header>
        <main className="main-container">
          <div className="masonery-container">
            <InfiniteScroll 
                dataLength={this.state.images.length}
                next={this.scrollData}
                hasMore={true}
                loader={<h4 >Cargando...</h4>}
                endMessage={<p style={{textAlign: 'center'}}><b>¡Ya lo has visto todo!</b> </p>}
              >

                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column">
                  {this.showImg()}
                </Masonry>

              </InfiniteScroll>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
