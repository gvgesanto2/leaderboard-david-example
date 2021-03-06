import refresh from '../refresh.js';
import addLi from './add-li.js';

const refreshList = async (baseUrl, gameId) => {
  const leaderboard = document.getElementById('leaderboard');
  leaderboard.innerHTML = '';
  const leaderboardData = await refresh(baseUrl, gameId);
  if (leaderboardData) {
    leaderboardData.forEach((element) => {
      const text = `${element.user}: ${element.score}`;
      addLi(text);
    });
  }
};

export default refreshList;