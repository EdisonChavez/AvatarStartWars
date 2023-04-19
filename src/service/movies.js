export default class MovieService {
    async fetchMovies() {
        const resp = await fetch("https://swapi.dev/api/films/")
        return await resp.json()
    }

    async getCharacter(url) {
        const resp = await fetch(url)
        return await resp.json()
    }

    async getPlanet(url) {
        const resp = await fetch(url)
        return await resp.json()
    }

    async getMovie(url) {
        const resp = await fetch(url)
        return await resp.json()
    }

    async getVehicle(url) {
        const resp = await fetch(url)
        return await resp.json()
    }

    async getStarship(url) {
        const resp = await fetch(url)
        return await resp.json()
    }
}