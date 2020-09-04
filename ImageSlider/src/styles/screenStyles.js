import { StyleSheet, Platform, Dimensions } from 'react-native';
import { deviceWidth, deviceHeight } from '../constants/CommonUtils'

const styles = StyleSheet.create({

    appContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#ffffff",
    },
    errorTextColor: {
        color: 'red',
        paddingHorizontal: 16,
        fontSize: 12
    },
    inputTextChildView: {
        width: deviceWidth - 40,
        marginRight: 22,
        marginLeft: 22,
        borderRadius: 60,
        height: 56,
        justifyContent: "center",
    },
    loginButtonChildView: {
        width: deviceWidth - 40,
        marginRight: 22,
        marginLeft: 22,
        marginTop: 22,
        borderRadius: 60,
        height: 56,
        justifyContent: "center",
        backgroundColor: "rgb(15, 113, 184)"
    },
    loginButtonText: {
        color: "#ffffff",
        fontSize: 22,
        letterSpacing: 0.94,
        textAlign: "center"
    },
    registerHaveAccountStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginBottom: 10
    },
    registerAccount: {
        fontSize: 15,
        color: "rgb(51,51,51)",
    },
    loginLink: {
        color: "rgb(15, 113, 184)",
        fontSize: 15,
        marginLeft: -1
    },
    loginLogoContainerStyle: {
        flex:1,
        width:'100%',
        flexDirection:'column',
        justifyContent:'center',
        marginTop: 20,
        marginBottom: 20
    },
    loginLogoStyle: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    loginEmailPassWordContainerStyle: {
        flex:1,
        flexDirection:'column',
        marginTop: 20,
        marginBottom: 20
    },
});

export default styles;
