let cast = document.getElementById('cast').value
function getCast(cast) {    
    fetch(`https://itunes.apple.com/search?term=${cast}`)
        .then(response => JSON.parse(response))
    console.log(response)
}