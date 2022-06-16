const refresh = async (baseUrl, gameId) => {
  const urlAppend = `${gameId}/scores/`;
  const response = await fetch(baseUrl + urlAppend);
  const { result } = await response.json();
  return result;
};

export default refresh;