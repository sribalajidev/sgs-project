
function SearchBar() {
  return (
    <form action="" role="search" className="search-form">
		<input type="search" name="search-text" className="search-text" placeholder="Search..." autoComplete="off" />
		<input type="submit" value="" className="search-submit" />
  </form>
  );
}
export default SearchBar;
