import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';

const {width,height} = Dimensions.get('window');
const Login: () => React$Native = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={{...StyleSheet.absoluteFill}}>
                <Image
                 source= {require('../assets/abstract.jpg')}
                 style= {styles.img}
                />
            </View>
            <View style={styles.login}>
                <TouchableOpacity onPress={()=> {navigation.navigate('Signup')}}>
                    <View>
                        <Text style={{fontSize:20}}>Signup?</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style= {styles.banner}>
                <View style={styles.out_inp}>
                    <TextInput placeholder='E-mail' style={styles.inp}/>
                </View>
                <View style={styles.out_inp}>
                    <TextInput placeholder='Password' style={styles.inp}/>
                </View>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity>
                    <View style={{...styles.btn, backgroundColor: "white"}}>
                        <Text style= {{fontSize: 20, fontWeight: 'bold'}}>LOGIN</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{...styles.btn, backgroundColor:"#1aa260"}}>
                        <Text>Login with Google</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{...styles.btn, backgroundColor:"#3b5998"}}>
                        <Text>Login with Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
    },
    login: {
        alignItems: "flex-end",
        marginVertical: 60,
        marginHorizontal:50,
    },
    img: {
        flex: 1,
        height: null,
        width: null,
    },
    banner: {
        height: 300,
        marginVertical:40,
        marginHorizontal: 40,
        // backgroundColor :"red",
        borderRadius:30,
        justifyContent: "center"
    },
    buttons: {
        height: height/3,
        // backgroundColor:"white",
        // marginVertical: 10,
    },
    out_inp: {
        height:60,
        borderRadius: 40,
        marginVertical: 10,
        backgroundColor: '#0FEEEE',
    },
    inp: {
        flex:1,
        marginHorizontal: 20,
    },
    btn: {
        height: 70,
        marginHorizontal :60,
        marginVertical: 10,
        borderRadius: 40,
        alignItems:"center",
        justifyContent: "center"
        
    },
});

export default Login;