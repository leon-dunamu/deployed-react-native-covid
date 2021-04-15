import axios from "axios";
import { LAMBDA_URL, PUBLIC_KOREA_URL } from "../config/urls";

// export const getKoreaCorona = (nowTime) => axios.get(PUBLIC_KOREA_URL(nowTime));

export const getKoreaCorona = (nowTime) => axios.get(LAMBDA_URL(nowTime, 'PUBLIC_KOREA'))
