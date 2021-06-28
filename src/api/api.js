import axios from "axios";

const host = "http://localhost4/php"
export const APIFlowers = {
    getFlowers() {
        return axios.get(`${host}/flowers.php`).then(response => response)
    }
}