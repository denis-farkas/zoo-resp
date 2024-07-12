import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BackUser = () => {
    const [users, setUsers] = useState(null);
    console.log(users);
    useEffect(() => {
       

        const API_URL = "http://localhost:3000";

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${API_URL}/api/readUsers`,
            headers: {
                "Content-Type": "application/json",
            },
           
        };

        axios
            .request(config)
            .then((response) => {
                setUsers(response.data.users);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="main">
            <table className="table">
                <thead>
                    <tr>
                        <th style={{ width: "5%" }} aria-label="Identifiant de l'utilisateur">Id</th>                       
                        <th style={{ width: "15%" }} aria-label="Nom de l'utilisateur">Nom</th>
                        <th style={{ width: "15%" }} aria-label="Email de l'utilisateur">Email</th>                        
                        <th style={{ width: "25%" }} aria-label="Actions">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.map((user) => (
                            <tr key={user.user_id}>
                                <td>{user.user_id}</td>
                                <td>{user.name}</td>                             
                                <td>{user.email}</td>
                                
                                <td >
                                    <Link to={`/editUser/${user.user_id}`} className="submitButton" aria-label="Editer les utilisateurs">
                                        Editer
                                    </Link>
                                </td>
                            </tr>
                        ))}

                    {users && !users.length && (
                        <tr>
                            <td>
                                <p>Pas de membres à afficher</p>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table >
        </div>
    );
};

export default BackUser;