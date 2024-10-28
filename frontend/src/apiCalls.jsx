import axios from "axios";

export async function postURL(url) {
    return axios.post('http://localhost:4000/submitURL', {"url": url.inputValue}, {headers: {"Content-Type": "application/json"}})
}

export async function fetchURLs() {
    const response = await fetch("http://localhost:4000/getAllURLs");
    if (!response.ok) {
        throw new Error("Network Response was not ok");
    }
    return response.json();
}

