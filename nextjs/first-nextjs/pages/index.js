import React, { Component } from "react";
import axios from "axios"
// class Index extends Component {
//     constructor(props) {
//         super(props);
//     }
//     static async getInitialProps() {
//         console.log("FETCHING YOUR DATA INSIDE GETINITIALPROPS!");
//     }
//     render() {
//         return (
//         <div>
//             <h1>Our index page!!</h1>
//         </div>
//         );
//     }
// }
const Index = ({posts}) => {

    return (
        <div>
            <h1>Our index page!!</h1>
            <ul>{posts.map(post => (
                <li key={post.id}>{post.title}</li>
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
