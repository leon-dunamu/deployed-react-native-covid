import axios from "axios";
import { PUBLIC_NEWS_URL } from "../config/urls";

export const getNews = (idx) => axios.get(PUBLIC_NEWS_URL(idx));
