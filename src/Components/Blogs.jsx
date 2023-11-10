import { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import { Routes, Route } from "react-router-dom";
import BlogDetails from "./BlogDetails";

function Blogs() {

    //Consuming our context
    const {post,loading} = useContext(AppContext);

     return (
        <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[45px] mb-[70px]">
             {
                 loading ? (<Spinner />) :
                     (
                         post.length === 0 ?
                             (<div key={post.id}>
                         <p>No Post Found</p>
                             </div>) :

                             //Creating a Card for every post
                             (post.map((post) => (
                               <BlogDetails key={post.id} post={post}></BlogDetails>
                             ) ) )
                     
                 )
             }
             
             
         </div>
         

         
)
}

export default Blogs;