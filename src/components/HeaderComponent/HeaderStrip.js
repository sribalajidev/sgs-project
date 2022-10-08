import SocialFollow from "../SocialFollow/SocailFollow";
import HeaderSlider from "./HeaderSlider";
function HeaderStrip(){
  return(
    <section className="header-strip">
      <div className="container">
        <div className="row">
          <div className="header-strip-wrapper">
            <div className="title-holder">
              <h3>Latest Articles</h3>
            </div>
            <HeaderSlider />
            <SocialFollow />
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeaderStrip;