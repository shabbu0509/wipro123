import React, { Component } from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'
import About from '../screens/About'
import ListScreen from '../screens/ListScreen';
import DetailsScreen from '../screens/DetailsScreen';

export default class Routes extends Component {

    constructor(props) {
        super(props);
    }

    onStateChange = () => {
        //persist.store.dispatch(setCurrentScene("_home"));
    }
    render() {
        //alert(this.props.isLoggedin)
        return (
            <Router onStateChange={this.onStateChange}>
                <Scene key="root">
                    <Scene key="about" component={About} title="About" hideNavBar={true} initial={false} />
                    <Scene key="listScreen" component={ListScreen} title="ListScreen" hideNavBar={true} initial={true} />
                    <Scene key="detailsScreen" component={DetailsScreen} title="DetailsScreen" hideNavBar={true} initial={false} />
                </Scene>
            </Router>
        );
    }
}