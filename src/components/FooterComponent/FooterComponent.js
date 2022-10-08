import '../../assets/scss/components/footer.css';

function Footer() {
  return (
    <div className="footer">
      <footer class="footer-wrapper">
    <div class="footer-widget-top">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-12">
            <div class="footer-widget-content">
              <h3 class="footer-title"><a href="index.html" class="footer-logo" title="logo">சிவஞானச்சுடர்</a></h3>
              <p>These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead.</p>
              <ul class="social-icons">
                <li><a href="#!"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#!"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#!"><i class="fa fa-instagram"></i></a></li>
                <li><a href="#!"><i class="fa fa-whatsapp"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="offset-md-1 col-md-3 col-12">
            <div class="footer-widget-content">
              <h3 class="footer-title">Categories</h3>
              <ul class="footer-menu">
                <li><a href="#!" class="nav-link">எழுத்தாளர்கள்</a></li>
                <li><a href="#!" class="nav-link ">சிறுகதை</a></li>
                <li><a href="#!" class="nav-link">கவிதை</a></li>
                <li><a href="#!" class="nav-link">கட்டுரை</a></li>
                <li><a href="#!" class="nav-link">தத்துவம்</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="footer-widget-content">
              <h3 class="footer-title">Subscribe to Newsletter</h3>
              <p>Want to be notified when we launch a new template or an udpate. Just sign up and we'll send you a notification by email.</p>
              <div class="footer-newsletter-form">
                {/* <input type="text" name="" id="" class="newsletter"> */}
                <button type="submit" class="newsletter-button">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-widget-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12">
            <p class="copyrights"><a href="index.html">© சிவஞானச்சுடர்</a>. All rights reserved.</p>
          </div>
          <div class="col-md-6 col-12">
            <div class="policies">
              <ul>
                <li><a href="#!">Terms &amp; Conditions</a></li>
                <li><a href="#!">Privacy Policy</a></li>
              </ul>
              <div class="go-top"><i class="fa fa-caret-up"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default Footer;
