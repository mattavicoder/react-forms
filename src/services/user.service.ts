import axios from "axios";

const baseUri: string = 'https://random-data-api.com/api/'

async function getRandomUser() {
  try {
    const data = await axios.get(`${baseUri}users/random_user`);
    return data;
  } catch(err) {
    console.log("error: ", err);
  }
}