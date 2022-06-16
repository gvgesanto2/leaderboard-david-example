const addScore = async (baseUrl, gameId, userScore) => {
  const urlAppend = `${gameId}/scores/`;
  const response = await fetch(baseUrl + urlAppend, {
    method: 'POST',
    body: JSON.stringify(userScore),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const { result } = await response.json();
  return result;
};

export default addScore;