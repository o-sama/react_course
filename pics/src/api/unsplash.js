import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID e6f117fbc701a0f12da7ee9bfe44da7005e6d2a28b8935a6fc0b79a109e7fa58"
  }
});
