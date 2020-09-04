

// import - npm modules
import React, { Component } from "react";
import { View, Text, Platform, TouchableOpacity } from "react-native";
import DeviceInfo from 'react-native-device-info';
import { Icon } from 'react-native-elements'
import { deviceHeight, deviceWidth } from '../../constants/CommonUtils'
import styles from "./styles";
import { name as appName } from '../../../app.json';
import { navigateTo, redirectTo, navigateBack } from '../../helpers'

const defaultProps = {
    showLeftIcon: true,
    leftIconClick: null
};

/**
* Represents Toolbar.
* @class Toolbar
* @extends Component
*/
class Toolbar extends Component {

    constructor(props) {
        super(props);
    }

    isIOSXandAbove = () => {
        return (Platform.OS === 'ios' && deviceHeight === 896 && deviceWidth === 414) || (Platform.OS === 'ios' && deviceHeight === 812 && deviceWidth === 375);
    }

    onLeftIconClicked = () => {
        navigateBack();
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        const hasNotch = DeviceInfo.hasNotch();
        return (
            <View
                style={[styles.toolbarContainer, {
                    height: hasNotch ? 76 : 56,
                }]}>
                <View style={styles.toolbarIconCont}>
                    <Icon
                        name={this.props.showLeftIcon ? Platform.OS === "ios" ? "chevron-left" : "arrow-left" : null}
                        size={Platform.OS === "ios" ? 30 : 24}
                        color="rgb(51, 51, 51)"
                        type="material-community"
                        onPress={this.props.showLeftIcon ? this.props.leftIconClick != null ? this.props.leftIconClick : this.onLeftIconClicked : null}
                        iconStyle={styles.leftIconContainer} />
                </View>

                <View style={styles.toolbarUtils}>
                    <Text style={styles.appTitle}>{this.props.title != null ? this.props.title : appName}</Text>
                </View>

                {this.props.rightViewText && this.props.rightViewText.length > 0 &&
                    <View style={styles.toolbarRightViewStyle}>
                        <TouchableOpacity onPress={this.props.rightViewOnClick ? this.props.rightViewOnClick : null} >
                            <Text style={styles.rightViewTextStyle}>{this.props.rightViewText}</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View >
        );
    }
}

Toolbar.defaultProps = defaultProps;

export default Toolbar;
