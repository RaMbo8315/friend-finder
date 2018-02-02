var friends = require("../data/friends");

module.exports = function (app) {
    
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    app.post("/api/friends", (req, res) => {
        var diff = [];
        var totalDiff = [];
        var index = 0;
        for (var i = 0; i < friends.length; i++) {
            diff = friends[i].scores.map((item) => {
                return Math.abs(item - parseInt(req.body.scores));
            })
            var reducer = (accumulator, currentValue) => accumulator + currentValue;
            totalDiff.push(diff.reduce(reducer))
        }
        index = totalDiff.indexOf(Math.min.apply(null, totalDiff))
        friends.push(req.body)
        res.json(friends[index])
    });
}