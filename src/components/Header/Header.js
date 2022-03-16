import Nav from './Nav';

function Header() {
  return (
    <header>
      <Nav />
      <div className="container">
        <div className="content">
          <h2>The stars don't look<br /> bigger. But they do<br /> look brighter.</h2>
          <a className="button-explore">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Explore
          </a>
          <a className="button-learn">Learn More</a>
        </div>
        <img src="./images/space.svg"></img>
      </div>
    </header>
  );
}

export default Header;
