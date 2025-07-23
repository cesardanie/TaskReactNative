import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../task-list-challenge/src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
