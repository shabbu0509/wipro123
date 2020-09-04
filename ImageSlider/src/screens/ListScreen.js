import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ScrollView, FlatList } from 'react-native'
import NetInfo from "@react-native-community/netinfo";
import { Actions } from 'react-native-router-flux'
import { connect } from "react-redux";
import { Toolbar, ListItem } from '../components'
import { navigateTo, redirectTo, navigateBack } from '../helpers'
import styles from "../styles/notesStyles";
import { getUserData } from "../actions/teacheraction";
import SearchInput, { createFilter } from 'react-native-search-filter';
import Config from "react-native-config";

let pageNumber = 1;

let lastpageNum = pageNumber;

let changeData = false;

class ListScreen extends Component {

   constructor(props) {
      super(props);
      this.state = {
         searchTerm: '',
         data: null,
      }
   }

   componentDidMount() {
      NetInfo.fetch().then(state => {
         if (state.isConnected) {

         }
         else {
            alert("Internet not connected.!!!")
         }
      });
      this.getResponseData()
   }

   searchUpdated(term) {
      this.callApi(term, 1)
      this.setState({
         searchTerm: term,
      })
   }

   callApi = (text, pageNum) => {
      this.props.handleUserDataRequest(text + "&page=" + pageNum);
   }

   getResponseData = () => {
      const data = this.props.userData;
      if (data != null) {
         changeData = false
         let prevData = this.state.data != null ? this.state.data : []
         data.map((item) => {
            prevData.push({ item });
         });

         this.setState({
            data: prevData,
         })
      }
   }

   componentDidUpdate(prevProps) {
   }


   render() {

      return (
         <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "#FFFFFF" }}>
            <Toolbar style={[{ flex: 1 }]}
               title={"Movies List"}
               showLeftIcon={false} />

            <SearchInput
               onChangeText={(term) => { this.searchUpdated(term) }}
               style={styles.searchInput}
               placeholder="Type a movie name to search"
            />

            {this.props.userData &&
               <View style={[styles.bottomBarContainer]}>
                  <FlatList
                     // onScrollEndDrag={() => this.callApi(this.state.searchTerm, pageNumber + 1)}
                     onScrollBeginDrag={() => console.log(" *******start")}
                     initialNumToRender={10}
                     maxToRenderPerBatch={10}
                     onEndReachedThreshold={0.5}
                     onEndReached={({ distanceFromEnd }) => {

                     }}
                     numColumns={2}
                     style={styles.listStyle}
                     data={this.props.userData}
                     renderItem={({ item }) => (
                        <ListItem
                           itemData={item}
                           fromWhere={"Movies"} />)
                     }
                     keyExtractor={(item, index) => index.toString()}
                  />
               </View>
            }
            {!this.props.userData &&
               <View style={{ width: '100%', flex: 1, justifyContent: "center", alignItems: 'center', alignSelf: 'center', padding: 8 }}>
                  <Text style={styles.noResultFoundTextStyle}>{'No result found'}</Text>
               </View>
            }
         </View>
      )
   }
}
/**
* Converting redux state to props for the Login component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({
   userData: state.teacherreducer.userData,
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
   handleUserDataRequest: (payload) => dispatch(getUserData(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);