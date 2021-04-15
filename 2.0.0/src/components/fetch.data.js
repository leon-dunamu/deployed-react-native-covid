import moment from "moment";
import { getCoronamapData } from "../api/api-coronamap";
import { getKoreaCorona } from "../api/api-korea";
import { getNews } from "../api/api-news";
import { getKoreaVaccine, VACCINE_BASE_DATE } from "../api/api-vaccine";
import { getWorldCorona } from "../api/api-world";

export const fetchDataPriority = async (saveCoronamap, saveKorea) => {
  const nowDate =
    new Date().getHours() > 9
      ? moment(nowDate)
      : moment(nowDate).subtract(1, "days");
  const nowDateFormat = moment(nowDate).format("YYYYMMDD");
  let mapResult = null;
  let krResult = null;
  let error = false;

  try {
    mapResult = await getCoronamapData();
    krResult = await getKoreaCorona(nowDateFormat);
    console.log('kkk:', krResult);
  } catch (e) {
    error = true;
    console.log("api error", e);
  } finally {
    const kritem = krResult.data.response.body.items.item;

    mapResult.status === 200 && saveCoronamap(mapResult.data.data);
    kritem && saveKorea(kritem);
  }

  return error;
};

export const fetchDataLater = async (saveWorld, saveVaccine, saveNews) => {
  const nowDate =
    new Date().getHours() > 14
      ? moment(nowDate)
      : moment(nowDate).subtract(1, "days");
  const nowDateFormat = moment(nowDate).format("YYYYMMDD");
  const pageIndex = nowDate.diff(VACCINE_BASE_DATE, "days") + 1;
  let wrResult = null;
  let vcResult = null;
  let nwResult = null;
  let error = false;

  try {
    vcResult = await getKoreaVaccine(pageIndex);
    wrResult = await getWorldCorona(nowDateFormat);
    nwResult = await getNews(1);
  } catch (e) {
    error = true;
    console.log("api error", e);
  } finally {
    const writem = wrResult.data.response.body.items.item;
    const nwitem = nwResult.data.response.body.items.item;

    writem && saveWorld(writem);
    vcResult.data.data && saveVaccine(vcResult.data.data);
    nwitem && saveNews(nwitem);
  }

  return error;
};
