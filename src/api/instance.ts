import axios from "axios"

export const instance = axios.create({
  // будь это внутренний api - следует поместить в env
  baseURL: "https://random-data-api.com/api/users/random_user",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
})
