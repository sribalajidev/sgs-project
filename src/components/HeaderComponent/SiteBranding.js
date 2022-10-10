import LiveClock from "../LiveClock/LiveClock";
import SearchBar from "../SearchBar/SearchBar";
function SiteBranding(){
  return(
    <section className="site-branding-section bg-white">
    <div className="container">
      <div className="row">
        <div className="site-branding-wrapper">
            <LiveClock/>
          <div className="site-branding-center">
            <a href="index.html" title="Logo">சிவஞானச்சுடர்</a>
          </div>
          <div className="site-branding-right">
            <div className="control ml-auto">
             <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
export default SiteBranding;