import fetch from 'cross-fetch';

export function fetchPopularPosts() {
  const endpoint = window.encodeURI(`https://hacker-news.firebaseio.com/v0/topstories.json`);

  return fetch(endpoint).then(res => {
    return res.json();
  });
}

export function fetchPost(id) {
  const endpoint = window.encodeURI(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);

  return fetch(endpoint).then(res => {
    return res.json();
  });
}
