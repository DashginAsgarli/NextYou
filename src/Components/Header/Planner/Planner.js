import { useState } from 'react';
import "./planner.css"
import Goal from '../../Main/Goal';
function Planner() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    // task elave etme
    function addTask() {
        if (input.trim()) {
            setTasks([...tasks, {
                id: tasks.length + 1,
                text: input.trim()
            }]);
            setInput('');
        }
    };
    // task silme
    function deleteTask(id) { setTasks(tasks.filter(task => task.id !== id)) };

    // enter ile elave etme
    function enterBtn(e) {
        if (e.key === 'Enter') addTask();
    };

    return (
        <div className="planner-all-container">
            <Goal/>
            <div className="planner-container">
                <h1>Planlayıcı</h1>
                <div className="planner-tasks">
                    {tasks.length === 0 ? (
                        <div className="planner-empty">
                            <p>📝 Heç bir task yoxdur</p>
                        </div>
                    ) : (
                        tasks.map((task, index) => (
                            <div key={task.id} className="planner-item">
                                <p className="planner-number">{index + 1}.</p>
                                <p className="planner-text">{task.text}</p>
                                <i className="planner-delete bi bi-x-circle" onClick={() => deleteTask(task.id)} />
                            </div>
                        ))
                    )}
                </div>
                <div className="planner-input-container">
                    <input
                        type="text"
                        className="planner-input"
                        placeholder="Bu günki planiniz qeyd edin..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={enterBtn}
                    />
                    <i className="planner-clear bi bi-x-circle" onClick={() => setInput('')} />
                </div>
                <div className="planner-add-btn" onClick={addTask}>Əlavə et</div>
            </div>
        </div>
    );
}

export default Planner;