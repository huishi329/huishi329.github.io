const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/huishi-an-8397311b1/">
                  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=fff&style=for-the-badge" alt="linkedin"></img>
                </a>
                <a target="_blank" rel="nofollow" href="https://github.com/huishi329">
                  <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff&style=for-the-badge" alt="github"></img>
                </a>
                <a target="_blank" rel="nofollow" href="mailto:anhuishi95@gmail.com">
                  <img src="https://img.shields.io/badge/Gmail-EA4335?logo=gmail&logoColor=fff&style=for-the-badge" alt="gmail"></img>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-center scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                © 2023 <strong> Huishi An </strong>. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
