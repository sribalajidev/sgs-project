import LiveClock from "../LiveClock/LiveClock";
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
              <div class="btn-material"></div>
              <i class="icon-material-search material-icons fa fa-search"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
export default SiteBranding;