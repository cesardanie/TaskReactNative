import { View, Text, FlatList, Button, Modal, TextInput, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addTask, removeTask } from '../redux/tasksSlice';
import { useState } from 'react';

export default function TasksScreen() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (!newTask.trim()) {
      Alert.alert('Error', 'La descripción no puede estar vacía');
      return;
    }
    dispatch(addTask(newTask));
    setNewTask('');
    setModalVisible(false);
  };

  const handleRemoveTask = (id: string) => {
    dispatch(removeTask(id));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
              backgroundColor: '#f0f0f0',
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text style={{ flex: 1 }}>{item.description}</Text>
            <Button title="❌" color="red" onPress={() => handleRemoveTask(item.id)} />
          </View>
        )}
      />

      <Button title="Agregar nuevo Task" onPress={() => setModalVisible(true)} />

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={{ flex: 1, backgroundColor: '#000000aa', justifyContent: 'center', padding: 20 }}>
          <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 20 }}>
            <Text>Descripción del Task:</Text>
            <TextInput
              value={newTask}
              onChangeText={setNewTask}
              placeholder="Escribe algo..."
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 10 }}
            />
            <Button title="Guardar" onPress={handleAddTask} />
            <View style={{ height: 10 }} />
            <Button title="Cancelar" color="gray" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
