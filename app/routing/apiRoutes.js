var friends = require("../data/friends");

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    app.get("/api/friends", function (req, res) {
        res.json(friends);
        console.log(res)
    });

    app.post("/api/friends", function (req, res) {

        
        // var a = [1, 2, 5, 2, 5, 4]
        // var b = [2, 5, 4, 1, 5, 3]
        var diff = [];
        var totalDiff = [];
        var index = 0;
        findMatch()

        function findMatch() {
            for (var i = 0; i < friends.length; i++) {
                // var parsed = parseInt(friends[i].scores)
                diff = friends[i].scores.map(function (item, ) {
                    // In this case item correspond to currentValue of array a, 
                    // using index to get value from array b

                    return Math.abs(item - parseInt(req.body.scores));
                })

                const reducer = (accumulator, currentValue) => accumulator + currentValue;
                totalDiff.push(diff.reduce(reducer))
                console.log(totalDiff)
            }

            index = totalDiff.indexOf(Math.min.apply(null, totalDiff))
            console.log(index)
        }
        console.log(friends[index].photo)
        // friends.push(req.body);
        friends.push(req.body)
        res.json(friends[index])
    });
    // res.json(friends[index])
    

}