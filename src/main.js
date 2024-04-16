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


const apiKey = "43226276-a07a0c17e428cfffb021b9b05";
async function requestServer(value) {
    const { data } = await axios("https://pixabay.com/api/", {
        params: {
            key: apiKey,
            q: value,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    })
    console.log(data);
    return data;
}

jj

 async function handleSubmit(event) {
    event.preventDefault();
    const input = event.target.elements.choose.value;
    loader.style.display = 'inline-flex';
        try {
            const data = await requestServer(input)
            loader.style.display = 'none';
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
            list.innerHTML = createMarkup(data.hits)
            lightbox.refresh()
            
        } catch (error) {
            console.log(error);
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

