import React from 'react';
import { View , StyleSheet} from 'react-native';

import MyAddress from './MyAddress';
import StatusSentence from '../status/StatusSentence';

export default function ConditionAddrCount(props) {
    return (
        <>
            <View style={styles.txtWrapper}>
                {/* it shows address where you are in */}
                <MyAddress myAddr={props.myAddr} />
                {/* it shows the patients number around you */}
                <StatusSentence CountInCircle={props.CountInCircle} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
  txtWrapper : {
    flex : 2,
  },
})