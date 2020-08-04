import React from 'react';
import { View, Text, StyleSheet,Linking } from 'react-native';

export default function OtherAbout(){
    return(
        <>
            <View style={styles.circleWrapper}>
                <View style={styles.circleMenu}>
                    <Text 
                        style={[styles.txt, styles.txtLH]}
                        onPress={()=> Linking.openURL('https://www.notion.so/a4037a8ca4c54fc2a52f259ccb86b4be')}
                    >
                        DOCS
                    </Text>
                </View>
                <View style={styles.circleMenu}>
                    <Text style={[styles.txt, styles.txtRH]}
                        onPress={()=> Linking.openURL('mailto:dnjstjr31@gmail.com')}
                    >
                        MAIL
                    </Text>
                </View>
            </View>
            <View style={styles.circleWrapper}>
                <View style={styles.circleMenu}>
                    <Text 
                        style={[styles.txt, styles.txtLB]}
                        onPress={()=> 
                            Linking.openURL('https://www.data.go.kr/ugs/selectPortalInfoView.do')
                        }
                    >
                        공공데이터
                    </Text>
                </View>
                <View style={styles.circleMenu}>
                    <Text style={[styles.txt, styles.txtRB]}
                        onPress={()=> 
                            Linking.openURL('https://github.com/1Seok2/react-native-covid')
                        }
                    >
                        GITHUB
                    </Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    circleWrapper : {
        flex : 1,
        flexDirection : "row",
        textAlign : "center",
        textAlignVertical : "center",
    },
    circleMenu : {
        flex : 1,
        textAlign : "center",
        textAlignVertical : "center",
    },  
    txt : {
        width : 120,
        height : 120,
        textAlign : "center",
        textAlignVertical : "center",
        backgroundColor:'#68a0cf',
        borderRadius:60,
        borderWidth: 1,
        borderColor: '#fff',
        color : 'white',
        fontSize : 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 8,
    },
    txtLH : {
        marginTop : "66%",
        marginLeft : "20%",
        backgroundColor : '#BDC581',
    },
    txtLB : {
        marginTop : "33%",
        marginLeft : "20%",
        backgroundColor : '#3c40c6',
    },
    txtRH : {
        marginTop : "66%",
        marginLeft : "17%",
        backgroundColor : '#ED4C67',
    },
    txtRB : {
        marginTop : "33%",
        marginLeft : "17%",
        backgroundColor : '#485460',
    }
})