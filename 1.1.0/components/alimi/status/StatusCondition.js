import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './Status.styled';


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
