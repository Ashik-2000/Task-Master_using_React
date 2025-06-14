import { useState } from 'react';
import AddTaskModal from './AddTaskModal';
import SearchTask from './SearchTask';
import TaskActions from './TaskActions';
import TaskList from './TaskList';

export default function TastBoard() {
    const defaultData = {
        id: crypto.randomUUID(),
        title: 'Integration API',
        description:
            'Connect an existing API into a third-party database using secure methods and handle data exchange efficiently',
        tags: ['web', 'python', 'API'],
        priority: 'High',
        isFavourite: true,
    };
    const [tasks, setTasks] = useState([defaultData]);
    const [showAddModal, setShowAddModal] = useState(false);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
        setShowAddModal(!showAddModal);
    };

    return (
        <section className="mb-20" id="tasks">
            {showAddModal && <AddTaskModal onSave={handleAddTask} />}
            <div className="container">
                <div className="flex justify-end p-2">
                    <SearchTask />
                </div>
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#0A192C] px-6 py-8 md:px-9 md:py-16">
                    <TaskActions onAddClick={() => setShowAddModal(true)} />
                    <TaskList tasks={tasks} />
                </div>
            </div>
        </section>
    );
}
