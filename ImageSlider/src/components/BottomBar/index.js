

// import - npm modules
import React, { Component } from "react";
import { View, Text, Platform, TouchableOpacity } from "react-native";
import { deviceHeight, deviceWidth } from '../../constants/CommonUtils'
import { navigateTo, redirectTo, navigateBack } from '../../helpers'
import styles from "./styles";

/**
* Represents BottomBar.
* @class BottomBar
* @extends Component
*/
class BottomBar extends Component {

    constructor(props) {
        super(props);
    }

    goToScannerPage = () => {
        navigateTo("scannerScreen");
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        return (
            <View style={[styles.bottomBarContainer]}>
                <TouchableOpacity onPress={this.goToScannerPage}>
                    <Text style={[styles.bottomBarTextStyle]}>{'Scan'.toUpperCase()}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default BottomBar;
