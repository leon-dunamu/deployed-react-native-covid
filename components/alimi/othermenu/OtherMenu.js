import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

export default function OtherMenu({navigation}){
    return(
        <>
            <View style={styles.circleWrapper}>
                <View style={styles.circleMenu}>
                    <Text style={[styles.txt, styles.txtLH]}
                        onPress={()=> 
                            Linking.openURL('http://ncov.mohw.go.kr/')
                        }
                    >COVID19</Text>
                </View>
                <View style={styles.circleMenu}>
                    <Text style={[styles.txt, styles.txtRH]}
                        onPress={()=> 
                            Linking.openURL('http://www.cdc.go.kr/')
                        }
                    >질병관리부</Text>
                </View>
            </View>
            <View style={styles.circleWrapper}>
                <View style={styles.circleMenu}>
                    <Text style={[styles.txt, styles.txtLB]}
                        onPress={()=> 
                            Linking.openURL('http://www.mohw.go.kr/react/index.jsp')
                        }
                    >보건복지부</Text>
                </View>
                <View style={styles.circleMenu}>
                    <Text onPress={() => navigation.navigate('about')} style={[styles.txt, styles.txtRB]}>ABOUT</Text>
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
    },
    txtLB : {
        marginTop : "33%",
        marginLeft : "20%",
        backgroundColor : '#05c46b',
    },
    txtRH : {
        marginTop : "66%",
        marginLeft : "17%",
        backgroundColor : '#9c88ff',
    },
    txtRB : {
        marginTop : "33%",
        marginLeft : "17%",
        backgroundColor : '#fa983a',
    }
})