function MainNavigation(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light main-navigation">
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item"><a href="index.html" className="nav-link">முகப்பு</a></li>
        <li className="nav-item"><a href="#!" className="nav-link">எழுத்தாளர்கள்</a></li>
        <li className="nav-item"><a href="#!" className="nav-link ">சிறுகதை</a></li>
        <li className="nav-item"><a href="#!" className="nav-link">கவிதை</a></li>
        <li className="nav-item"><a href="#!" className="nav-link">கட்டுரை</a></li>
        <li className="nav-item"><a href="#!" className="nav-link">தத்துவம்</a></li>
      </ul>
    </div>
  </nav>
  );
}
export default MainNavigation;