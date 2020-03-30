import React from 'react';
import './ListTweets.scss';
import {Grid} from '@material-ui/core';
import Tweet from "../Tweet/Tweet";


const ListTweets = (props) => {

    const { allTweets, deleteTweet } = props;

    if(!allTweets || allTweets.length === 0){
        return (
            <div className="list-tweets-empty">
                <h2>No hay Tweets</h2>
            </div>
        );
    }

    return (
        <Grid container spacing={3} className="list-tweets">
            {allTweets.map((tweet, index) => (
                <Grid key={index} item xs={4}>
                    <Tweet
                        key={index}
                        tweet={tweet}
                        index={index}
                        deleteTweet={deleteTweet}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default ListTweets;
