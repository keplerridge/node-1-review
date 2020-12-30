const data = require('../data.json')

module.exports = {
    getMovies: (request, response) => {
        response.status(200).send(data)
    },
    getSingleMovie: (request, response) => {
        const {id} = request.params
        const movie = data.find(el => el.id === +id)
        if(!movie) return response.sendStatus(404)
        response.status(200).send(movie);
    }
}