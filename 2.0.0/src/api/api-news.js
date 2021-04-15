import axios from "axios";
import { LAMBDA_URL, PUBLIC_NEWS_URL } from "../config/urls";

// export const getNews = (idx) => axios.get(PUBLIC_NEWS_URL(idx));

export const getNews = (idx) => axios.get(LAMBDA_URL(idx, 'PUBLIC_NEWS'))
