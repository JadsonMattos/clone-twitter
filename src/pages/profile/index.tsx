import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchTweet, fetchUsers } from '../../services/fetchAPI';
import './profile.css';
import { TweetType, User } from '../../utils/types';
import Tweet from '../../components/tweet';

function Profile() {
  const [tweets, setTweets] = useState<TweetType[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const { username } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      console.log(data);

      const findUser: User = data.find((userParam: User) => (
        userParam.username === username));
      console.log(findUser);

      if (findUser) {
        const tweetsData = await fetchTweet();
        console.log(tweetsData);

        const { tweetsId } = findUser;

        let newTweets: TweetType[] = [];

        tweetsId.forEach((id: number) => {
          const findTweet = tweetsData.find((tweet: TweetType) => tweet.id === id);
          newTweets = [...newTweets, findTweet];
        });
        setTweets(newTweets);
        setUser(findUser);
      }
      setLoading(false);
    };
    fetchData();
  }, [username]);

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

  if (!user) {
    return (
      <div className="profile-page">
        <h1>Usuário não encontrado</h1>
        <Link to="/">Voltar para a página inicial</Link>
      </div>
    );
  }

  return (
    <div className="profile-page">
      { loading ? <p>Loading tweets...</p> : (
        <>
          <div className="profile-container">
            <img
              src={ user?.backgroundPicture }
              alt="Fundo do User"
              className="cover-profile"
            />
            <img
              src={ user?.profilePicture }
              alt="Perfil do User"
              className="avatar-profile"
            />
            <div className="bio-container">
              <h2>{user?.name}</h2>
              <span className="span-bio">{user?.username}</span>
              <p>{user?.bio}</p>
            </div>
          </div>
          <div className="tweet-list">
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
        </>
      )}
    </div>
  );
}

export default Profile;
