import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "../Work/Work.scss";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import FooterCompo from "../FooterCompo/FooterCompo";

const AllProjects = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  console.log(filterWork);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div
      style={{
        background: "#edf2fa",
        fontFamily: "sans-serif",
      }}
    >
      <Navbar />

      <h2 className="head-text" style={{ paddingTop: "100px" }}>
        My All <span>Projects</span>
      </h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="app__work-filter">
          {["All", "Reactjs", "UI/UX", "Typescript", "Redux", "Nextjs"].map(
            (item, index) => (
              <div
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`app__work-filter-item app__flex p-text ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {!works.length && <p>Loading...</p>}
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              ></motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              {
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work?.shortDescription}
                </p>
              }
              <Link to={`/productDetail/${work._id}`}>
                <button
                  style={{
                    background: "#313bac",
                    padding: "7px 12px",
                    color: "white",
                    outline: "none",
                    border: "none",
                    borderRadius: "20px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                >
                  See Detail
                </button>
              </Link>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <div style={{ background: "white" }}>
        <FooterCompo />
      </div>
    </div>
  );
};

// export default AppWrap(
//   MotionWrap(AllProjects, "app__works"),
//   "work",
//   "app__primarybg"
// );

export default AllProjects;
