import React from 'react';
import { StyleSheet ,View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function OtherTitle (props) {

    return (
        <>
            <View style={styles.title}>
                <MaterialIcons 
                    name="local-hospital" size={23} color="black" />
                <Text style={{fontSize : 17, color:'black',fontWeight : 'bold'}}
                >
                    신규 확진자 수
                    <Text style={{color : '#487eb0', fontSize:16, fontWeight:'bold', paddingLeft : 5}}>{props.curtime}</Text>
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    title : {
        flex:0.1,
        flexDirection : 'row',
        alignItems : 'flex-start',
        marginLeft : 15,
        marginBottom : 10
    },
})