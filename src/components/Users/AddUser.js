import { useState } from 'react'
import Card from '../UI/Card'
import './AddUser.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = props => {

    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserName = (e) => {
        setUserName(e.target.value)
    }

    const addAge = (e) => {
        setAge(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault();
        if (userName.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid name and age'
            })
            return;
        }
        if (+age < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter valid age > 0'
            })
            return;
        }

        props.onAddUser(userName, age);

        setUserName('')
        setAge('')
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} closeModal={errorHandler}/>}
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