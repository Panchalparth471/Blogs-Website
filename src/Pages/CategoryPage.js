import Blogs from "../Components/Blogs";
import Header from "../Components/Header";
import Pagination from "../Components/Pagination";
import { useLocation,useNavigate } from "react-router-dom";
function CategoryPage() {
    
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
    const navigation = useNavigate();
    return (
        <>
            <Header></Header>
            <div className="flex flex-col justify-evenly items-center mt-20">
                <button className="border-2 rounded-md px-4 py-2 mb-5" onClick={() => { navigation(-1) }}>Back</button>
                <h2 className="text-2xl font-bold">
                    Blogs Tagged <span>{category}</span>
                </h2>
            </div>
            <Blogs></Blogs>
            <Pagination></Pagination>
      </>
    )
}

export default CategoryPage;