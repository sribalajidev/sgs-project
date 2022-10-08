import '../../assets/scss/components/HeaderComponent.scss';
import HeaderStrip from './HeaderStrip';
import SiteBranding from './SiteBranding';
import MainNavigation from './MainNavigation';
function HeaderComponent(){
  return(
    <header className='sticky-top'>
      <HeaderStrip />
      <SiteBranding/>
      <MainNavigation />
    </header>
  );
}
export default HeaderComponent;