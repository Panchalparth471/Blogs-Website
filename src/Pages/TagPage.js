import Blogs from "../Components/Blogs";
import Header from "../Components/Header";
import Pagination from "../Components/Pagination";
import { useLocation,useNavigate } from "react-router-dom";
function TagPage() { 

  
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    const navigation = useNavigate();
    return (
        <>
            <Header></Header>
            <div className="mt-20 flex flex-col justify-evenly items-center">
                <button className="border-2 rounded-md px-4 py-2 mb-5" onClick={() => { navigation(-1) }}>Back</button>
                <h2 className="text-2xl font-bold">
                    Blogs Tagged <span>{tag}</span>
                </h2>
            </div>
            <Blogs></Blogs>
            <Pagination></Pagination>
      </>
    )
}

export default TagPage;