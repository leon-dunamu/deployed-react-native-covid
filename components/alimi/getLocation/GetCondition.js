const GetCondition = (countInCircle) => {
    let stateAlimi = {
        conditionState : 'good',
        conditionTxt : '좋음',
        conditionFace : 'emoji-happy',
        conditionBgColor : '#1289A7'
    }
    if(countInCircle < 1){
      stateAlimi = {
        conditionState : 'good',
        conditionTxt : '좋음',
        conditionFace : 'emoji-happy',
        conditionBgColor : '#1289A7'
      };
    } else if ( 1 <= countInCircle && countInCircle <=2 ){
      stateAlimi = {
        conditionState : 'soso',
        conditionTxt : '조금 위험',
        conditionFace : 'emoji-neutral',
        conditionBgColor : '#009432'
      };
    } else if ( 3 <= countInCircle && countInCircle <= 5 ){
      stateAlimi = {
        conditionState : 'bad',
        conditionTxt : '위험',
        conditionFace : 'emoji-sad',
        conditionBgColor : '#cc8e35'
      };
    } else if ( 6<= countInCircle ) {
      stateAlimi = {
        conditionState : 'terr',
        conditionTxt : '매우 위험',
        conditionFace : 'emoticon-devil-outline',
        conditionBgColor : '#b33939'
      };
    }

    return stateAlimi;
}

export default GetCondition;