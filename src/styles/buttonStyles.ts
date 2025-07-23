import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
    // Sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // Elevación Android
    elevation: 3,
  },
  primaryButton: {
    backgroundColor: '#4F46E5', // Indigo-600
  },
  secondaryButton: {
    backgroundColor: '#10B981', // Emerald-500
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
