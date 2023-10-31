import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components";
import FooterCompo from "../FooterCompo/FooterCompo";

const ProjectDetail = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  console.log(id, singleData);
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setSingleData(data);
    });
  }, []);

  const work = singleData.find((i) => i._id === id);
  return (
    <div style={{ background: "#edf2fa", fontFamily: "sans-serif" }}>
      <Navbar />
      <div style={{ paddingTop: "100px" }}>
        <h2 className="head-text">
          Project <span>Detail</span>
        </h2>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-product"
        >
          <div className="app__work-item app__flex">
            <div className="app__detail-img app__flex">
              <img
                src={work?.imgUrl && urlFor(work?.imgUrl)}
                alt={work?.name}
              />

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
              <h4 className="bold-text">{work?.title}</h4>
              <div>
                <p className="p-text" style={{ marginTop: 10 }}>
                  <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                    Technology:
                  </span>{" "}
                  {work?.technology}
                </p>
                <p className="p-text" style={{ marginTop: 10 }}>
                  <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                    Description:
                  </span>{" "}
                  {work?.description}
                </p>
                <p className="p-text" style={{ marginTop: 10 }}>
                  <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                    Live Link:
                  </span>{" "}
                  <a
                    href={work?.projectLink ? work?.projectLink : null}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#313bac" }}
                  >
                    {work?.projectLink}
                  </a>
                </p>
                {work?.codeLink && (
                  <p className="p-text" style={{ marginTop: 10 }}>
                    <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                      Code Link:
                    </span>{" "}
                    <a
                      href={work?.codeLink ? work?.codeLink : null}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#313bac" }}
                    >
                      {work?.codeLink}
                    </a>
                  </p>
                )}
              </div>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work?.tags[0]}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div style={{ background: "white" }}>
        <FooterCompo />
      </div>
    </div>
  );
};

export default ProjectDetail;
