import React, { useEffect, useState } from 'react';
import { StyleSheet ,View, Text, ScrollView } from 'react-native';
import getOtherRegion from './getLocation/GetOtherRegion';
import ShowRegion from './publicData/ShowRegion';
import { MaterialIcons } from '@expo/vector-icons';



export default function OtherRegion() {
    // const [region, setRegion] = useState([]);
    // const [regInf, setRegInf] = useState([]);
    const [regWithInf, setregWithInf] = useState([]);
    const [count , setCount] = useState(0);

    useEffect(()=> {
        getOtherRegion().then(data => {
            let reversed = data.reverse();
            setregWithInf(reversed);
        });
        // console.log('it is',regWithInf);
    },[]);
    return (
        <>
            <View style={styles.title}>
                <MaterialIcons 
                    style={{
                        textShadowColor: '#000',
                        textShadowOffset: { width: 0, height: 0 },
                        textShadowRadius: 12
                    }}
                    name="local-hospital" size={23} color="white" />
                <Text style={{fontSize : 17, color:'white',
                    textShadowColor: '#000',
                    textShadowOffset: { width: 0, height: 0 },
                    textShadowRadius: 12}}
                > 신규 확진자 수</Text>
            </View>
            <ScrollView horizontal={true}>
                <View style={styles.other}>
                    {/*  */}
                    {regWithInf.map((value) => {
                        if(count >19) {
                            return null;
                        } else {
                            return (
                                <ShowRegion 
                                    reginf={value.regInf}
                                    region={value.region}
                                />
                            )
                        }
                    })}
                </View>
            </ScrollView>
            
        </>
    )
}

const styles = StyleSheet.create({
    title : {
        marginTop : 10,
        flex:0.3,
        flexDirection : 'row',
        alignItems : 'center',
        marginLeft : 15,
    },
  rowList : {
    width : 60,
  },
  other : {
    flex : 3,
    flexDirection : "row",
    marginBottom : 8,
  },
  otherTxt : {
    flex : 1,
    textAlign :"center",
    textAlignVertical : "center"
  },
})