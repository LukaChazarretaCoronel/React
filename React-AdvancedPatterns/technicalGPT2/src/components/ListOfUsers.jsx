// React.memo and useCallback Optimization
// You have a list of users and a component that renders each user. 
// Optimize the component using React.memo to prevent unnecessary re-renders when the user list does not change. 
// Also, use useCallback to optimize a button that fetches new user data when clicked.
import React, { useState, useCallback, useMemo } from "react";

// Componente optimizado con React.memo para evitar re-renderizados innecesarios
const User = React.memo(({ user }) => {
    return (
        <li>
            {user.name} - {user.email}
        </li>
    );
});

export function ListOfUsers() {
    const initialUsers = useMemo(() => [
        { name: 'user1', email: 'user1@gmail.com', id: 1 },
        { name: 'user2', email: 'user2@gmail.com', id: 2 },
    ], []);

    const [users, setUsers] = useState(initialUsers);

    const fetchNewUsers = useCallback(() => {
        // Simulación de una llamada a una API para obtener nuevos usuarios
        const newUsers = [
            { name: 'user3', email: 'user3@gmail.com', id: 3 },
            { name: 'user4', email: 'user4@gmail.com', id: 4 },
        ];
        setUsers(newUsers);
        console.log("Fetching new users...");
    }, []);

    return (
        <>
            <ul>
                {users.map((user) => (
                    <User key={user.id} user={user} />
                ))}
            </ul>
            <button onClick={fetchNewUsers}>Fetch new users</button>
        </>
    );
}

export default ListOfUsers;
