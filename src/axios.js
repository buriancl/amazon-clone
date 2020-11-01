import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-654cd.cloudfunctions.net/api", // The API (cloud function) URL
  // http://localhost:5001/clone-654cd/us-central1/api
});

export default instance;
