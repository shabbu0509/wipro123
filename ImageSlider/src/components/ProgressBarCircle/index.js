

// import - npm modules
import { ActivityIndicator, Modal, Text, StatusBar, View, Image } from "react-native";
import { connect } from "react-redux";
import React, { Component } from "react";

/**
* @import componentstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "componentStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import componentstyles from "./styles";

class ProgressBarCircle extends Component {

    render() {
        if (this.props.progress) {
            return (
                <View style={componentstyles.modalContainer}>
                    <View style={componentstyles.modalDesign}>
                        <View style={componentstyles.modalCont}>
                            <ActivityIndicator size="large" color="rgb(15, 113, 184)" />
                        </View>
                    </View>
                </View>
            );
        }
        return (
            <View></View>
        );
    }
}

const mapStateToProps = state => ({
    progress: state.commonReducer.progress
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBarCircle);
