import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTgxYTJkMDM5NmE3ZTc4MmFmNTJlYTJkODMxYTkxMCIsIm5iZiI6MTc0Nzg4MjkwNC4wODYwMDAyLCJzdWIiOiI2ODJlOTM5ODQ5OTI0ODk5YWJkNWJlYTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SaY662i-mlj46qwufV0YnrfgRm8maakY6UkuW3w7X2U",
  },
});

export default instance