import {
    StyleSheet,
    Platform,
    Dimensions,
    StatusBar
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { deviceWidth, deviceHeight } from '../constants/CommonUtils'

const styles = {
    bottomBarContainer: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 30
    },
    dateTextStyle: {
        width: deviceWidth * 0.85,
        fontSize: 18,
        color: "#000000",
        textAlign: "left",
        alignItems: "center",
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10    
    },
    descTextStyle: {
        width: deviceWidth * 0.85,
        fontSize: 14,
        color: "#000000",
        textAlign: "left",
        alignItems: "center",
        marginTop: 3,
        paddingLeft: 10,
        paddingRight: 10
    },
    listStyle: {
        marginTop: 0,
        marginBottom: 100
    },
    scrollsubConatiner: {
        backgroundColor: '#FAFAFA',
    },
    listItemContainerStyle: {
        flex: 1,
        width: deviceWidth * 0.85,
        flexDirection: 'column',
        textAlign: "center",
        alignItems: "center",
    },
    listItemContainerMainStyle: {
        flex: 1,
        width: deviceWidth,
        flexDirection: 'row',
        alignItems: "center",
    },
    lineStyle: {
        width: deviceWidth * 0.90,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
        paddingTop: 2,
        paddingBottom: 2,
    },
    listItemMainContainer: {
        backgroundColor: "#FFFFFF",
        width: deviceWidth,
        flexDirection: "row",
        alignItems: "center",
    },
    rightIconContainer: {
        width: deviceWidth * 0.15,
    },
    rightIconStyle: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: 'center',
    },
    noResultFoundTextStyle: {
        fontSize: 20,
        color: "#000000",
        textAlign: "center",
        alignItems: "center",
    },
    userInfoContainerStyle: {
        width: deviceWidth,
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 30,
    },
    userInfoSubContainerStyle: {
        flexDirection: 'row',
        width: deviceWidth,
    },
    userInfoSubColContainerStyle: {
        flexDirection: 'column',
        width: deviceWidth * 0.33,
    },
    userInfoTextStyle: {
        width: deviceWidth * 0.2,
        fontSize: 14,
        color: "#000000",
        textAlign: "left",
        marginTop: 10,
    },
    userInfoTextSubStyle: {
        width: deviceWidth * 0.8,
        fontSize: 14,
        color: "#000000",
        textAlign: "left",
        marginTop: 10,
        marginRight: 8,
    },
    notesDescContainerStyle: {
        marginTop: 20,
        marginBottom: 10,
    },
    submitBtnContainerStyle: {
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    profileImageStyle: {
        flex: 1,
        width: deviceWidth * 0.9,
        height: deviceHeight * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    searchInput: {
        width: deviceWidth * 0.9,
        margin: 10,
        borderColor: '#CCC',
        borderWidth: 1
    },
    lineStyle: {
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
        margin: 4,
    },
}

export default styles;
