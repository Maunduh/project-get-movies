function fetchMovies() {
    
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=8c428d12cd39a89cbf5c7d1347ece57d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    .then(res=>res.json())
    .then(data=>renderMovies(data))
}
function renderMovies(data){
    console.log(data)
    //let list = document.getElementsByClassName('movies');

    ul = document.createElement('ul');
    ul.classList.add("movies")

    document.getElementById('movies').appendChild(ul);
    

    data.results.forEach(item => {
        let li = document.createElement('li');
        ul.appendChild(li);
    
        li.innerHTML += item.original_title;
    });
}

fetchMovies();