import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function Menu1({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    txt : {
        flex : 1,
        textAlign : "center",
        textAlignVertical : "center",
    }
})