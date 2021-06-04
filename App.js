import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import { AppTabNavigator } from './components/AppTabNavigator'


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);

/*
In customesidebar, using icon and responsive font value

In Appdrawernavigator, adding icons to menu items

Change the complete styling for settings screen.

In Welcome Screen, change the styling of the signup modal.
Add images to the welcome screen 

In Book Request screen, adding Input in place of TextInput 

Using responsive font value in the screens.

Re-design the receiver details screen
*/
