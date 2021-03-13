import axios from "axios";
import { PUBLIC_KOREA_URL } from "../config/urls";

export const getKoreaCorona = (nowTime) => axios.get(PUBLIC_KOREA_URL(nowTime));
