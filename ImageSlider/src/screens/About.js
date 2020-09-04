import React, { Component } from 'react'
import { View, TouchableOpacity, Text, BackHandler } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Toolbar } from '../components'
import { navigateTo, redirectTo, navigateBack } from '../helpers'

class About extends Component {

   constructor(props) {
      super(props);
   }

   componentDidMount() {
   }

   componentWillUnmount() {
   }

   goToHome = () => {
      navigateTo("home")
   }

   render() {
      return (
         <View style={{ flex: 1, flexDirection: 'column' }}>
            <Toolbar style={[{ flex: 1 }]}
               title={About.name}></Toolbar>
            <TouchableOpacity style={{ margin: 128 }} onPress={this.goToHome}>
               <Text>This is ABOUT</Text>
            </TouchableOpacity>
         </View>
      )
   }
}

export default About