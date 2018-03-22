let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

let app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

let app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

let app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: 'Learn JavaScript'},
            {text: 'Learn Vue'},
            {text: 'Build something awesome'}
        ]
    }
});

var a = {
    "seasons": [
        {
            "nr": 1,
            "episodes": [
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 1,
                    "name": "Pilot",
                    "rating": {
                        "value": 8.4,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 2,
                    "name": "Threads",
                    "rating": {
                        "value": 7.7,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 3,
                    "name": "Book of Hours",
                    "rating": {
                        "value": 7.8,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 4,
                    "name": "Flip of the Coin",
                    "rating": {
                        "value": 7.8,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 5,
                    "name": "The Portrait",
                    "rating": {
                        "value": 8.0,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 6,
                    "name": "All In",
                    "rating": {
                        "value": 8.0,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 7,
                    "name": "Free Fall",
                    "rating": {
                        "value": 8.6,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 8,
                    "name": "Hard Sell",
                    "rating": {
                        "value": 8.2,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 9,
                    "name": "Bad Judgment",
                    "rating": {
                        "value": 8.2,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 10,
                    "name": "Vital Signs",
                    "rating": {
                        "value": 8.1,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 11,
                    "name": "Home Invasion",
                    "rating": {
                        "value": 7.8,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 12,
                    "name": "Bottlenecked",
                    "rating": {
                        "value": 8.0,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 13,
                    "name": "Front Man",
                    "rating": {
                        "value": 8.1,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 14,
                    "name": "Out of the Box",
                    "rating": {
                        "value": 8.7,
                        "nrOfVotes": 0
                    }
                }
            ]
        },
        {
            "nr": 2,
            "episodes": [
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 1,
                    "name": "Withdrawal",
                    "rating": {
                        "value": 8.1,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 2,
                    "name": "Need to Know",
                    "rating": {
                        "value": 8.0,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 3,
                    "name": "Copycat Caffrey",
                    "rating": {
                        "value": 8.3,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 4,
                    "name": "By the Book",
                    "rating": {
                        "value": 8.0,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 5,
                    "name": "Unfinished Business",
                    "rating": {
                        "value": 8.0,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 6,
                    "name": "In the Red",
                    "rating": {
                        "value": 7.8,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 7,
                    "name": "Prisoner's Dilemma",
                    "rating": {
                        "value": 8.3,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 8,
                    "name": "Company Man",
                    "rating": {
                        "value": 8.2,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 9,
                    "name": "Point Blank",
                    "rating": {
                        "value": 8.5,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 10,
                    "name": "Burke's Seven",
                    "rating": {
                        "value": 8.6,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 11,
                    "name": "Forging Bonds",
                    "rating": {
                        "value": 8.6,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 12,
                    "name": "What Happens in Burma",
                    "rating": {
                        "value": 7.7,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 13,
                    "name": "Countermeasures",
                    "rating": {
                        "value": 7.7,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 14,
                    "name": "Payback",
                    "rating": {
                        "value": 8.3,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 15,
                    "name": "Power Play",
                    "rating": {
                        "value": 8.3,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 16,
                    "name": "Under the Radar",
                    "rating": {
                        "value": 8.6,
                        "nrOfVotes": 0
                    }
                }
            ]
        },
        {
            "nr": 3,
            "episodes": [
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 1,
                    "name": "On Guard",
                    "rating": {
                        "value": 8.2,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 2,
                    "name": "Where There's a Will",
                    "rating": {
                        "value": 8.0,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 3,
                    "name": "Deadline",
                    "rating": {
                        "value": 7.8,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 4,
                    "name": "Dentist of Detroit",
                    "rating": {
                        "value": 8.2,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 5,
                    "name": "Veiled Threat",
                    "rating": {
                        "value": 8.2,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 6,
                    "name": "Scott Free",
                    "rating": {
                        "value": 7.9,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 7,
                    "name": "Taking Account",
                    "rating": {
                        "value": 8.1,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 8,
                    "name": "As You Were",
                    "rating": {
                        "value": 7.6,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 9,
                    "name": "On the Fence",
                    "rating": {
                        "value": 8.0,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 10,
                    "name": "Countdown",
                    "rating": {
                        "value": 8.7,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 11,
                    "name": "Checkmate",
                    "rating": {
                        "value": 8.6,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 12,
                    "name": "Upper West Side Story",
                    "rating": {
                        "value": 8.2,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 13,
                    "name": "Neighborhood Watch",
                    "rating": {
                        "value": 7.6,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 14,
                    "name": "Pulling Strings",
                    "rating": {
                        "value": 7.5,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 15,
                    "name": "Stealing Home",
                    "rating": {
                        "value": 8.0,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 16,
                    "name": "Judgment Day",
                    "rating": {
                        "value": 8.6,
                        "nrOfVotes": 0
                    }
                }
            ]
        },
        {
            "nr": 4,
            "episodes": [
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 1,
                    "name": "Wanted",
                    "rating": {
                        "value": 8.4,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 2,
                    "name": "Most Wanted",
                    "rating": {
                        "value": 8.0,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 3,
                    "name": "Diminishing Returns",
                    "rating": {
                        "value": 7.9,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 4,
                    "name": "Parting Shots",
                    "rating": {
                        "value": 8.2,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 5,
                    "name": "Honor Among Thieves",
                    "rating": {
                        "value": 7.9,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 6,
                    "name": "Identity Crisis",
                    "rating": {
                        "value": 7.8,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 7,
                    "name": "Compromising Positions",
                    "rating": {
                        "value": 7.9,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 8,
                    "name": "Ancient History",
                    "rating": {
                        "value": 7.7,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 9,
                    "name": "Gloves Off",
                    "rating": {
                        "value": 7.8,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 10,
                    "name": "Vested Interest",
                    "rating": {
                        "value": 8.1,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 11,
                    "name": "Family Business",
                    "rating": {
                        "value": 7.9,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 12,
                    "name": "Brass Tacks",
                    "rating": {
                        "value": 7.8,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 13,
                    "name": "Empire City",
                    "rating": {
                        "value": 7.5,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 14,
                    "name": "Shoot the Moon",
                    "rating": {
                        "value": 7.6,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 15,
                    "name": "The Original",
                    "rating": {
                        "value": 7.6,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 16,
                    "name": "In the Wind",
                    "rating": {
                        "value": 8.4,
                        "nrOfVotes": 0
                    }
                }
            ]
        },
        {
            "nr": 5,
            "episodes": [
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 1,
                    "name": "At What Price",
                    "rating": {
                        "value": 8.1,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 2,
                    "name": "Out of the Frying Pan",
                    "rating": {
                        "value": 8.1,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 3,
                    "name": "One Last Stakeout",
                    "rating": {
                        "value": 8.0,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 4,
                    "name": "Controlling Interest",
                    "rating": {
                        "value": 7.6,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 5,
                    "name": "Master Plan",
                    "rating": {
                        "value": 7.7,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 6,
                    "name": "Ice Breaker",
                    "rating": {
                        "value": 7.3,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 7,
                    "name": "Quantico Closure",
                    "rating": {
                        "value": 7.3,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 8,
                    "name": "Digging Deeper",
                    "rating": {
                        "value": 7.6,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 9,
                    "name": "No Good Deed",
                    "rating": {
                        "value": 7.8,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 10,
                    "name": "Live Feed",
                    "rating": {
                        "value": 8.7,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 11,
                    "name": "Shot Through the Heart",
                    "rating": {
                        "value": 8.4,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 12,
                    "name": "Taking Stock",
                    "rating": {
                        "value": 8.0,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 13,
                    "name": "Diamond Exchange",
                    "rating": {
                        "value": 8.7,
                        "nrOfVotes": 0
                    }
                }
            ]
        }
    ]
}

createChart(a);

function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed();
}


function createChart(response) {
    var ctx = document.getElementById("myChart").getContext('2d');

    //TODO Best fix squery, line reggression or something like that.

    var lable = [];

    var index = 0;
    var seasons = [];
    for (var season of response.seasons) {
        var data = [];
        for (var episode of season.episodes) {
            lable.push(index);
            data.push({
                x:++index,
                y:episode.rating.value
            })
        }
        var color = 'rgba(' + getRandomArbitrary(0, 255) + ',' + getRandomArbitrary(0, 255) + ',' + getRandomArbitrary(0, 255) + ',1)';
        console.log(color);
        seasons.push({
            label: 'Season ' + season.nr,
            data: data,
            fill:false,
            showLine:false,
            backgroundColor: color
        });
    }

    const result = regression.linear([[0, 1], [32, 67], [12, 79]]);
    const gradient = result.equation[0];
    const yIntercept = result.equation[1];


    var scatterChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: lable,
            datasets:seasons
        },
    });
}

let app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'tt2261227',
        seen: false,
        imdbId: '',
        items: [],
        name: '',
        bio: '',
    },
    methods: {
        getImdbSeries: function () {
            // GET /someUrl
            this.$http.get('http://localhost:8080/api/imdb/scrape/' + this.message).then(response => {

                this.bio = response.body.bio;
                this.imdbId = response.body.imdbId;
                this.items = response.body.tags;
                this.name = response.body.name;

                createChart(response.body.season);

                console.log(response.body);
                this.seen = true;
            }, response => {
                console.log(response);
                // error callback
            });
        }
    }
});




