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
    modalContainer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100%",
        zIndex: 1
    },
    modalDesign: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalCont: {
        width: 90,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
}

export default styles;
