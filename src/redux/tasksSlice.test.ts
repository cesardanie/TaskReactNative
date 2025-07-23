import tasksReducer, { addTask, removeTask, Task } from './tasksSlice';

describe('tasksSlice', () => {
  const initialState = { tasks: [] as Task[] };

  it('debería retornar el estado inicial al pasar una acción desconocida', () => {
    const nextState = tasksReducer(undefined, { type: 'unknown' });
    expect(nextState).toEqual(initialState);
  });

  it('addTask: debería añadir una task al estado', () => {
    const description = 'Comprar leche';
    const action = addTask(description);
    const nextState = tasksReducer(initialState, action);

   
    expect(nextState.tasks).toHaveLength(1);
    expect(nextState.tasks[0].description).toBe(description);
    expect(typeof nextState.tasks[0].id).toBe('string');
    expect(nextState.tasks[0].id).not.toHaveLength(0);
  });

  it('removeTask: debería eliminar la task por ID', () => {
    // Prepara un estado con dos tasks
    const stateWithTasks = {
      tasks: [
        { id: '1', description: 'Tarea 1' },
        { id: '2', description: 'Tarea 2' },
      ] as Task[],
    };

    // Elimina la de id '1'
    const nextState = tasksReducer(stateWithTasks, removeTask('1'));

    // Ahora solo debe quedar la de id '2'
    expect(nextState.tasks).toHaveLength(1);
    expect(nextState.tasks[0].id).toBe('2');
    expect(nextState.tasks[0].description).toBe('Tarea 2');
  });
});
