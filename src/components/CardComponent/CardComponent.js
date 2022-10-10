import '../../assets/scss/components/CardComponent.scss';
import cardimg from '../../assets/images/banner-1.jpg';
function CardComponent(){
  return(
    <div className="item">
        <a href="#!">
          <div className="main-carousel-inner">
            <img src={cardimg} className="img-fluid" alt="" />
            <div className="overlay-content">
              <span className="article-tag">சிறுகதை</span>
              <h4 className="article-title">Article Title Goes Here!</h4>
              <span className="date"><i className="fa fa-calendar"></i> 22/05/2022</span>
            </div>
          </div>
        </a>
      </div>
  );
}
export default CardComponent;