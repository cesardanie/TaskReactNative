import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { buttonStyles } from '../styles/buttonStyles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#F7F7F7' }}>
      <TouchableOpacity
        style={[buttonStyles.button, buttonStyles.primaryButton]}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Tasks')}
      >
        <Text style={buttonStyles.buttonText}>Ir a Tasks</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[buttonStyles.button, buttonStyles.secondaryButton]}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Listado')}
      >
        <Text style={buttonStyles.buttonText}>Ir a Listado</Text>
      </TouchableOpacity>
    </View>
  );
}
