import axios from "axios";


export default async function blogpage({params}:any){
    const postId= (await params).blogId;
    return <div>
        BlogPage{JSON.stringify(postId)}
    </div>
}