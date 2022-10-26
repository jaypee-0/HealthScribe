import axios from "./Axios";

const LOGIN_URL = "/oauth/token";
const SIGNUP_URL = "/users";
const LOGOUT_URL = "/oauth/revoke";
const CURRENT_USER_URL = "users";

const CLIENT_ID = '145893185256-ri0009ijfn3i97bjqs9gakn4r1uimamh.apps.googleusercontent.com';
const CLIENT_SECRET = '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';

export async function createUserWithEmailAndPassword(
  full_name: string,
  email: string,
  password: string
) {
  const data = {
    full_name: full_name,
    email: email,
    password: password,
    client_id: CLIENT_ID,
  };

  return axios
    .post(SIGNUP_URL, data)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      return error.response.data;
    });
}

export async function loginWithEmailAndPassword(
  email: string,
  password: string
) {
  const data = {
    grant_type: "password",
    email: email,
    password: password,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };

  return axios
    .post(LOGIN_URL, data)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      return error.response.data;
    });
}
export async function logoutUserWithToken(token: string) {
  const data = {
    token: token,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };

  return axios
    .post(LOGOUT_URL, data)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      return error.response.data;
    });
}

export async function requestAccessTokenWithRefreshToken(refreshToken: string) {
  const data = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };

  return axios
    .post(LOGIN_URL, data)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      return error.response.data;
    });
}

export async function getCurrentUser(accessToken: string) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return axios
    .get(CURRENT_USER_URL, config)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      return error.response.data;
    });
}
