import { useContext } from "react";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import Home from "./Pages/Home";
import { AppContext } from "./Context/AppContext";
import { useEffect } from "react";
import "./App.css";
import "./index.css";
import { Routes, Route, useSearchParams,useLocation } from "react-router-dom";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  
  /*
  The useSearch Params is a buildt in hook in react-router-dom, it allows use to access and update the search parameters
    in the URL query string. The hook returns an array with two items.

    1.The first item is an instance of the URLSearchParams class that represents the search parameters in the current URL.
    2.The second item is a function to update the search Parameters or an object of key value the search parameters in URL are updated accordingly


    the useSearchParams gets the value inside it,
      Suppose the URL is "some-website.com/profile?id=12454812" 
      searchParams.get("id") returns "12454812" 

  */
  
  
  /* 

  The useLocation hook allows us to access the current location in react component.The use location() hook returns object with following properties:
  1) pathname: The current URL pathname excluding the domain and query parameter.
  2) search: The query string in current URL (including ?).
  3) hash: The anchor portion of current URL (including #).
  4) state: An optional state object that was passed to current location.

  Suppose the URL is "some-website.com/profile?id=12454812" 
   then location.search contains "?id=12454812" it is used to add queries after the pathname of the url
   location.pathname contains "/profile"
   

  
  
  */
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {

    //It gets the page which is a search parameter in our API url
    
    /*
     The ?? operator is the nullish coalescing operator. It returns the right-hand operand when the left-hand operand is null 
     or undefined, otherwise, it returns the left-hand operand.
     */

    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {

      //iska matlab tag wala page show krna hai
      const tag = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), tag);

    }

    else if (location.pathname.includes("category")) {
      
      const category = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), category);
    }


   else {
    fetchBlogPosts(Number(page));
    }

  }, [location.pathname, location.search])
  //It says that whenever there is change in path name means there is change in category or tag then the useEffect will be called and it will
  //fetch different blogs according to the change. location.search indicate the page in the url so when ever page is changed the useEffect will be 
  //called


  
 
  



  
  return (
    <div className="h-full w-full flex flex-col gap-y-1 justify-center items-center">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog/:blogId" element={<BlogPage></BlogPage>}></Route>
         {/* Jo bhi tag k age likha hoga wo apka tag manliya jaega */}
        <Route path="/tags/:tag" element={<TagPage></TagPage>}></Route>
        <Route path="/categories/:category" element={<CategoryPage></CategoryPage>}></Route>
        
      </Routes>
    </div>
   
  )
}
