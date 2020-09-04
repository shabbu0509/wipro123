import {
    StyleSheet,
    Platform,
    Dimensions,
    StatusBar,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { deviceWidth, deviceHeight } from '../../constants/CommonUtils'

const styles = {
    toolbarContainer: {
        backgroundColor: "#ffffff",
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    toolbarIconCont: {
        position: Platform.OS === "ios" ? "absolute" : "relative",
        left: 0,
        zIndex: 1
    },
    leftIconContainer: {
        justifyContent: "space-around",
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: DeviceInfo.hasNotch() ? 46 : Platform.OS === 'ios' ? 26 : 16,
        paddingBottom: 16,
    },
    toolbarUtils: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        paddingRight: 8,
        justifyContent: Platform.OS === "ios" ? "center" : "flex-start"
        //justifyContent: "center",
    },
    toolbarRightViewStyle: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        paddingRight: 8,
        justifyContent: "flex-end"
        //justifyContent: "center",
    },
    appTitle: {
        fontSize: 18,
        color: "rgb(51, 51, 51)",
        textAlign: Platform.OS === "ios" ? "center" : "left",
        paddingTop: DeviceInfo.hasNotch() ? 30 : Platform.OS === 'ios' ? 10 : 0,
        //textAlign: "center",
    },

    rightViewTextStyle: {
        fontSize: 16,
        color: "rgb(51, 51, 51)",
        textAlign: Platform.OS === "ios" ? "center" : "left",
        paddingTop: DeviceInfo.hasNotch() ? 30 : Platform.OS === 'ios' ? 10 : 0,
        //textAlign: "center",
    },
}

export default styles;
