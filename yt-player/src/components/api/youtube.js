import axios from "axios";

const KEY = "AIzaSyDVdVMBn-Kddt6fsyfORrpFirfbNs5JD64";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
