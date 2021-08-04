import React, { Component } from "react";
import api from "../../services/api";


class Login extends Component{

    state = {
        users: [],
    }

    async componentDidMount(){
        const response = await api.get('/?results=50')
        console.log(response.data.results);
        this.setState({ users: response.data.results});
        
    }

    render(){

        const { users } = this.state;

        return(
            <div>
                <h1>Listar usuário:</h1>

                {users.map(user=>(
                    <li key={user.id.value}>
                        <h2>
                            Titulo: {user.name.first}
                        </h2>
                    </li>
                ))}
            </div>
        );
    };
};

export default Login;