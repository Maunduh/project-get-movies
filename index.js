

// function fetchMovies() {
    
//     return fetch(`https://api.themoviedb.org/3/movie/550?api_key=38a1c0e84857e8d08f09eac3b835e37b`)  .then(res=>res.json())
//     .then(data=>renderMovies(data))
// }
// function renderMovies(data){
//     console.log(data)
//     //let list = document.getElementsByClassName('movies');

//     ul = document.createElement('ul');
//     ul.classList.add("movies")

//     document.getElementById('movies').appendChild(ul);
    

//     data.results.forEach(item => {
//         let li = document.createElement('li');
//         ul.appendChild(li);
    
//         li.innerHTML += item.original_title;
//         let overview=document.createElement('p');
//         li.appendChild(overview);

//         overview.innerHTML +="Overview: " + item.overview; 

//         let release_date=document.createElement('p');
        
//         release_date.innerHTML +="Release Date:" + item.release_date;
//         li.appendChild(release_date);

//         let vote_count=document.createElement('p');
//         li.appendChild(vote_count);

//          vote_count.innerHTML += 'vote count:' +item.vote_count;
        
        

        

//     });
// }
// fetchMovies()


document.addEventListener("DOMContentLoaded", function () {
    const api_url =
        "https://api.themoviedb.org/3/discover/movie?api_key=8c428d12cd39a89cbf5c7d1347ece57d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    getMovies(api_url);
    function getMovies(url) {
        fetch(url)
            .then((res) => res.json())
            .then((results) => renderMovies(results.results));
    }
    function renderMovies(movies) {
        
        const img = "https://image.tmdb.org/t/p/w1280";
        main.innerHTML = "";
        movies.map((movie) => {
            const { poster_path, release_date, title, vote_average, overview } =
                movie;
            const movieDisplay = document.createElement("div");
            movieDisplay.classList.add("movie");
            movieDisplay.innerHTML = `<img src="${img + poster_path}" alt="${title}"/>
            <div class="movie_info">
                <h2>${title}</h2>
                <span class="vote_average">Rating: ${vote_average}</span>
                <span class="release_date">Release date: ${release_date}</span>
            </div>
            <div class="overview">
                <h2>Overview:</h2>
                ${overview}
            </div>
        `;
            main.appendChild(movieDisplay);
        });
    }
    document.querySelector("#form").addEventListener("submit", (event)=>{
        event.preventDefault();
        let search = document.querySelector("#search");
        let searchItem = search.item;
        if (searchItem) {
            const search_api="https://api.themoviedb.org/3/discover/movie?api_key=8c428d12cd39a89cbf5c7d1347ece57d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
            getMovies(search_api + searchItem);
            search.item = "";
        }
    })
    // const form = document.querySelector("#form");
    // form.addEventListener("submit", (e) => {
    //     e.preventDefault();
    //     const searchAPI =
    //         "https://api.themoviedb.org/3/discover/movie?api_key=8c428d12cd39a89cbf5c7d1347ece57d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    //    const search = document.querySelector("#search");
        // const searchValue = search.value;
        // if (searchValue) {
        //     getMovies(searchAPI + searchValue);
        //     search.value = "";
    //     }
    // });

    // const post = document.querySelector("#post");
    // post.addEventListener("click", function () {

    //     const commentBox = document.querySelector("#comment-box").value;
    //     commentBox.value=''
    //     const li = document.createElement("li");
    //     const text = document.createTextNode(commentBox);
    //     li.appendChild(text);
    //     document.getElementById("unordered").appendChild(li);
       

    // });
});