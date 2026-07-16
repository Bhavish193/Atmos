import { Search } from "lucide-react";

interface SearchBarProps {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    onSearch: () => void;
}

function SearchBar({city,setCity,onSearch,}: SearchBarProps) {
    return (
        <div className="search-box">

            <div className="search-input">

                <Search size={20} />

                <input
                    type="text"
                    placeholder="Search any city..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onSearch();
                        }
                    }}
                />

            </div>

            <button onClick={onSearch}>
                Search
            </button>

        </div>
    );
}

export default SearchBar;