import { NavLink } from "react-router-dom";

function BlogDetails(props) {
    const { post } = props;
    return (
        <div className="">
                   <NavLink to={`/blog/${post.id}`}>
                <p className="font-bold text-lg">{post.title}</p>
                </NavLink>
                                     <p className="text-sm mt-[4px]">
                                         By <span className="italic">{post.author}</span> on <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}><span className="underline font-bold">{post.category}</span></NavLink>
                                     </p>
                                     <p className="text-sm mt-[6px]">
                                         Posted on <span>{post.date}</span>
                                     </p>
                                     <p className="text-md mt-[10px]">{post.content}</p>
                                     <div className="flex flex-wrap w-full gap-x-3 mt-[5px]">
                                         {post.tags.map((tag,index) => {
                                           
                                                return  <NavLink to={`/tags/${tag.replaceAll(" ","-")}`}><span className="underline text-blue-700 font-bold text-xs" key={index}>{` #${tag}`}</span>
                                                </NavLink>
                                         })}
                                   </div>
                                 </div>
    )
}

export default BlogDetails;