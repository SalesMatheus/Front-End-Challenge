import React from "react";

const Posts = ({ posts, loading , search}) => {
    if(loading){
        return <h2> Loading ...</h2>
    }
    
    return(
        <ul className='list-group mb-4'>
            {posts.map(post =>(
                <li key={post.cell} className='list-group-item'>
                    {post.name.first}
                </li>
            ))}
        </ul>
    );
};

export default Posts;