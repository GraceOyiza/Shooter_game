import axios from 'axios';

const baseUrl =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameID = 'KUuGABL1NQkjx9MAmI7c';

const postScore = async (name, score) => {
  const data = { user: name, score };
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
    return error.name;
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
