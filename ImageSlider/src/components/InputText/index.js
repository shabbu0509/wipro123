
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";

import componentstyles from "./styles";

const defaultProps = {
    mapElement: (n) => { },
    onSubmitEditing: () => { },
    value: "",
    placeholder: "",
    maxLength: 200,
    keyboardType: "default",
    secureTextEntry: false,
    returnKeyType: "next",
    label: "Label",
    style: {},
    isPassword: false,
    onIconPress: () => { }
}
/**
* Represents ExpandCollapseView.
* @class ExpandCollapseView
* @extends Component
*/
class InputText extends Component {

    constructor(props) {
        super(props);
        this.mapElement = this.mapElement.bind(this);
    }

    mapElement(node) {
        this.props.mapElement(node);
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        return (
            <View style={[componentstyles.textInputContainer, this.props.style]}>
                <Text style={componentstyles.textInputLabel}>{this.props.label}</Text>
                <TextInput
                    style={componentstyles.textInputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="rgba(51, 51, 51, 0.6)"
                    selectionColor="rgb(51, 51, 51)"
                    returnKeyType={this.props.returnKeyType}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    keyboardType={this.props.keyboardType}
                    maxLength={this.props.maxLength}
                    value={this.props.value}
                    autoCapitalize={this.props.autoCapitalize}
                    onChangeText={this.props.onChangeText}
                    numberOfLines={this.props.numberOfLines | 1}
                    multiline={true} />
                {this.props.isPassword &&
                    <View style={componentstyles.passwordEyeIconCont}>
                        <TouchableOpacity onPress={this.props.onIconPress}>
                            <Icon
                                name="eye-off"
                                type="material-community"
                                color={this.props.secureTextEntry ? 'rgb(128, 128, 128)' : 'rgb(15, 113, 184)'}
                                iconStyle={componentstyles.passwordIconStyle} />
                        </TouchableOpacity>
                    </View>
                }
            </View>
        );
    }
}

InputText.defaultProps = defaultProps;

export default InputText;
