

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
class Button extends Component {

    constructor(props) {
        super(props);
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        return (
            <View style={[styles.bottomBarContainer]}>
                <TouchableOpacity onPress={this.props.btnOnClick}>
                    <Text style={[styles.bottomBarTextStyle]}>{this.props.btnText}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Button;
