const convertRegion = (region) => {
  if (region.includes("서울")) return "서울";
  if (region.includes("경기")) return "경기";
  if (region.includes("경상남")) return "경남";
  if (region.includes("경상북")) return "경북";
  if (region.includes("강원")) return "강원";
  if (region.includes("인천")) return "인천";
  if (region.includes("부산")) return "부산";
  if (region.includes("충청북")) return "충북";
  if (region.includes("충청남")) return "충남";
  if (region.includes("전라북")) return "전북";
  if (region.includes("대구")) return "대구";
  if (region.includes("전라남")) return "전남";
  if (region.includes("광주")) return "광주";
  if (region.includes("울산")) return "울산";
  if (region.includes("제주")) return "제주";
  if (region.includes("대전")) return "대전";
  if (region.includes("세종")) return "세종";
  else return region;
};

export default convertRegion;
