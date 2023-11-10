import { useContext, useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import Blogs from "../Components/Blogs";
import Header from "../Components/Header";
import { AppContext } from "../Context/AppContext";
import Spinner from "../Components/Spinner";
import BlogDetails from "../Components/BlogDetails";


function BlogPage() {
    const [blog, setblog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { loading, setLoading } = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);

    const newBaseURL = "https://codehelp-apis.vercel.app/api/get-blog";

    async function fetchRelatedBlogs(blogId){
        setLoading(true);
        let url = `${newBaseURL}?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setblog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }

        catch (e) {
            console.log("Error in fetching the data by blog id");
            setblog(null);
            setRelatedBlogs([]);
        }

    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs(blogId);
        }
    }, location.pathname);


    return (
        <>
        <Header></Header>
            <div className="mt-20"><button className="border-2 rounded-md px-4 py-2" onClick={() => { navigation(-1) }}>Back</button></div>
            {
                loading ? (<Spinner></Spinner>) :
                    blog ? (<div>
                        <BlogDetails post={blog}></BlogDetails>
                        <h2>Related Blogs</h2>
                        {
                            relatedBlogs.map((post) => {
                                
                                return <div key={post.id}>
                                    <BlogDetails post={post}></BlogDetails>
                                </div>
                            })
                        }
                    </div>)
                        : (<p>No blog found</p >)
                    
           }
            </>
        
   )
}

export default BlogPage;