import NavbarNew from "../components/NavbarNew";
import Filters from "../components/searchPage/Filters";
import FooterSmall from "../components/searchPage/FooterSmall";
import Results from "../components/searchPage/Results";
import RightSection from "../components/searchPage/RightSection";
import Suggestions from "../components/searchPage/Suggestions";

const SearchPage = () => {
    return ( 
        <div className="min-h-screen bg-white">
            <NavbarNew />
            <Suggestions />
            <Results />
        </div>
     );
}
 
export default SearchPage;