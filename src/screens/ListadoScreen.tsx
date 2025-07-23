import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native';
import { fetchElements, Elemento } from '../services/elementService';

export default function ListadoScreen() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Elemento[]>([]);

  useEffect(() => {
    fetchElements()
      .then(setData)
      .catch((err) => console.error('Error al obtener elementos:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <Image source={{ uri: item.avatar }} style={{ width: 40, height: 40, marginRight: 10 }} />
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}
