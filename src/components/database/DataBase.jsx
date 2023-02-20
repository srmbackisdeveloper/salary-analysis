import React, { useEffect, useState } from 'react';
import {db} from './FireBase';
import {collection, getDocs, setDoc} from 'firebase/firestore';

export default function DataBase() {
    const [users, setUsers] = useState([]);

    const usersCollectionRef = collection(db, 'users');
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            console.log(data);

            setUsers(data.docs.map(doc => (
                {
                    ...doc.data(),
                    id: doc.id
                }
            )))
        }

        getUsers();
    }, []);

    return <div>{users.map(user => {
        return <p>{user.id} {user.name} {user.age} {user.salary} {user.email}</p>
    })}</div>;
}
