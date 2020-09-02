import React from 'react';
import { View, Text, Linking } from 'react-native';
import styles from './OtherMenu.styled';

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
