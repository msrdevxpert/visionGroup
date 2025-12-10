import { Dispatch, SetStateAction, useEffect } from "react";
type Props = {
  search: boolean;
  setSearch: Dispatch<SetStateAction<boolean>>;
};
const Search = ({ search, setSearch }: Props) => {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        setSearch(false);
      }
    });
  });
  return (
    <div className={`search-popup ${search ? "show" : ""}`}>
      <div className="search-popup-inner">
        <span className="close-text">Press Esc to Close</span>
        <button onClick={() => setSearch(false)} className="search-popup-close">
          <i className="ti ti-x"></i>
        </button>
        <form action="#" className="search-form">
          <input type="text" className="effect" placeholder="Type and Hit Enter..." />
          <span className="focus-border"></span>
        </form>
      </div>
    </div>
  );
};

export default Search;
