import { useState } from 'react'
import Card from '../UI/Card'
import './AddUser.css'
import Button from '../UI/Button'

const AddUser = props => {

    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');

    const addUserName = (e) => {
        setUserName(e.target.value)
    }

    const addAge = (e) => {
        setAge(e.target.value)
    }

    const addUserHandler = e => {
        e.preventDefault();
        const user = {
            username: userName,
            age
        }
        console.log(user);
        setUserName('')
        setAge('')
    }

    return (
        <Card className="input">
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={userName} onChange={addUserName} />
                <label htmlFor="age">Age</label>
                <input id="age" type="number" value={age} onChange={addAge} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;