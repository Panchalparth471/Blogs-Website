import Blogs from "../Components/Blogs";
import Header from "../Components/Header";
import Pagination from "../Components/Pagination";

function Home() {
    return (
        <>
            <Header></Header>
           
                <Blogs></Blogs>
                <Pagination></Pagination>
        </>
        
    )
}
export default Home;