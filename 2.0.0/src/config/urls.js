import {
  PUBLIC_KOREA_API_KEY,
  PUBLIC_KOREA_VACCINE_API_KEY,
  PUBLIC_WORLD_API_KEY,
} from "./keys";

// time 형식은 YYYYMMDD
export const PUBLIC_KOREA_URL = (NowTime) => `
    http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${PUBLIC_KOREA_API_KEY}&pageNo=1&numOfRows=10&startCreateDt=${NowTime}&endCreateDt=${NowTime}
`;

export const PUBLIC_WORLD_URL = (NowTime) => `
http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19NatInfStateJson?serviceKey=${PUBLIC_WORLD_API_KEY}&startCreateDt=${NowTime}&endCreateDt=${NowTime}
`;

export const PUBLIC_KOREA_VACCINE_URL = (pageIndex) =>
  `https://api.odcloud.kr/api/15077756/v1/vaccine-stat?serviceKey=${PUBLIC_KOREA_VACCINE_API_KEY}&perPage=18&page=${pageIndex}`;

export const CORONAMAP_URL = "https://coroname.me/getdata";

export const GITPAGES_URL = "https://1seok2.github.io/Hack-GreenSky/#";
