import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ searchPost, setSearchPost, home, children }) => {
  return (
    <>
      <header className="global-header">
        <div className="nav-items-warper">
          <div className="logo"> <Link to="/">Nomads Expedition </Link></div>
          <div className="nav-item">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="nav-item">
            <input
              placeholder="search"
              value={searchPost}
              onChange={(e) => {
                home && setSearchPost(e.target.value);
              }}
            />
          </div>
        </div>
      </header>
      <div className="global-wrapper">
        <main>{children}</main>
      </div>
      <footer>
        <div className="footer-warper">
          <div className="social-links">
            <div>
              <a href="https://www.facebook.com/iftikhar93">
                <img src="/images/facebook.png" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/nomads_expedition/">
                <img src="/images/instagram.png" />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/nomads_exp">
                <img src="/images/twitter.png" />
              </a>
            </div>
          </div>
          <div>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
