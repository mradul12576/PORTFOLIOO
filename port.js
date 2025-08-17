const voteCounts = {
    HTML: 0,
    CSS: 0,
    JavaScript: 0
  };

  function vote(skill) {
    voteCounts[skill]++;
    document.getElementById(`${skill.toLowerCase()}-votes`).textContent = `Votes: ${voteCounts[skill]}`;
  }