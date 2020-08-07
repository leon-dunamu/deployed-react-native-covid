import React from 'react';
import StatusFace from './StatusFace';
import StatusCondition from './StatusCondition';
import StatusSentence from './StatusSentence';
import StatusRandomSentence from './StatusRandom';


export default function Status(props){
    return(
        <>
            <StatusFace face={props.face}/>
            {/* it shows sentence about condition of your region */}
            <StatusCondition condition={props.condition} />
            <StatusRandomSentence condition={props.condition}/>
            {/* it shows the patients number around you */}
            <StatusSentence CountInCircle={props.CountInCircle} />
        </>
    );
}