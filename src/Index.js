import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
// import { Extrapolate } from 'react-native-reanimated';
const {Value} = Animated;
const {width,height} = Dimensions.get('window');
const height122 = height-(height/3);
const Opacity = new Value(1);

const Index = () =>{
    // const [Opacity, setOpacity] = useState(1);
    const Operation = () => {
        Animated.timing(Opacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
        const buttonY = Opacity.interpolate({
            inputRange: [0,1],
            outputRange: [100, 0],
            extrapolate: Extrapolate.CLAMP
        });
        const bgY = Opacity.interpolate({
            inputRange: [0,1],
            outputRange: [-height /3, 0],
            extrapolate: Extrapolate.CLAMP
        });
    };
    return(
        <View style = {styles.container}>
            <Animated.View style= {{...StyleSheet.absoluteFill, transform: [{translateY : bgY}]}}>
                <Image
                source= {require('../assets/abstract.jpg')}
                style= {styles.img}
                />
            </Animated.View>
            <View style={styles.circle_wrapper}>
                <View style= {styles.circle}>
                    <Image 
                     source= {require('../assets/Free_Sample_By_Wix.jpg')}
                     style ={{...styles.img, borderRadius: 50}}
                     />
                </View>
            </View>
            <View style = {styles.btn_wrapper}>
                <TouchableWithoutFeedback onPress={() => Operation()}>
                    <Animated.View style= {{...styles.button, opacity : Opacity, transform:[{translateY: buttonY}]}}>
                        <Text>SIGN-UP</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style= {styles.button}>
                        <Text>LOGIN</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "flex-end",
    },
    img: {
        flex: 1,
        height: null,
        width: null,
    },
    btn_wrapper: {
        height: height/3,
    },
    button: {
        height: 70,
        marginHorizontal: 30,
        marginVertical: 20,
        backgroundColor: "white",
        justifyContent:"center",
        alignItems: "center",
        borderRadius: 40,
    },
    social_wrapper: {
        height: 60,
        marginHorizontal: 30,
        backgroundColor: "white",
        flexDirection: "column",

    },
    social: {
        flex: 1,
        height: null,
        width: 70,
        backgroundColor: "red"

    },
    circle_wrapper:{
        height: height122,
        justifyContent: "center",
        alignItems: "center"
    },
    circle:{
        backgroundColor: "white",
        height: 150,
        width: 150,
        borderRadius: 50,
        backgroundColor: "red"
    },
});

export default Index;