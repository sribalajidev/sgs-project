import '../../assets/scss/components/HeaderComponent.scss';
import HeaderStrip from './HeaderStrip';
function HeaderComponent(){
  return(
    <header className='sticky-top'>
      <HeaderStrip />
    </header>
  );
}
export default HeaderComponent;