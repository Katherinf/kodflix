import React, {Component} from 'react';
import './Gallery.css';
import TvShow from './TvShow';

export default class Gallery extends Component {
  constructor() {
      super();
      this.state = {
         tvshowList: [],
      };
  }
 fetchTvShows () {
      fetch('/rest/shows')
      .then(res => res.json())
      .then(data => this.setState({tvshowList: data}))
 }
 componentDidMount() {
     this.fetchTvShows();
  }
  render() {
    return (
      <>
        <h1 className="rowlist-text">TV SHOW</h1>
        <div className="rowlist-container">
          {this.state.tvshowList.map(show => <TvShow 
            key={show.id} 
            id={show.id} 
            title={show.title} />
          )}
        </div>
      </>
    );
  }
}