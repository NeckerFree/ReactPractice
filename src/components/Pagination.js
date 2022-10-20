
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Pagination = () => {
    const recordsPerPage = 10;
    const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const getData = () => {
        fetch(urlPosts)
            .then(response => response.json())
            .then(data => setPosts(data));
        setTotalPages(Math.ceil(posts.length / recordsPerPage));
    }
    const changePage = (newPage) => {
        setCurrentPage(newPage);
    }
    useEffect(() => {
        getData();
    }, []);
    const startIndex = (currentPage * recordsPerPage) - recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);
    return (
        <div className="exercise">
            <h4>Exercise 3</h4>
            <p className="description">Call API https://jsonplaceholder.typicode.com/posts to show paginated data (10 records per page), include buttons to go to previous and next page</p>
            <Link to="/">back</Link>
            <div className="table-responsive">
                <div className="page-buttons">
                    <button disabled={currentPage <= 1 ? true : false} onClick={() => changePage(currentPage - 1)}>Previous page</button>
                    <button disabled={currentPage === totalPages ? true: false} onClick={() => changePage(currentPage + 1)}>Next page</button>
                </div>
                {currentPosts && currentPosts.length > 0
                    ?
                    <table>
                        <thead>
                            <tr><th>id</th><th>userId</th><th>title</th><th>body</th></tr>
                        </thead>
                        <tbody>
                            {currentPosts.map(post => {
                                return (
                                    <tr key={post.id}>
                                        <td className="cell-number">{post.id}</td>
                                        <td className="cell-number">{post.userId}</td>
                                        <td className="cell-text">{post.title}</td>
                                        <td className="cell-text">{post.body}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    : <p>Posts not found</p>
                }
            </div>
        </div>
    )
}

export default Pagination;
