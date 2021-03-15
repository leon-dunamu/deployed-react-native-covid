import axios from "axios";
import { PUBLIC_WORLD_URL } from "../config/urls";

export const getWorldCorona = (nowTime) => axios.get(PUBLIC_WORLD_URL(nowTime));
