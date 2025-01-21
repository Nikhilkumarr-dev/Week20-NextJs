import axios from "axios";


export default async function blogpage({params}:any){
    const postId= (await params).postId;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data=response.data;

    return <div>
        BlogPage{postId}
        
        <br />
        title-{data.title}
        body-{data.body}
    </div>
}