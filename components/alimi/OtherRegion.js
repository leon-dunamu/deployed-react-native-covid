import React, { useEffect, useState } from 'react';
import { StyleSheet ,View, Text, ScrollView } from 'react-native';
import getOtherRegion from './getLocation/GetOtherRegion';
import ShowRegion from './publicData/ShowRegion';
const parseString = require('react-native-xml2js').parseString;



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

  rowList : {
    width : 60,
  },
  other : {
    flex : 3,
    flexDirection : "row",
    marginBottom : 20,
  },
  otherTxt : {
    flex : 1,
    textAlign :"center",
    textAlignVertical : "center"
  },
})