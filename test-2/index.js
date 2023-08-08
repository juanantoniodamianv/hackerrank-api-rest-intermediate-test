/**
 * Note: The Fetch API native in Node.JS v18.6.60 doesn't work for me on both HackerRank exercises. 
 * Instead, try requiring `node-fetch` as an alternative.
 */

const fetch = require('node-fetch');

async function getTotalDrawnMatches(year) {
    let totalDrawnMatches = 0
    const totalDrawnGoals = 10
    
    for (let goals = 0; goals <= totalDrawnGoals; goals++) {
        const total = await fetchDrawnMatches(year, goals)
        totalDrawnMatches += total
    }
    console.log(totalDrawnMatches)
    return totalDrawnMatches   
}

async function fetchDrawnMatches(year, goals) {
    const response = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&page=1&team1goals=${goals}&team2goals=${goals}`)
    const data = await response.json()
    const total = data.total

    return total
}

getTotalDrawnMatches(2011)