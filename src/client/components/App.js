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
    this.props.store.dispatch({
      types: ['FETCH_GIFS', 'FETCH_GIFS_SUCCESS', 'FETCH_GIFS_FAIL'],
      promise: () => giphy.search('kittens')
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
