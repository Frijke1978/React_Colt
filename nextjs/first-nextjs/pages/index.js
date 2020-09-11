import React, { Component } from "react";
import Link from "next/link";
import axios from "axios";

const Index = ({posts}) => {

    return (
        <div>
            <h1>Our index page!!</h1>
            <ul>{posts.map(post => (
                <li key={post.id}>
                <Link href={`/post?id=${post.id}`}><a>{post.title}</a></Link>
                </li>
            ))}    
            </ul>
        </div>
    );
};
Index.getInitialProps = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const {data} = res;
    return {posts: data}
};

export default Index;

// class Index extends Component {
//     constructor(props) {
//         super(props);
//     }
//     static async getInitialProps() {
//         const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
//         const {data} = res;
//         return {posts: data}
//     }
//     render() {
//         return (
//         <div>
//             <h1>Our index page!!</h1>
//         </div>
//         );
//     }
// }
