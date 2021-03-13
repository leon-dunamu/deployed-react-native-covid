import axios from "axios";
import { CORONAMAP_URL } from "../config/urls";

export const getCoronamapData = () => axios.get(CORONAMAP_URL);
