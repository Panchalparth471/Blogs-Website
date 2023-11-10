import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Pagination() {

    const { page, totalPages,handlePageChange} = useContext(AppContext);

    return (
        <div className="w-full py-2 fixed bottom-0 bg-white flex justify-around items-center self-end border-y-2">
            <div className="flex gap-10 max-sm:gap-3">

           
                <div> 
                    {
                        page > 1 && (<button onClick={() => handlePageChange(page-1)} className="border-2 rounded-md px-4 py-2 max-sm:px-2 max-sm:py-1">Previous</button>)

                    }
                    
                </div>

                <div>
                    {
                        page<totalPages && (<button onClick={()=>handlePageChange(page+1)} className=" border-2 rounded-md px-4 py-2 max-sm:px-2 max-sm:py-1">Next</button>)
                    }
        
                </div>
            </div>

            <div className="font-bold">
                <p>Page {page} out of {totalPages}</p>
            </div>
            
    </div>
)
}

export default Pagination;