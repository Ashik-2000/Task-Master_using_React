import { useState } from 'react';
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
    return (
        <section className="mb-20" id="tasks">
            <div className="container">
                <div className="flex justify-end p-2">
                    <SearchTask />
                </div>
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#0A192C] px-6 py-8 md:px-9 md:py-16">
                    <TaskActions />
                    <TaskList tasks={tasks} />
                </div>
            </div>
        </section>
    );
}
