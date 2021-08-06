import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {InputGroup, Button, FormControl} from "react-bootstrap"
import { BsSearch } from "react-icons/bs";

import Header from '../../components/Header/index';
import Posts from '../../components/Posts/Posts';
import Pagination from '../../components/Pagination/index';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://randomuser.me/api?seed=abc&results=50')
            setPosts(res.data.results);
            setLoading(false);
        }

        fetchPosts();
    }, []);
    
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    //Filter Search
    const filterPost = currentPosts.filter(person => person.name.first.toLocaleUpperCase().includes(search.toLocaleUpperCase())).map(filteredPerson => (filteredPerson))

    return(
        <div>
            <Header/>
            <div className='container mt-5'>
                <InputGroup className="mb-3">
                        <FormControl 
                            onChange={(ev) => setSearch(ev.target.value)}
                            value={search}
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            <BsSearch/>
                        </Button>
                </InputGroup>
                <Posts 
                    posts={filterPost} 
                    loading={loading} 
                    search={search}
                />
                <Pagination 
                    postsPerPage={postsPerPage} 
                    totalPosts={posts.length} 
                    paginate={paginate} 
                />
            </div>
        </div>
    );
};

export default Home;