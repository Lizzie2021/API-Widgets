import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID vasSUcwJzoJkz4qDLIw13oOpgLjGqw2KxdEwTHkOarU",
  },
});
