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
                    "name": "Out of the Past",
                    "rating": {
                        "value": 8.0,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 2,
                    "name": "Fallen Angel",
                    "rating": {
                        "value": 7.9,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 3,
                    "name": "In a Lonely Place",
                    "rating": {
                        "value": 8.1,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 4,
                    "name": "Force of Evil",
                    "rating": {
                        "value": 8.6,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 5,
                    "name": "The Wrong Man",
                    "rating": {
                        "value": 8.5,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 6,
                    "name": "Man with My Face",
                    "rating": {
                        "value": 8.4,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 7,
                    "name": "Nora Inu",
                    "rating": {
                        "value": 8.3,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 8,
                    "name": "Clash by Night",
                    "rating": {
                        "value": 8.4,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 9,
                    "name": "Rage in Heaven",
                    "rating": {
                        "value": 8.5,
                        "nrOfVotes": 0
                    }
                },
                {
                    "airDate": "0001-01-01T00:00:00",
                    "nr": 10,
                    "name": "The Killers",
                    "rating": {
                        "value": 8.6,
                        "nrOfVotes": 0
                    }
                }
            ]
        }
    ]
}

createChart(a);

function createChart(response) {

    var ctx = document.getElementById("myChart").getContext('2d');
    var a  =response.seasons.reduce(t=> t.episodes).episodes.map(t=> t.nr);
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: a,
            datasets: [{
                label: '# of Votes',
                data:response.seasons.reduce(t=> t.episodes).episodes.map(t=> t.rating.value),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

}

let app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'tt2261227',
        seen: false,
        imdbId:'',
        items:[],
        name:'',
        bio: '',
    },
    methods: {
        getImdbSeries: function () {
            // GET /someUrl
            this.$http.get('http://localhost:8080/api/imdb/scrape/' + this.message).then(response => {

                this.bio = response.body.bio;
                this.imdbId= response.body.imdbId;
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




