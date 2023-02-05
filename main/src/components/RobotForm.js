import { useState } from 'react'
import store from '../stores/RobotStore'

function RobotForm() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [mass, setMass] = useState('');

    return (
        <div>
            <p>Robot form</p>
            <form>
                <label>Name:</label><br />
                <input role="textbox" type="textbox" name="name" id="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                <label>Type:</label><br />
                <input role="textbox" type="textbox" name="type" id="type" placeholder="type" value={type} onChange={(e) => setType(e.target.value)} /><br />
                <label>Mass:</label><br />
                <input role="textbox" type="textbox" name="type" id="mass" placeholder="mass" value={mass} onChange={(e) => setMass(e.target.value)} /><br />
                <input type="button" value="add" onClick={() => {
                    store.addRobot({
                        "name": name,
                        "type": type,
                        "mass": mass
                    });
                    setName('');
                    setType('');
                    setMass('');
                }}></input>
            </form>
        </div>
    )
}

export default RobotForm