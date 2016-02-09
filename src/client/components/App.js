import React, { Component, PropTypes } from 'react';
import appStyles from './App.scss';
import giphy from '../utils/giphy-api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    giphy.search('kittens').then(res => {
      this.setState({ gifs: res.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.gifs.map((gif, i) => {
          return (
            <img key={i} src={gif.images.fixed_height.url}/>
          );
        })}
      </div>
    );
  }
}

export default App;
