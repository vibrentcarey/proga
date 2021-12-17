import axios from "axios";
const baseURL = "http://localhost:8080";

export async function getRandomRec() {
  try {
    let response = await axios.get(`${baseURL}/`);
    let data = response.data;
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}
