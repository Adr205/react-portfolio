import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const abouts = [
  {
    title: "Web Development",
    description:
      "I can build a website for your business, online store, or anything you can imagine.",
    imgURL: images.about01,
  },
  {
    title: "Mobile Development",
    description:
      "I can build a website for your business, online store, or anything you can imagine.",
    imgURL: images.about02,
  },
  {
    title: "Mern Stack",
    description:
      "I can build a website for your business, online store, or anything you can imagine.",
    imgURL: images.about03,
  },
  {
    title: "UX / UI",
    description:
      "I can build a website for your business, online store, or anything you can imagine.",
    imgURL: images.about04,
  },
];

const About = () => {

  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
      console.log(abouts);
    });
  }, [])
  

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Designs</span> <br /> means{" "}
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0,1], x: [300, 0] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');
