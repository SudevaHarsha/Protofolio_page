import axios from "axios";

const sud = axios.create({
    baseURL:'http://localhost:8081'
})

export default sud();