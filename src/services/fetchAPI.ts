export const fetchTweet = async () => {
  const response = await fetch('https://public-apis-473v4ntrr-felipemuller20.vercel.app/api/tweets');
  const data = await response.json();
  return data;
};

export const fetchUsers = async () => {
  const response = await fetch('https://public-apis-473v4ntrr-felipemuller20.vercel.app/api/twitter-users');
  const data = await response.json();
  return data;
};
