import React from 'react'
import { fetchPopularPosts, fetchPost } from '../utils/api'

export default class TopStories extends React.Component {
    state = {
        stories: [],
        storyStore: {}
    }

    componentDidMount() {
        const { stories, storyStore } = this.state;

        fetchPopularPosts()
            .then(data => {
                this.setState({
                    stories: data
                })
            })
    }

    render() {
        const { stories, storyStore } = this.state;
        /*
        stories.forEach(story => {
            fetchPost(story).then(data => {
                this.setState(({storyStore}) => ({
                    ...storyStore,
                    story: data
                }))
            })
        })
        */
        console.log(storyStore)
        return(
            <React.Fragment>
            <ul>
                {stories.map((story) => {
                    return (
                        <li key={story}>hello world</li>
                    )
                })}
            </ul>
            </React.Fragment>
        )
    }

    
}