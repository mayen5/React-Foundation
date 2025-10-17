import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import type { User, ReqUserListResponse } from '../interfaces';


const loadUsers = async (page: number = 1): Promise<User[]> => {

    try {
        const { data } = await axios.get<ReqUserListResponse>('https://reqres.in/api/users', {
            params: { page: page },
            headers: { "x-api-key": "reqres-free-v1" }
        });
        return data.data;
    } catch (error) {
        console.error(`Failed to load users for page ${page}:`, error);
        return [];
    }
}

export const useUsers = () => {
    const [ users, setUsers ] = useState<User[]>([]);

    const currentPageRef = useRef(1);

    useEffect(() => {
        loadUsers(currentPageRef.current)
            .then(users => setUsers(users));
    }, []);

    const nextPage = async () => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current);
        if (users.length > 0) {
            setUsers(users);
        } else {
            currentPageRef.current--;
        }
    }

    const prevPage = async () => {
        if (currentPageRef.current <= 1) return;
        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current);
        if (users.length > 0) {
            setUsers(users);
        } else {
            currentPageRef.current++;
        }
    }

    // fetch('https://reqres.in/api/users?page=2',
    //     {
    //         method: 'GET',
    //         headers: { "x-api-key": "reqres-free-v1" }
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // }, [])



    return {
        // Properties
        users,

        // Methods
        nextPage,
        prevPage
    };
}
