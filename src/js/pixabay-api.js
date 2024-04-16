import axios from "axios";



const apiKey = "43226276-a07a0c17e428cfffb021b9b05";
export async function requestServer(value, page) {
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