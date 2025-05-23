import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../asyncActions/tasksSlice';

const TasksList = () => {
    const dispatch = useDispatch();
    const { tasks, loading, error } = useSelector((state) => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    return (
        <div>
            <h2>Список задач</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{listStyle: 'none'}}>
                        {task.title} - {task.completed ? 'Выполнено' : 'Не выполнено'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TasksList;