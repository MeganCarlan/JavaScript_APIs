let searchWord = document.getElementById("searchWord");
let image = document.getElementById("image");
let feedback = document.getElementById("feedback");

let url = "https://api.giphy.com/v1/gifs/translate";
let apiKey = "qbKdwndXqIJM4vEBQ9MxQZBzoJ8IBwfm";


let submitSearch = document.getElementById("submitSearch");
 
submitSearch.addEventListener("click",(event) => {

    getGif(searchWord.value);

    // fetch(`${url}?api_key=${apiKey}&s=${searchWord.value}`).then((res) => {
    //     return res.json();
    // }).then((gif) => {
    //     console.log(gif);
    //     image.src = gif.data.images.original.url;
    // }).catch((err) => {
    //     console.error(err);
    //     feedback.textContent = err.message; 
    // })

    // searchWord.value = "";
}); 


async function getGif(search) {
    try {
        let res = await fetch(`${url}?api_key=${apiKey}&s=${searchWord.value}`)
        let gif = await res.json();
        image.src = gif.data.images.original.url;
    } catch (err) {
        console.error(err);
    }
}



console.log(searchWord.value);



