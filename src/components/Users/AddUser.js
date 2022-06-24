import { useState } from 'react'
import Card from '../UI/Card'
import './AddUser.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = props => {

    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');

    const addUserName = (e) => {
        setUserName(e.target.value)
    }

    const addAge = (e) => {
        setAge(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault();
        if (userName.trim().length === 0 || age.trim().length === 0) {
            return;
        }
        if (+age < 1) {
            return;
        }

        props.onAddUser(userName, age);

        setUserName('')
        setAge('')
    }

    return (
        <div>
            <ErrorModal title="an error occured" message="something went wrong"/>
            <Card className="input">
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={userName} onChange={addUserName} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={age} onChange={addAge} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;