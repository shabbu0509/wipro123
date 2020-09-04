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
    bottomBarContainer: {
        backgroundColor: "rgb(15, 113, 184)",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        height: 56,
        borderWidth: 1,
        borderColor: '#D3D3D3',
    },
    bottomBarTextStyle: {
        width: deviceWidth,
        fontSize: 18,
        color: "#FFFFFF",
        textAlign: "center",
        alignItems: "center",
    },
}

export default styles;
