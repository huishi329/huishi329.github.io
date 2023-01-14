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
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a target="_blank" rel="nofollow" href="https://github.com/huishi329">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a target="_blank" rel="nofollow" href="mailto:anhuishi95@gmail.com">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className=" align-center scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <strong> Huishi An </strong>is open to volunteer and open source work
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
