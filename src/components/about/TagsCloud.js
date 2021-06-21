import React, { useEffect } from "react";
const tagcloud = require("TagCloud");

function TagsCloud() {
  useEffect(() => {
    const container = ".tags-cloud";
    const texts = [
      "Python",
      "Flask",
      "Javascript",
      "CSS",
      "Java",
      "HTML",
      "ReactJS",
      "MongoDB",
      "Git",
      "REST",
      "JSON",
      "Webpack",
      "Express",
      "Bootstrap",
      "SQL",
      "npm",
      "Jest",
      "NodeJS",
    ];
    const options = {
      radius: 250,
      maxSpeed: "slow",
      initSpeed: "slow",
      keep: false,
    };
    const tagCloud = tagcloud(container, texts, options);

    return () => tagCloud.destroy();
  }, []);

  return <div className="tags-cloud" />;
}

export default TagsCloud;
