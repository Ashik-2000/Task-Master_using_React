import { useState } from 'react';
import AddTaskModal from './AddTaskModal';
import NoTaskFound from './NoTaskFound';
import SearchTask from './SearchTask';
import TaskActions from './TaskActions';
import TaskList from './TaskList';

export default function TastBoard() {
    const [tasks, setTasks] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingTask, setEditingTask] = useState(null);

    const handleAddEditTask = (newTask, isAdd) => {
        if (isAdd) {
            setTasks([...tasks, newTask]);
        } else {
            setTasks(
                tasks.map((task) => {
                    if (task.id === newTask.id) {
                        return newTask;
                    }
                    return task;
                })
            );
        }
        setShowAddModal(false);
    };

    const handleEditTask = (task) => {
        setEditingTask(task);
        setShowAddModal(true);
    };

    const handleClose = () => {
        setEditingTask(null);
        setShowAddModal(false);
    };

    const handleDeleTask = (taskId) => {
        const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
        setTasks(tasksAfterDelete);
    };

    const hadleDeleteAllTask = () => {
        setTasks([]);
    };

    const hadleFavClick = (taskId) => {
        // const newTask = tasks.map((task) => {
        //     if (task.id === taskId) {
        //         task.isFavourite = !task.isFavourite;
        //         return task;
        //     }
        //     return task;
        // });

        // --- alternate method if don't wanna use map() ---
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        const newTask = [...tasks];
        newTask[taskIndex].isFavourite = !newTask[taskIndex].isFavourite;

        setTasks(newTask);
    };

    const handleSearch = (searchTerm) => {
        const filteredTask = tasks.filter((task) =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setTasks(filteredTask);
    };

    return (
        <section className="mb-20" id="tasks">
            {showAddModal && (
                <AddTaskModal
                    handleAddEditTask={handleAddEditTask}
                    editingTask={editingTask}
                    handleClose={handleClose}
                />
            )}
            <div className="container">
                <div className="flex justify-end p-2">
                    <SearchTask handleSearch={handleSearch} />
                </div>
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#0A192C] px-6 py-8 md:px-9 md:py-16">
                    <TaskActions
                        onAddClick={() => setShowAddModal(true)}
                        hadleDeleteAllTask={hadleDeleteAllTask}
                    />
                    {tasks.length > 0 ? (
                        <TaskList
                            tasks={tasks}
                            handleEditTask={handleEditTask}
                            handleDeleTask={handleDeleTask}
                            hadleFavClick={hadleFavClick}
                        />
                    ) : (
                        <NoTaskFound />
                    )}
                </div>
            </div>
        </section>
    );
}
