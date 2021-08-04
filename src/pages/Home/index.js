import React, { Component } from "react";
import Head from "../../components/head";
import api from "../../services/api";


class Home extends Component{

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
            <div >
                <Head/>
                <div className='container mt-5'>
                    <h1 className="text-primary mb-3">Listar usuário:</h1>
                    <ul className='list-group mb-4'>
                        {users.map(user=>(
                            <li key={user.id.value} className='list-group-item'>
                                {user.name.first}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };
};

export default Home;