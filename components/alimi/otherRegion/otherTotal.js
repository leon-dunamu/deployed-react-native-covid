import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

// reginf={value.regInf}
// region={value.region}
// defcnt = {value.defcnt}
// isoing = {value.isoing}
// isoclr = {value.isoclr}
// ofcnt = {value.ofcnt}
// lccnt = {value.lccnt}
export default function OtherTotal(props){


    return (
        <>
            <View style={styles.totalWrapper}>
                {/* <Text style={{
                    flex:1,
                    textAlign:"center",
                    textAlignVertical : "center",
                    fontSize : 18,
                    fontWeight : "bold",
                    color:'white'
                }}>전국</Text> */}
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

const styles = StyleSheet.create({
    totalWrapper : {
        flex : .6,
        flexDirection : "row",
        margin: 5,
        backgroundColor :"#4b4b4b",
        borderRadius : 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0,
        shadowRadius: 4.65,
        
        elevation: 6,
        marginBottom : 10
    },
    descWrapper : {
        flex : 1.3,
        margin : 3,
    },
    descTitle : {
        flex :.9,
        textAlignVertical : "center",
        textAlign : "center",
        color : 'white',
        fontWeight : "bold"
    },
    descContent : {
        flex : 1,
        textAlign : "center",
        textAlignVertical : "center",
        backgroundColor : 'white',
        borderRadius : 5,
        fontWeight : "bold",
        marginBottom : 5,
        fontSize : 17
    }
})