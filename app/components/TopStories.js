import React from 'react';
import { fetchPopularPosts, fetchPost } from '../utils/api';


export default class TopStories extends React.Component {
  state = {
    ids: [],
    posts: []
  };

  componentDidMount() {
    const { ids, posts } = this.state;

    fetchPopularPosts()
      .then(data => {
        Promise.all(data.slice(0, 50).map(id => fetchPost(id))).then((allResponses) => this.setState({
            posts: allResponses
        }))
      })
      
  }

  render() {
    const { ids, posts } = this.state;
    console.log(posts)
    return (
      <React.Fragment>
        <ul>hello</ul>
      </React.Fragment>
    );
  }
}


