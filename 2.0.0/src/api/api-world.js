import axios from "axios";
import { LAMBDA_URL, PUBLIC_WORLD_URL } from "../config/urls";

// export const getWorldCorona = (nowTime) => axios.get(PUBLIC_WORLD_URL(nowTime));

export const getWorldCorona = (nowTime) => axios.get(LAMBDA_URL(nowTime, 'PUBLIC_WORLD'));