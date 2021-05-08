import axios from "axios";

const getRequest = async(url) => {
  return await axios.get(url)
}