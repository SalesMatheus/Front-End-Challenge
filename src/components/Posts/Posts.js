import React from "react";
import {Table, 
        Spinner, 
        Button, 
        Modal} 
from "react-bootstrap";

import "./styles.css";

const Posts = ({ posts, loading}) => {
    
    const [modalShow, setModalShow] = React.useState(false);
    const [detail, setDetail] = React.useState('');

    if(loading){
        return <Spinner animation="border" variant="info" />
    }
    
    return(

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Birth</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {posts.map(post =>(
                    <tr key={post.cell}>
                        <td>
                            {post.name.first}
                        </td>
                        <td>
                            {post.gender}
                        </td>
                        <td>
                            {post.dob.date}
                        </td>
                        <td>
                            <Button variant="info" active onClick={() => setModalShow(true) + setDetail(post)}>Details</Button>
                            <MyVerticallyCenteredModal
                                detail={detail}
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};


function MyVerticallyCenteredModal(props) {
    
    return (
        <Modal
            {...props}
            centered
        >
            <header className="header">
                <img className="img" alt="profile" src={props.detail.picture?.large} />
            </header>
            <h1 className="bold-text">
                {props.detail.name?.title + '. ' + props.detail.name?.first + ' ' + props.detail.name?.last} <span className="normal-text">{props.detail.dob?.age}</span>
            </h1>
            <h2 className="normal-text">{props.detail.location?.street.name}</h2>
            <div className="social-container">
                <div className="first">
                    <h1 className="bold-text">Nationality:</h1>
                    <h2 className="smaller-text">{props.detail?.nat}</h2>
                    <h1 className="bold-text">Phone:</h1>
                    <h2 className="smaller-text">{props.detail?.phone}</h2>
                </div>
                <div className="middle">
                    <h1 className="bold-text">Birth:</h1>
                    <h2 className="smaller-text">{props.detail.dob?.date}</h2>
                    <h1 className="bold-text">E-mail:</h1>
                    <h2 className="smaller-text">{props.detail?.email}</h2>
                </div>
                <div className="last">
                    <h1 className="bold-text">Gender</h1>
                    <h2 className="smaller-text">{props.detail?.gender}</h2>
                    <h1 className="bold-text">ID:</h1>
                    <h2 className="smaller-text">{props.detail.id?.value}</h2>
                </div>
            </div>
      </Modal>
    );
}

export default Posts;