import React from 'react';
import { View, Text, Linking } from 'react-native';
import styles from './OtherMenu.styled';

export default function OtherAbout(){
    return(
        <>
            <View style={styles.circleWrapper}>
                <View style={styles.circleMenu}>
                    <Text 
                        style={[styles.txt, styles.txtLH2]}
                        onPress={()=> Linking.openURL('https://www.notion.so/a4037a8ca4c54fc2a52f259ccb86b4be')}
                    >
                        DOCS
                    </Text>
                </View>
                <View style={styles.circleMenu}>
                    <Text style={[styles.txt, styles.txtRH2]}
                        onPress={()=> Linking.openURL('mailto:dnjstjr31@gmail.com')}
                    >
                        MAIL
                    </Text>
                </View>
            </View>
            <View style={styles.circleWrapper}>
                <View style={styles.circleMenu}>
                    <Text 
                        style={[styles.txt, styles.txtLB2]}
                        onPress={()=> 
                            Linking.openURL('https://www.data.go.kr/ugs/selectPortalInfoView.do')
                        }
                    >
                        공공데이터
                    </Text>
                </View>
                <View style={styles.circleMenu}>
                    <Text style={[styles.txt, styles.txtRB2]}
                        onPress={()=> 
                            Linking.openURL('https://github.com/1Seok2/deployed-react-native-covid')
                        }
                    >
                        GITHUB
                    </Text>
                </View>
            </View>
        </>
    )
}