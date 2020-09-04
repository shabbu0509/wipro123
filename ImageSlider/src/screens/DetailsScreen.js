import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ScrollView, Image } from 'react-native'
import NetInfo from "@react-native-community/netinfo";
import { Actions } from 'react-native-router-flux'
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import { Toolbar, InputText } from '../components'
import { navigateTo, redirectTo, navigateBack } from '../helpers'
import notesStyles from '../styles/notesStyles'
import { getUserDetailsData } from "../actions/teacheraction";

class DetailsScreen extends Component {

   constructor(props) {
      super(props);
   }

   componentDidMount() {
      this.props.handleUserDetailsDataRequest(this.props.item.imdbID);
   }

   splitScannedText = () => {

      const splittedData = {
         "login": this.props.item.login,
      };
      return splittedData;
   }

   goToHome = () => {
      navigateTo("home")
   }

   render() {
      return (
         <View style={{ flex: 1, flexDirection: 'column' }}>
            <Toolbar style={[{ flex: 1 }]}
               title={"Movie Details"}
               showLeftIcon={true}></Toolbar>

            <ScrollView style={[notesStyles.scrollsubConatiner]}>

               <View style={notesStyles.userInfoContainerStyle}>

                  <Image style={[notesStyles.profileImageStyle]}
                     source={this.props.userDetailsData.Poster
                        ? { uri: this.props.userDetailsData.Poster }
                        : require('../assets/images/profile_placeholder.png')} />

                  <View style={notesStyles.userInfoSubContainerStyle}>
                     <Text style={[notesStyles.userInfoTextStyle]}>{"Name "}</Text>
                     <Text style={[notesStyles.userInfoTextSubStyle]}>{": " + this.props.userDetailsData.Title}</Text>
                  </View>

                  <View style={notesStyles.userInfoSubContainerStyle}>
                     <Text style={[notesStyles.userInfoTextStyle]}>{"Year "}</Text>
                     <Text style={[notesStyles.userInfoTextSubStyle]}>{": " + this.props.userDetailsData.Year}</Text>
                  </View>

                  <View style={notesStyles.lineStyle} />

                  <View style={notesStyles.userInfoSubContainerStyle}>
                     <Text style={[notesStyles.userInfoTextStyle]}>{"Categories "}</Text>
                     <Text style={[notesStyles.userInfoTextSubStyle]}>{": " + this.props.userDetailsData.Runtime}</Text>
                  </View>

                  <View style={notesStyles.userInfoSubContainerStyle}>
                     <Text style={[notesStyles.userInfoTextStyle]}>{"Synopsis "}</Text>
                     <Text style={[notesStyles.userInfoTextSubStyle]}>{": " + this.props.userDetailsData.Plot}</Text>
                  </View>

                  <View style={notesStyles.userInfoSubContainerStyle}>
                     <View style={notesStyles.userInfoSubColContainerStyle}>
                        <Text style={[notesStyles.userInfoTextStyle]}>{"Score "}</Text>
                        <Text style={[notesStyles.userInfoTextSubStyle]}>{this.props.userDetailsData.imdbRating}</Text>
                     </View>

                     <View style={notesStyles.userInfoSubColContainerStyle}>
                        <Text style={[notesStyles.userInfoTextStyle]}>{"Reviews "}</Text>
                        <Text style={[notesStyles.userInfoTextSubStyle]}>{this.props.userDetailsData.imdbVotes}</Text>
                     </View>

                     <View style={notesStyles.userInfoSubColContainerStyle}>
                        <Text style={[notesStyles.userInfoTextStyle]}>{"Popularity "}</Text>
                        <Text style={[notesStyles.userInfoTextSubStyle]}>{this.props.userDetailsData.Metascore}</Text>
                     </View>
                  </View>

                  <View style={notesStyles.lineStyle} />

                  <View style={notesStyles.userInfoSubContainerStyle}>
                     <Text style={[notesStyles.userInfoTextStyle]}>{"Director "}</Text>
                     <Text style={[notesStyles.userInfoTextSubStyle]}>{": " + this.props.userDetailsData.Director}</Text>
                  </View>

                  <View style={notesStyles.userInfoSubContainerStyle}>
                     <Text style={[notesStyles.userInfoTextStyle]}>{"Writer "}</Text>
                     <Text style={[notesStyles.userInfoTextSubStyle]}>{": " + this.props.userDetailsData.Writer}</Text>
                  </View>

                  <View style={notesStyles.userInfoSubContainerStyle}>
                     <Text style={[notesStyles.userInfoTextStyle]}>{"Actors "}</Text>
                     <Text style={[notesStyles.userInfoTextSubStyle]}>{": " + this.props.userDetailsData.Actors}</Text>
                  </View>

                  {!this.props.userDetailsData &&
                     <View style={{ width: '100%', flex: 1, justifyContent: "center", alignItems: 'center', alignSelf: 'center', padding: 16 }}>
                        <Text style={notesStyles.noResultFoundTextStyle}>{'No Details found for User'}</Text>
                     </View>
                  }
               </View>
            </ScrollView>
         </View>
      )
   }
}

/**
* @function validate: Its called before form submit. Its validates the form value and returns an error object.
* if it finds any error, it stops the form submission and throws it.
* @params {object} values: It takes form vulues as object.
* Validator library is used for email validation instead of regex.
* @return {object} errors: It returns errors object. If no properties in the errors then it calls the onSubmit method
*/
const validate = (values) => {
   const errors = {};
   if (!values.notesDesc) {
      errors.notesDesc = "Notes Description cannot be empty";
   }
   return errors;
};

/**
* Converting redux state to props for the Login component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({
   userDetailsData: state.teacherreducer.userDetailsData
});

/**
* Converting functions to props for the Login component
* @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
* with given payloads.
* The methods are converted into props and passed to the Login Component for use
* @params {function} dispatch: It dispatches action to the reducer
* @returns {object} props: Its converted props and have methods.
*/
const mapDispatchToProps = dispatch => ({
   handleUserDetailsDataRequest: (payload) => dispatch(getUserDetailsData(payload))
});

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   reduxForm({
      form: "DetailsScreen",
      validate
   })
)(DetailsScreen);