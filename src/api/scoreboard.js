import fetch from 'node-fetch';

// const gameID = 'QQwMNaoWrEmGbIvM5IXT';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QQwMNaoWrEmGbIvM5IXT/scores/';

const postScore = async (name, score) => {
  const data = { user: name, score };
  console.log(data);
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.status === 201;
  } catch (error) {
    return error.message;
  }
};

const getScores = async () => {
  try {
    const res = await fetch(url);
    const { result } = await res.json();
    return result;
  } catch (error) {
    return error.name;
  }
};

export default { postScore, getScores };
