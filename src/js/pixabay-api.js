import axios from "axios";

// // const apiKey = "43226276-a07a0c17e428cfffb021b9b05";
// // export function requestServer (value) {
// //     const params = new URLSearchParams({
// //     key: apiKey,
// //     q: value,
// //     image_type: "photo",
// //     orientation: "horizontal",
// //     safesearch: true
// //     })
// //     return fetch(`https://pixabay.com/api/?${params}`)
// // }

// const apiKey = "43226276-a07a0c17e428cfffb021b9b05";
// const baseUrl = "https://pixabay.com/api/";

// let page = 1;

//  export async function requestServer(value) {
    
//     const { data } = await axios.get(`${baseUrl}`, {
//         params: {
//             key: apiKey,
//             q: value,
//             image_type: "photo",
//             orientation: "horizontal",
//             safesearch: true,
//             page: page,

//         }

//     })
//     console.log(data);
//     return data;
// }