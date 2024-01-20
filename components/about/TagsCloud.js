import React, { useEffect } from 'react';

//import './styles.module.css';

const tagcloud = require('TagCloud');

export default function TagsCloud() {
  useEffect(() => {
    const container = '.tags-cloud';
    const texts = [
      'Java',
      'Spring Boot',
      'Python',
      'Flask',
      'Javascript',
      'NodeJS',
      'ExpressJS',
      'ReactJS',
      'NextJS',
      'Angular',
      'Git',
      'Webpack',
      'Bootstrap',
      'PostgresSQL',
      'Jest',
      'Docker',
      'Digital Ocean',
      'Ubuntu'
    ];
    const options = {
      radius: 270,
      maxSpeed: 'slow',
      initSpeed: 'sl7w',
      keep: false,
    };
    const tagCloud = tagcloud(container, texts, options);

    return () => tagCloud.destroy();
  }, []);

  return <div className="tags-cloud" />;
}
