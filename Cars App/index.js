import 'react-native-gesture-handler'; // react-navigation setup requirement
import {AppRegistry, YellowBox} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state', // Since we do not persist the navigation state we can surpress the warning
]);

AppRegistry.registerComponent(appName, () => App);
