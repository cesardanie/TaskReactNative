import {
  View,
  Text,
  FlatList,
  Modal,
  TextInput,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addTask, removeTask, startLoading, finishLoading } from '../redux/tasksSlice';
import { useEffect, useState } from 'react';
import { styles } from '../styles/TasksScreen.styles';

export default function TasksScreen() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const isLoading = useSelector((state: RootState) => state.tasks.isLoading);
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      dispatch(startLoading());
      await new Promise((resolve) => setTimeout(resolve, 1500));
      dispatch(finishLoading());
    };

    fetchTasks();
  }, [dispatch]);

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

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Cargando tareas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.description}</Text>
            <TouchableOpacity onPress={() => handleRemoveTask(item.id)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>＋ Nueva Tarea</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Nueva Tarea</Text>
            <TextInput
              value={newTask}
              onChangeText={setNewTask}
              placeholder="Escribe algo..."
              style={styles.input}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleAddTask}>
              <Text style={styles.saveButtonText}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
