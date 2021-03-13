const PUBLIC_KOREA_API_KEY = process.env.PUBLIC_KOREA_API_KEY;

// time 형식은 YYYYMMDD
export const PUBLIC_KOREA_URL = (NowTime) => `
    http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${PUBLIC_KOREA_API_KEY}&pageNo=1&numOfRows=10&startCreateDt=${NowTime}&endCreateDt=${NowTime}
`;

export const CORONAMAP_URL = "https://coroname.me/getdata";
