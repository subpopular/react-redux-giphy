import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import appStyles from './App.scss';
import { fetchItems } from '../actions/fetchActions';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchItems);
  }

  render() {
    return (
      <div>
        {this.props.gifs.map((gif, i) => {
          return (
            <img src={gif.images.original.url} key={i}/>
          );
        })}
      </div>
    );
  }
}

App.defaultProps = {
  gifs: []
};

export default connect(
  state => ({
    gifs: state.gifs
  })
)(App);
