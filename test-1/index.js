/**
 * Note: The Fetch API native in Node.JS v18.6.60 doesn't work for me on both HackerRank exercises. 
 * Instead, try requiring `node-fetch` as an alternative.
 */

const fetch = require('node-fetch');

async function getTotalGoals(team, year) {
    const homeGoals = await fetchTotalGoals(team, year, true);
    const awayGoals = await fetchTotalGoals(team, year, false);
    return homeGoals + awayGoals;
}

async function fetchTotalGoals(team, year, isHome) {
    let totalGoals = 0;
    let totalPages = 1;

    for (let page = 1; page <= totalPages; page++) {
        const { pages, goals } = await fetchTeamGoals(team, year, page, isHome);
        totalPages = pages;
        totalGoals += goals;
    }

    return totalGoals;
}

async function fetchTeamGoals(team, year, page, isHome) {
    const teamKey = isHome ? 'team1' : 'team2';
    const response = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&${teamKey}=${team}&page=${page}`);
    const data = await response.json();

    const pages = data.total_pages;
    const goalsKey = isHome ? 'team1goals' : 'team2goals';
    const goals = data.data.reduce((totalGoals, match) => totalGoals + parseInt(match[goalsKey]), 0);

    return { pages, goals };
}

getTotalGoals('Barcelona', 2011)