import React from 'react';
import { View, Text } from 'react-native';
import styles from './other.styled';

export default function OtherTotal(props){
    return (
        <>
            <View style={styles.totalWrapper}>
                <View style={[styles.descWrapper,{marginLeft:6}]}>
                    <Text style={styles.descTitle}>누적</Text>
                    <Text style={styles.descContent}>{props.regWithInf.defcnt}</Text>
                </View>
                <View style={styles.descWrapper}>
                    <Text style={styles.descTitle}>전일대비</Text>
                    <Text style={[styles.descContent,{color:'#b33939'}]}>+{props.regWithInf.regInf}</Text>
                </View>
                <View style={styles.descWrapper}>
                    <Text style={styles.descTitle}>해외유입</Text>
                    <Text style={[styles.descContent,{color:'#474787'}]}>+{props.regWithInf.ofcnt}</Text>
                </View>
                <View style={styles.descWrapper}>
                    <Text style={styles.descTitle}>지역발생</Text>
                    <Text style={[styles.descContent,{color:'#cc8e35'}]}>+{props.regWithInf.lccnt}</Text>
                </View>
                <View style={[styles.descWrapper,{marginRight : 6}]}>
                    <Text style={styles.descTitle}>격리중</Text>
                    <Text style={[styles.descContent,{color:'#227093'}]}>{props.regWithInf.isoing}</Text>
                </View>
            </View>
        </>
    );
}