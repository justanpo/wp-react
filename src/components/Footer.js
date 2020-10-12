import React from "react"
import { Link } from "gatsby"

const Footer = ({}) => {
  return (
    <footer id="site-footer" role="contentinfo" className="header-footer-group">
      <div className="section-inner">
        <div className="footer-credits">
          <p className="footer-copyright">
            © {new Date().getFullYear()} <Link to={"/"}>Prodg React</Link>
          </p>
          <p>
            <a
              className="powered-by-wordpress"
              href="http://prodg.pro"
              rel="noreferrer noopener"
            >
              ProDG
            </a>
          </p>
        </div>

        <a className="to-the-top" href="#site-header">
          <span className="to-the-top-long">
            Наверх{" "}
            <span className="arrow" aria-hidden="true">
              ↑
            </span>
          </span>
          <span className="to-the-top-short">
            Up{" "}
            <span className="arrow" aria-hidden="true">
              ↑
            </span>
          </span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
