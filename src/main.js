import axios from "axios";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".picture-form");
form.addEventListener("submit", handleSubmit);

const loader = document.querySelector(".loader")
 loader.style.display = 'none';

const list = document.querySelector(".list");

const loadBtn = document.querySelector(".js_load_more");

 loadBtn.addEventListener("click", loadMore);

let page = 33;
let input;


const apiKey = "43226276-a07a0c17e428cfffb021b9b05";
async function requestServer(value) {
    const { data } = await axios("https://pixabay.com/api/", {
        params: {
            key: apiKey,
            q: value,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page: page,
            per_page: 15
            
        }
    })
    return data;
}



async function handleSubmit(event) {
    event.preventDefault();
    input = event.target.elements.choose.value;
    list.innerHTML = "";
    
    try {
        const data = await requestServer(input)
        
        if (data.hits.length === 0) {
            list.innerHTML = "";
            iziToast.info({
                message: "Sorry, there are no images matching your search query. Please try again!",
                backgroundColor: '#ef4040',
                messageColor: '#fafafb',
                timeout: 2000,
                position: "topRight"
            })
            return
        }

        list.insertAdjacentHTML("beforeend", createMarkup(data.hits)) 
        lightbox.refresh()
        

        if (page < data.totalHits) {
             loadBtn.classList.replace("load_more_hidden", "load_more");
        }
        
       
            
    } catch (error) {
        console.log(error);
    } finally {
        form.reset()
    }
}


 function createMarkup(arr) {
    return arr.map(({ id, webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<li data-id="${id}" class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      data-source="${largeImageURL}"
      alt="${tags}"
      />
    <ul class="info-card">
    <li class="info-label" ><span>Likes</span><br>${likes}</li>
    <li class="info-label"><span>Views</span><br>${views}</li>
    <li class="info-label"><span>Comments</span><br>${comments}</li>
    <li class="info-label"><span>Downloads</span><br>${downloads}</li>
    </ul>
    </a>
</li>`)
        .join("");
    
}

const lightbox = new SimpleLightbox('.list a', { 
    captionsData: "alt",
    captionDelay: 250,
 });

async function loadMore() {
     loader.style.display = 'inline-flex';
    page += 1;
    
    try {
        
        const data = await requestServer(input);

        console.log(data.totalHits);

        list.insertAdjacentHTML("beforeend", createMarkup(data.hits));
        lightbox.refresh();
        loader.style.display = 'none';
        
        const lastPage = Math.ceil(data.totalHits / 15);
        
        if (page >= lastPage) {
            loadBtn.classList.replace("load_more", "load_more_hidden")
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                backgroundColor: '#ef4040',
                messageColor: '#fafafb',
                timeout: 2000,
                position: "topRight"
            })
        }


    } catch (error) {
        alert(error.message)
    }
    
}