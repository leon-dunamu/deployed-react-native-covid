import axios from "axios";
import { PUBLIC_KOREA_VACCINE_URL } from "../config/urls";

export const VACCINE_BASE_DATE = "2021-03-11 00:00:00";

export const getKoreaVaccine = (pageIndex) =>
  axios.get(PUBLIC_KOREA_VACCINE_URL(pageIndex));
