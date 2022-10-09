import LiveClock from "../LiveClock/LiveClock";
import SearchBar from "../SearchBar/SearchBar";
function SiteBranding(){
  return(
    <section class="site-branding-section bg-white">
    <div class="container">
      <div class="row">
        <div class="site-branding-wrapper">
            <LiveClock/>
          <div class="site-branding-center">
            <a href="index.html" title="Logo">சிவஞானச்சுடர்</a>
          </div>
          <div class="site-branding-right">
            <div class="control ml-auto">
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