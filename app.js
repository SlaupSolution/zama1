const API_KEY = '3baa8a7abf526341fc6ba0dd27ec2b3b'; // Substitua pela sua chave real
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=$3baa8a7abf526341fc6ba0dd27ec2b3b&language=pt-BR`;

async function fetchMovies() {
    try {
        const response = await fetch https://api.themoviedb.org/3/movie/popular?api_key=$3baa8a7abf526341fc6ba0dd27ec2b3b&language=pt-BR);
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        const data = await response.json();

        const moviesContainer = document.getElementById('movies-container');
        data.results.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');

            const posterUrl = movie.poster_path
                ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                : 'https://via.placeholder.com/100';

            movieDiv.innerHTML = `
                <img src="${posterUrl}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.overview}</p>
            `;
            moviesContainer.appendChild(movieDiv);
        });
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
    }
}

fetchMovies();