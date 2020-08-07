
import GetNowTime from '../make/GetNowTime';
const parseString = require('react-native-xml2js').parseString;
const NowTime = GetNowTime();
const API_KEY = 'SEOYVH3u6G%2Fr9VXcn%2B%2Fo84OWhpuvTIOOnXXU1PpL1ngVmTjrBcMf2cyDFwoogj63QmD3X5TGAG5SzOv3vDASbQ%3D%3D';
const URL = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&startCreateDt=${NowTime}&endCreateDt=${NowTime}`



const GetOtherRegion = () => {
    let _regWithInf = [];
    return fetch(URL)
    .then(response => response.text())
    .then((respon) => {
        let data;
        parseString(respon, function(err, result) {
            data = JSON.parse(JSON.stringify(result));
            console.log('len',data.response.body[0].items[0].item.length);
            for(let i = 0; i<data.response.body[0].items[0].item.length; i++){
                const rwi = {
                    region : data.response.body[0].items[0].item[i].gubun[0],   // 지역
                    defcnt : data.response.body[0].items[0].item[i].defCnt[0],  // 확진자수
                    regInf : data.response.body[0].items[0].item[i].incDec[0],  // 전일대비
                    isoing : data.response.body[0].items[0].item[i].isolIngCnt[0],   // 격리중
                    isoclr : data.response.body[0].items[0].item[i].isolClearCnt[0], // 격리해제
                    ofcnt : data.response.body[0].items[0].item[i].overFlowCnt[0],  // 해외유입
                    lccnt : data.response.body[0].items[0].item[i].localOccCnt[0]   // 지역발생

                }
                _regWithInf = [..._regWithInf,rwi];
            }
        });
        return _regWithInf;
    })
    
    // return _regWithInf;
}    
// const GetOtherRegion = () => {

// }



export default GetOtherRegion;