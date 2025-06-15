
import React, { useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Plus, Trash2, Check, Filter } from 'lucide-react';
import Button from './Button';
import Card from './Card';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

type FilterType = 'all' | 'active' | 'completed';

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date()
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
      default:
        return true;
    }
  });

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Task Manager</h1>
        <p className="text-gray-600 dark:text-gray-300">Organize your tasks efficiently</p>
      </div>

      <Card className="p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
          />
          <Button onClick={addTask} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Task
          </Button>
        </div>
      </Card>

      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('all')}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          All ({tasks.length})
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('active')}
        >
          Active ({tasks.filter(t => !t.completed).length})
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('completed')}
        >
          Completed ({tasks.filter(t => t.completed).length})
        </Button>
      </div>

      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              {filter === 'all' ? 'No tasks yet. Add one above!' : 
               filter === 'active' ? 'No active tasks!' : 'No completed tasks!'}
            </p>
          </Card>
        ) : (
          filteredTasks.map((task, index) => (
            <Card 
              key={task.id} 
              hover 
              className={`p-4 animate-fade-in ${task.completed ? 'opacity-75' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      task.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 dark:border-gray-600 hover:border-green-500'
                    }`}
                  >
                    {task.completed && <Check className="h-3 w-3" />}
                  </button>
                  <span
                    className={`flex-1 transition-all duration-200 ${
                      task.completed
                        ? 'line-through text-gray-500 dark:text-gray-400'
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteTask(task.id)}
                  className="p-2"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskManager;
