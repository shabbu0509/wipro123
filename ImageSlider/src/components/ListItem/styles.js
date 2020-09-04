import { deviceWidth, deviceHeight } from '../../constants/CommonUtils'

const styles = {
    bottomBarContainer: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 74
    },
    dateTextStyle: {
        width: deviceWidth * 0.45,
        fontSize: 16,
        color: "#000000",
        textAlign: "left",
        alignItems: "center",
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    descTextStyle: {
        width: deviceWidth * 0.45,
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
        marginBottom: 50
    },
    scrollsubConatiner: {
        backgroundColor: '#FAFAFA',
    },
    listItemContainerStyle: {
        width: deviceWidth * 0.48,
        flexDirection: 'column',
        textAlign: "center",
        alignItems: "center",
    },
    listItemContainerMainStyle: {
        flex: 1,
        width: deviceWidth * 0.48,
        flexDirection: 'column',
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10
    },
    lineStyle: {
        width: deviceWidth * 0.48,
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
    profileImageContainerStyle: {
        width: deviceWidth * 0.48,
        height: 200,
        alignItems: "center",
    },
    profileImageStyle: {
        width: deviceWidth * 0.47,
        height: 200,
        marginTop: 10,
        marginBottom: 10,
    },
}

export default styles;
