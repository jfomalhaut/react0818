import axios from "axios";

const URL = "http://localhostapi"

const getRequest = async(path) => {
  return await axios.get(`${URL}/${path}`)
}

const postRequest = async(path, payload) => {
  return await axios.get(`${URL}/${path}`, payload)
}

export const GetDetail = board_id => {
  const path = `getDetail?board_id=${board_id}`
  return getRequest(path);
}

export const GetComment = board_id => {
  const path = `getComment?board_id=${board_id}`
  return getRequest(path);
}