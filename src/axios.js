import axios from "axios";

const instance = axios.create({
	baseURL: "https://us-central1-clone-react-c0b37.cloudfunctions.net/api",
});

export default instance;
