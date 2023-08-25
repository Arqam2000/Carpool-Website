import { useEffect, useState } from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import user from './Images/Removal-658.png';

const Profile = () => {
    const [path, setPath] = useState('ex')
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/getUsers')
            .then(users => setUsers(users.data))
            .catch(err => console.log(err))
    }, [])



    const navigate = useNavigate()

    if (!path) {
        navigate('/home')
    }
    return (
        <>
            <div className="btn-c">
                <button className="btn"
                    onClick={() => {
                        setPath(null)
                    }}
                >Back to Home</button>
            </div>
            <div className="user">
                {/* {users.map(users =>{
            return (
                <>
                <h1>{users.email}</h1>
                <h1>{users.f_name} {users.l_name}</h1>
                </>
                );
        })} */}
                <div className="profile-header">
                    <div className="img-container">
                        <img src={user} alt="" />
                    </div>
                    <h1>Name Goes Here</h1>
                </div>
                <div className="profile-card">
                    <div className="credentials">
                        <h2>First Name: </h2>
                        <h2>**First Name goes here**</h2>
                    </div>
                    <div className="credentials">
                        <h2>Last Name: </h2>
                        <h2>**Last Name goes here**</h2>
                    </div>
                    <div className="credentials">
                        <h2>E-mail: </h2>
                        <h2>**Email goes here**</h2>
                    </div>
                    <div className="credentials last">
                        <h2>Phone: </h2>
                        <h2>**Phone No. goes here**</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile