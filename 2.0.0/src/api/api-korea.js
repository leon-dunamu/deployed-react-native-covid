import axios from "axios";
import { PUBLIC_KOREA_URL } from "../config/urls";

export const getKoreaCorona = () => axios.get(PUBLIC_KOREA_URL);
