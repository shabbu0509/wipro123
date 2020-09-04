import {
    StyleSheet,
    Platform,
    Dimensions,
    StatusBar
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { isIOSXandAbove } from '../../constants/CommonUtils'
import { deviceWidth, deviceHeight } from '../../constants/CommonUtils'

const styles = {
    textInputContainer: {
        // height:60,
        // flexDirection:'row',
        paddingHorizontal: 16,
        marginTop: 11
    },
    textPhoneInputContainer: {
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 16,
        // marginTop: 11
    },
    textInputLabel: {
        color: "rgb(15, 113, 184)",
        fontSize: 16
    },
    textPhoneLabel: {
        fontSize: 16,
        color: "rgb(51,51,51)",
        marginTop: 20,
        marginLeft:5
    },

    textInputBox: {
        paddingHorizontal: 0,
        borderBottomWidth: 1,
        borderBottomColor: "rgb(204, 204, 204)",
        paddingBottom: 7,
        // paddingTop: 12,
        fontSize: 16,
        color: "#333",
        opacity: 40,
    },

    textPhoneInputBox: {
        paddingHorizontal: 0,
        // paddingBottom: 6,
         
        fontSize: 16,
        color: "#333",
        opacity: 40,
    },
    dateOverlay: {
        width: "100%",
        height: 70,
        position: "absolute",
        top: 0,
        zIndex: 1
    },
    passwordEyeIconCont: {
        position: "absolute",
        bottom: 6,
        right: 27,
        zIndex: 1
    },
    passwordIconStyle: {
        marginRight: 5
    },
}

export default styles;
