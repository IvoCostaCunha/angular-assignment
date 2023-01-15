let User = require('../model/user');

function authUser(req, res, login, pass) {
    var aggregateQuery = User.aggregate();
    let login = req.params.id
    let pass = req.params.pass

    User.findOne({login: login}, (err, user) => {
        if(err){res.send(err)}


        res.json(assignment);
    })
}





module.exports = { authUser };
