import axios from "axios";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { createMarkup } from "./js/render-functions";
import { requestServer } from "./js/pixabay-api";

const form = document.querySelector(".picture-form");
form.addEventListener("submit", handleSubmit);

const loader = document.querySelector(".loader")
 loader.style.display = 'none';

const list = document.querySelector(".list");
const loadBtn = document.querySelector(".js_load_more");

loadBtn.addEventListener("click", loadMore);

let page = 1;
let input;


async function handleSubmit(event) {
    event.preventDefault();
    input = event.target.elements.choose.value;
    list.innerHTML = "";
    page = 1;
    try {
        const data = await requestServer(input, page)
        
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


const lightbox = new SimpleLightbox('.list a', { 
    captionsData: "alt",
    captionDelay: 250,
 });


async function loadMore() {
     loader.style.display = 'inline-flex';
    page += 1;

    const card = document.querySelector(".gallery-item");
    const cardHeight = card.getBoundingClientRect().height;
    
    try {
        const data = await requestServer(input, page);

        list.insertAdjacentHTML("beforeend", createMarkup(data.hits));
        lightbox.refresh();
        loader.style.display = 'none';

        window.scrollBy({
            top: cardHeight * 2,
            left: 0,
            behavior: "smooth",
        });
        
        const lastPage = Math.ceil(data.totalHits / 15);
        
        if (page >= lastPage) {
            loadBtn.classList.replace("load_more", "load_more_hidden")
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                backgroundColor: '#09f;',
                messageColor: '#2e2f42',
                timeout: 2000,
                position: "topRight"
            })
        }

    } catch (error) {
        alert(error.message)
    }
    
}