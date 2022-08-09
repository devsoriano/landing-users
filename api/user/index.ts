import axios from "axios";
import { REQRES_API, JSPH_API } from "../../utils/constants";
import { FormData } from "./interface";

export async function loginApi(formData: FormData) {
  try {
    const response = await axios.post(`${REQRES_API}/api/login`, formData);
    return response?.data;
  } catch (err) {
    return null;
  }
}

export async function getUsers(page: number) {
  try {
    const response = await axios.get(`${REQRES_API}/api/users?page=${page}`);
    return response?.data;
  } catch (err) {
    return null;
  }
}

export async function getPosts(userId: number) {
  try {
    const response = await axios.get(`${JSPH_API}/posts?userId=${userId}`);
    return response?.data;
  } catch (err) {
    return null;
  }
}

export async function getAlbums(userId: number) {
  try {
    const response = await axios.get(`${JSPH_API}/users/${userId}/albums`);
    return response?.data;
  } catch (err) {
    return null;
  }
}

export async function getPhotos(albumId: number) {
  try {
    const response = await axios.get(`${JSPH_API}/photos?albumId=${albumId}`);
    return response?.data;
  } catch (err) {
    return null;
  }
}
