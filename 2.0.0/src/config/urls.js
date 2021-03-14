import { PUBLIC_API_KEY } from "./keys";

// time 형식은 YYYYMMDD
export const PUBLIC_KOREA_URL = (NowTime) => `
    http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${PUBLIC_API_KEY}&pageNo=1&numOfRows=10&startCreateDt=${NowTime}&endCreateDt=${NowTime}
`;

export const PUBLIC_WORLD_URL = (NowTime) => `
http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19NatInfStateJson?serviceKey=${PUBLIC_API_KEY}&startCreateDt=${NowTime}&endCreateDt=${NowTime}
`;

export const PUBLIC_KOREA_VACCINE_URL = (pageIndex) =>
  `https://api.odcloud.kr/api/15077756/v1/vaccine-stat?serviceKey=${PUBLIC_API_KEY}&perPage=18&page=${pageIndex}`;

export const PUBLIC_NEWS_URL = (idx) =>
  `http://apis.data.go.kr/1262000/SafetyNewsList/getCountrySafetyNewsList?serviceKey=${PUBLIC_API_KEY}&numOfRows=20&pageNo=${idx}&title1=코로나&title2=백신&title3=격리&title4=거리두기&title5=입국`;

export const CORONAMAP_URL = "https://coroname.me/getdata";

export const GITPAGES_URL = "https://1seok2.github.io/Hack-GreenSky/#";
