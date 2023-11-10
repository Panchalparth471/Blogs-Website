import { createContext } from "react";
import { useState } from "react";
import { baseUrl } from "../baseUrl";

//Creating our context
export const AppContext = createContext();


//Jab bhi hum AppContextProvider ka tag use krenge uske andr jo tags/components honge unko mai children bolunga .
//Creating Our Provider and adding it to index.js
 export default function AppContextProvider({children}) {
     const [loading, setLoading] = useState(false);
     const [post, setPost] = useState([]);
     const [page, setpage] = useState(1);
     const [totalPages, setTotalPages] = useState(null);


     //Filling our data
     async function fetchBlogPosts(page = 1,tag=null,category) {
         setLoading(true);
         let url = `${baseUrl}?page=${page}`;
         if (tag) {
             url += `&tag=${tag}`;
         }

         if (category) {
             url += `&category=${category}`;
         }

         try {
             const result = await fetch(url);
             const data = await result.json();
             console.log(data);
             setpage(data.page);
             setTotalPages(data.totalPages);
             setPost(data.posts);
         }

         catch (e) {
             console.log('Error in fetching');
             setpage(1);
             setPost([]);
             setTotalPages(null);
         }

         setLoading(false);
     }


     function handlePageChange(page) {
         setpage(page);
         fetchBlogPosts(page);
     }



     //Creating an object which have every data we want to use
     const value = {
         loading,
         setLoading,
         post,
         setPost,
         page,
         setpage,
         totalPages,
         setTotalPages,
         fetchBlogPosts,
         handlePageChange
     };


//Note that its dot here
     return <AppContext.Provider value={value}>
         {children}
     </AppContext.Provider>
}



/*  Steps for using Context API
1)Creating our context using create context.
2)Create a provider function which has all dynamic data as shown above and fill all the data.
3)Add AppContextProvider tag to index.js and add our App inside the tag so here App will be child of our Provider.
4)Create an object which consists of all data and functions to set that data.
5)Return our provider with the value object we created and add children in the tag so they can access the value object.
6)Consume the provider using the useContext hook.





*/