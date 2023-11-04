import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { Link } from "react-router-dom";

const Work = () => {
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
    <>
      <h2 className="head-text" style={{ marginBottom: "40px" }}>
        My <span>Projects</span> Section
      </h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {!works.length && <p>Loading...</p>}
        {filterWork.slice(7, 10).map((work, index) => (
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
                  {work.shortDescription}
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
      <Link to="/allProjects">
        <button
          style={{
            background: "#313bac",
            padding: "10px 15px",
            color: "white",
            outline: "none",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          See More
        </button>
      </Link>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
