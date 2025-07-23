import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native';
import axios from 'axios';

interface Elemento {
  id: string;
  name: string;
  avatar: string;
}

export default function ListadoScreen() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Elemento[]>([]);

  useEffect(() => {
    axios
      .get('https://6172cfe5110a740017222e2b.mockapi.io/elements')
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
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
