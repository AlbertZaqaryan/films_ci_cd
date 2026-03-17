const movies = document.querySelectorAll(".movie")
const player = document.getElementById("player")
const video = document.getElementById("videoPlayer")
const close = document.getElementById("close")

movies.forEach(movie => {

    movie.addEventListener("click", () => {

        const src = movie.dataset.video

        video.src = src

        player.style.display = "flex"

        video.play()

    })

})

close.addEventListener("click", () => {

    player.style.display = "none"

    video.pause()

})



/* SEARCH */

const search = document.getElementById("search")

search.addEventListener("keyup", () => {

    const value = search.value.toLowerCase()

    movies.forEach(movie => {

        const title = movie.innerText.toLowerCase()

        if(title.includes(value)){
            movie.style.display = "block"
        }else{
            movie.style.display = "none"
        }

    })

})