import React from 'react';
import { StyleSheet,View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function StatusCondition(props){
    
    return (
        <>
            {/* it shows sentence about condition of your region */}
            <View style={styles.Sconstainer}>
                { props.condition === 'Error' ? 
                        <MaterialCommunityIcons 
                        style={styles.conditionTxt} 
                        name="reload" 
                        size={24} 
                        color="white" 
                        onPress={props.getLocation}
                        />
                    :   <Text style={styles.conditionTxt}>{props.condition}</Text>
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    conditionTxt : {
      marginTop : 10,
      textAlign : "center",
      textAlignVertical : "top",
      fontSize : 20,
      color : 'white',
    },
    Sconstainer : {
      flex : 2.3,
      marginTop : 10
    },
})