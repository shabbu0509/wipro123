// import - npm modules
import React, { Component } from "react";
import { View, Text, Platform, TouchableOpacity, Image } from "react-native";
import { Icon } from 'react-native-elements'
import NetInfo from "@react-native-community/netinfo";
import { navigateTo, redirectTo, navigateBack } from '../../helpers'
import styles from "./styles";

/**
* Represents BottomBar.
* @class BottomBar
* @extends Component
*/
class ListItem extends Component {

    constructor(props) {
        super(props);
        this.goToDetailsPage = this.goToDetailsPage.bind(this);
    }

    goToDetailsPage = () => {
        NetInfo.fetch().then(state => {
            if (state.isConnected) {
                const item = this.props.itemData;
                navigateTo("detailsScreen", { item });
            }
            else {
                alert("Internet not connected.!!!")
            }
        });
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        return (
            <TouchableOpacity onPress={this.goToDetailsPage} >
                <View style={styles.listItemContainerMainStyle}>
                    <View style={styles.profileImageContainerStyle}>
                        <Image style={[styles.profileImageStyle]} source={
                            this.props.itemData.Poster
                                ? { uri: this.props.itemData.Poster }
                                : require('../../assets/images/profile_placeholder.png')} />
                    </View>
                    <View style={styles.listItemContainerStyle}>
                        <Text style={[styles.dateTextStyle]}>{this.props.itemData.Title}</Text>
                        <Text style={[styles.descTextStyle]}>{this.props.itemData.Year}</Text>
                        {/* <View style={styles.lineStyle} /> */}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default ListItem;
