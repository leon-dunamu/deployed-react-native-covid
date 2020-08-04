import React from 'react';
import StatusFace from './status/StatusFace';
import StatusCondition from './status/StatusCondition';
import StatusSentence from './status/StatusSentence';
import StatusRandomSentence from './status/StatusRandom';

// interface StatusProps {
//     face : string,
//     condition : string,
//     CountInCircle : number
// }

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