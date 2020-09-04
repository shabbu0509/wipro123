
import { Text, View, TouchableNativeFeedback, Image, Platform, Dimensions } from "react-native";

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

export const isIOSXandAbove = () => {
    return (Platform.OS === 'ios' && deviceHeight === 896 && deviceWidth === 414) || (Platform.OS === 'ios' && deviceHeight === 812 && deviceWidth === 375);
}