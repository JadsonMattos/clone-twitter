import { useEffect, useState } from 'react';
import './home.css';
import { TweetType } from '../../utils/types';
import Tweet from '../../components/tweet';
import { fetchTweet } from '../../services/fetchAPI';

function Home() {
  const [tweets, setTweets] = useState<TweetType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTweet();
      console.log(data);
      setTweets(data);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="loading-page">
        <img
          width="100"
          src="https://thumbs.gfycat.com/CorruptOldfashionedGuineapig-max-1mb.gif"
          alt="carregando"
        />
      </div>
    );
  }

  return (
    <div className="home-page">
      <div className="new-tweet-card">
        <input placeholder="O que está acontecendo?" />
        <button
          onClick={ () => alert('Hora de estudar não é hora de tweetar!!!') }
        >
          Tweetar
        </button>
      </div>
      { loading && <p>Loading tweets...</p> }
      { Error() && <p>Error!</p> }
      { tweets.map((tweet) => (
        <Tweet
          tweet={ tweet.tweet }
          name={ tweet.owner.name }
          username={ tweet.owner.username }
          image={ tweet.owner.profilePicture }
          comments={ tweet.commentsCount }
          retweets={ tweet.retweetsCount }
          likes={ tweet.likesCount }
          key={ tweet.id }
        />
      ))}
    </div>
  );
}

export default Home;
