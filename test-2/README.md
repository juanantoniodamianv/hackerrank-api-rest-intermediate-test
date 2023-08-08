#### REST API: Number of Drawn Matches

In this challenge, the REST API contains information about football matches. 

The provided API allows querying matches by teams and year. The task is to get the number of matches for a given year that ended in a draw. A match is drawn when both teams scored the same number of goals.

To access a collection of matches played in a given year, perform an HTTP GET request to `https://jsonmock.hackerrank.com/api/football_matches?year=<year>&page=<page>`
where `<year>` is the year of the competition and `<page>` is the page of the results to request. The results might be divided into several pages. Pages are numbered from 1.
For example, a GET request to
`https://jsonmock.hackerrank.com/api/football_matches?year=2011&page=2`
returns data associated with matches in the year 2011 on the second page of the results.

The response to such a request is a JSON with the following 5 fields:
- page: The current page of the results.
- per_page: The maximum number of matches returned per page.
- total: The total number of matches on all pages of the results.
- total_pages: The total number of pages with results.
- data: An array of objects containing matches information on the requested page.
Each match record has several fields:
- competition: a string denoting the name of the competition
- year: an integer denoting the year when the match took place
- round: a string denoting the round the match belongs to (can be an empty string)
- team1: a string denoting the name of the first team in the match
- team2: a string denoting the name of the second team in the match
- team1goals: a string denoting the number of goals scored by team1 in the match
- team2goals: a string denoting the number of goals scored by team2 in the match

***Notice*** that the number of pages might be in hundreds, and it would take too much time to fetch the results from all of them and examine the scores of every match. In order to overcome this issue, you are allowed to add an exact value of any of the match object fields to the URL query string in order to limit the number of results. This capability, if used correctly, can help you avoid examining individual match objects.


For example, performing a request to
`https://jsonmock.hackerrank.com/api/football_matches?year=2011&team1goals=1&page=2`
returns data associated with matches in the year 2011, where the first team scored 1 goal, on the second page of the results.

Function Description

`getNumDraws` has the following parameter:
- int year: The year of the competition

The function must return an integer denoting the number of matches in the given year that ended up in a draw.

##### Constraints:
- You can safely assume that no team ever scored more than 10 goals.

##### Example
`getNumDraws(2011)` returns `516` as there were `516` matches in the year 2011 that ended in a draw.