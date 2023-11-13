import Filters from "../components/searchPage/Filters";
import RightSection from "../components/searchPage/RightSection";

const SearchPage = () => {
    return ( 
        <div className="h-screen bg-white">
            <Filters />
            <RightSection />
        </div>
     );
}
 
export default SearchPage;