import React, 
        { useState, 
        useEffect } 
from 'react';
import {InputGroup, 
        FormControl} 
from "react-bootstrap"

import Header from '../../components/Header/index';
import Posts from '../../components/Posts/Posts';
import Pagination from '../../components/Pagination/index';
import api from '../../service/api';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [searchName, setSearchName] = useState('');
    const [searchGender, setSearchGender] = useState('');
    
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await api.get('')
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
    
    // Filter Search
    let filterPost = currentPosts;

    if(searchGender !== ''){
        filterPost = currentPosts.filter(person => person.gender.toLocaleUpperCase() === searchGender.toLocaleUpperCase()
        ).map(filteredPerson => (filteredPerson))
    }else{
        filterPost = currentPosts.filter(person => 
            person.name.first.toLocaleUpperCase().includes(searchName.toLocaleUpperCase()) 
        || person.nat.toLocaleUpperCase().includes(searchName.toLocaleUpperCase())
        ).map(filteredPerson => (filteredPerson))
    }
                                        
    return(
        <div>
            <Header/>
            <div className='container mt-5'>
                <InputGroup className="mb-3">
                        <InputGroup.Text variant="outline-secondary">
                            Name or Nationality
                        </InputGroup.Text>
                        <FormControl 
                            placeholder="Searching ..."
                            onChange={(ev) => setSearchName(ev.target.value)}
                            value={searchName}
                        />
                </InputGroup>
                <InputGroup className="mb-3">
                        <InputGroup.Text variant="outline-secondary">
                            Gender
                        </InputGroup.Text>
                        <FormControl 
                            placeholder="Searching ..."
                            onChange={(ev) => setSearchGender(ev.target.value)}
                            value={searchGender}
                        />
                </InputGroup>
                <Posts 
                    posts={filterPost} 
                    loading={loading} 
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