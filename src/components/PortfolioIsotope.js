import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = ({ noViewMore }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        <div
          className="filter-links scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-python"
            )}`}
            onClick={handleFilterKeyChange("sorting-python")}
            data-href=".sorting-python"
          >
            Python
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("sorting-javascript")}`}
            onClick={handleFilterKeyChange("sorting-javascript")}
            data-href=".sorting-photo"
          >
            Javascript
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-react"
            )}`}
            onClick={handleFilterKeyChange("sorting-react")}
            data-href=".sorting-react"
          >
            React.js
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-flask"
            )}`}
            onClick={handleFilterKeyChange("sorting-flask")}
            data-href=".sorting-flask"
          >
            Flask
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-express"
            )}`}
            onClick={handleFilterKeyChange("sorting-express")}
            data-href=".sorting-express"
          >
            Express.js
          </a>
        </div>
        <div className="works-items works-masonry-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-python sorting-javascript sorting-flask sorting-react ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <a href='https://plendar.herokuapp.com/'>
                    <img
                      decoding="async"
                      src="assets/images/plendar.png"
                      alt="Plendar"
                    />
                    <span className="overlay" />
                  </a>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Python, Flask, React.js </span>
                <h5 className="name">
                  <a href='https://plendar.herokuapp.com/' >Plendar</a>
                </h5>
                <div className="text">
                  <p>
                    A light-weight Google calendar clone built with Flask & PostgreSQL backend and React frontend
                  </p>
                </div>
                <a href='https://github.com/huishi329/Plendar' className="lnk">See project repo</a>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-python sorting-javascript sorting-flask sorting-react">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <a href="https://ducksy.herokuapp.com/">
                    <img
                      decoding="async"
                      src="assets/images/ducksy.png"
                      alt="ducksy"
                    />
                    <span className="overlay" />
                  </a>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Python, Flask, React.js </span>
                <h5 className="name">
                  <a href="https://ducksy.herokuapp.com/">Ducksy</a>
                </h5>
                <div className="text">
                  <p>
                    An Etsy clone built with Flask & PostgreSQL backend and React frontend in a group of 3
                  </p>
                </div>
                <a className="lnk" href="https://github.com/MattKleinsmith/ducksy">See project repo</a>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-react sorting-express sorting-javascript ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <a href="https://eeveenvee.herokuapp.com/">
                    <img
                      decoding="async"
                      src="assets/images/eeveenvee.png"
                      alt="eeveenvee"
                    />
                    <span className="overlay" />
                  </a>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Javascript, Express, React.js </span>
                <h5 className="name">
                  <a href="https://eeveenvee.herokuapp.com/">EveeNvee</a>
                </h5>
                <div className="text">
                  <p>
                    My first fullstack clone of airbnb built with express & PostgreSQL backend and React frontend
                  </p>
                </div>
                <a className="lnk" href="https://github.com/huishi329/EeveeNvee">See project repo</a>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
        </div>
        {/* {!noViewMore && (
          <div className="load-more-link">
            <Link legacyBehavior href="/works">
              <a
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>View More</span>
              </a>
            </Link>
          </div>
        )} */}
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
