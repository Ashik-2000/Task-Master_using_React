import { FaStar } from 'react-icons/fa';

export default function TaskList({
    tasks,
    handleEditTask,
    handleDeleTask,
    hadleFavClick,
}) {
    return (
        <div className="overflow-auto">
            <table className="table-fixed overflow-auto xl:w-full">
                <thead>
                    <tr>
                        <th className="w-[48px] p-4 pb-8 text-sm font-semibold capitalize"></th>
                        <th className="w-[300px] p-4 pb-8 text-sm font-semibold capitalize">
                            Title
                        </th>
                        <th className="w-full p-4 pb-8 text-sm font-semibold capitalize">
                            Description
                        </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                            Tags
                        </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                            Priority
                        </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                            Options
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr
                            key={task.id}
                            className="border-b border-[#2E3443] [&>td]:px-4 [&>td]:py-2 [&>td]:align-baseline"
                        >
                            <td>
                                <button onClick={() => hadleFavClick(task.id)}>
                                    {task.isFavourite ? (
                                        <FaStar color="yellow" />
                                    ) : (
                                        <FaStar color="gray" />
                                    )}
                                </button>
                            </td>
                            <td className="text-center">{task.title} </td>
                            <td>
                                <div>{task.description}</div>
                            </td>
                            <td>
                                <ul className="flex flex-wrap justify-center gap-1.5">
                                    {task.tags.map((tag) => (
                                        <li key={tag}>
                                            <span className="inline-block h-5 rounded-[45px] bg-[#00D991A1] px-2.5 text-sm whitespace-nowrap text-[#F4F5F6] capitalize">
                                                {tag}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td className="text-center">{task.priority}</td>
                            <td>
                                <div className="flex items-center justify-center space-x-3">
                                    <button
                                        className="text-red-500"
                                        onClick={() => handleDeleTask(task.id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="text-blue-500"
                                        onClick={() => handleEditTask(task)}
                                    >
                                        Edit
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
