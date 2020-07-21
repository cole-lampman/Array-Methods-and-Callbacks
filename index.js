import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const games = fifaData.filter(function(game){
    return game.Stage === "Final" && game.Year === 2014
});

console.log(games);
const homeTeam= games[0]["Home Team Name"];
const awayTeam= games[0]["Away Team Name"];
const homeGoals= games[0]["Home Team Goals"];
const awayGoals= games[0]["Away Team Goals"];
const winner2014 = games[0]["Win conditions"]

console.log(homeTeam);
console.log(awayTeam);
console.log(homeGoals);
console.log(awayGoals);
console.log(winner2014);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals( data ) {
    {return data.filter(function(value){
        return value['Stage'] === 'Final'
    }
    )
}
}
console.log(getFinals(fifaData));
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(finalsCallback) {
    const years = finalsCallback.map((item) => {
        return item.Year;
    })
    
    return years;
};
console.log(getYears(getFinals(fifaData)));
/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(finalsCallback) {
    return finalsCallback.map((item) => {
        const teams = {};
        teams.homeTeam = {
            "teamCountry": item["Home Team Name"],
            "score": item["Home Team Goals"]
        }
        teams.awayTeam = {
            "teamCountry": item["Away Team Name"],
            "score": item["Away Team Goals"]
        }
        if(teams.homeTeam.score > teams.awayTeam.score){
            return teams.homeTeam.teamCountry
        }
        else return(teams.awayTeam.teamCountry);
    })
};
console.log(getWinners(getFinals(fifaData)));
/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winnerCallback, yearsCallback) {
    return winnerCallback.map((item, index) => {
        return `In ${yearsCallback[index]}, ${item} won the world cup!`
    })
};
console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));
    
/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const reducer = (total, item) => {
        return total + item["Away Team Goals"] + item["Home Team Goals"];
    }
    const totalGoals = data.reduce(reducer, 0);
    return Math.round(totalGoals / data.length);
};
console.log(`Average goals for home and away per match: ${getAverageGoals(fifaData)}`);
getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, team) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();


