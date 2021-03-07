import axios from "axios";
import {BASE_URI} from "../variables";

export async function registerUser(email, username, password) {
  try {
    const response = await axios({
      url: `${BASE_URI}/users/register`,
      method: "POST",
      data: { email, username, password },
    });

    return response.data;
  } catch (error) {
    return !error?.response?.data
      ? { error: true, message: error.message }
      : error.response.data;
  }
}

export async function registerHandler(token) {
  try {
    const response = await axios({
      url: `${BASE_URI}/users/register-verify`,
      method: "GET",
      headers: {
        Register: token,
      },
    });

    return response.data;
  } catch (error) {
    return !error?.response?.data
      ? { error: true, message: error.message }
      : error.response.data;
  }
}

export async function requestPassword(data) {
  try {
    const response = await axios({
      url: `${BASE_URI}/users/request-password`,
      method: "POST",
      data: { data },
    });

    return response.data;
  } catch (error) {
    return !error?.response?.data
      ? { error: true, message: error.message }
      : error.response.data;
  }
}

export async function requestPasswordHandler(password, token) {
  try {
    const response = await axios({
      url: `${BASE_URI}/users/recovery-password`,
      method: "POST",
      headers: { Reset: token },
      data: { password },
    });

    return response.data;
  } catch (error) {
    return !error?.response?.data
      ? { error: true, message: error.message }
      : error.response.data;
  }
}

export async function getContacts(token, page = 1, limit = 7) {
  try {
    const response = await axios({
      url: `${BASE_URI}/contacts/get-contacts`,
      method: "GET",
      headers: { Author: token },
      params: { page: page, limit: limit },
    });

    return response.data;
  } catch (error) {
    return !error?.response?.data
      ? { error: true, message: error.message }
      : error.response.data;
  }
}

export async function transformGoogleToken(token) {
  try {
    const response = await axios({
      url: `${BASE_URI}/contacts/get-contacts-by-google`,
      method: "GET",
      headers: { Google: token },
    });

    return response.data;
  } catch (error) {
    return !error?.response?.data
      ? { error: true, message: error.message }
      : error.response.data;
  }
}
export async function createContact(name, number, email, token) {
  try {
    const response = await axios({
      url: `${BASE_URI}/contacts/create-contact`,
      method: "POST",
      headers: { Author: token },
      data: { name, number, email },
    });

    return response.data;
  } catch (error) {
    return !error?.response?.data
      ? { error: true, message: error.message }
      : error.response.data;
  }
}

export async function login(email, password) {
  try {
    const response = await axios({
      url: `${BASE_URI}/users/login`,
      method: "POST",
      data: { email, password },
    });

    return response.data;
  } catch (error) {
    return !error?.response?.data
      ? { error: true, message: error.message }
      : error.response.data;
  }
}
