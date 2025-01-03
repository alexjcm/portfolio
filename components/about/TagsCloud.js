import React, { useEffect } from 'react';

//import './styles.module.css';

const tagcloud = require('TagCloud');

export default function TagsCloud() {
  useEffect(() => {
    const container = '.tags-cloud';
    const texts = [
      'Java',
      'Spring Boot',
      'Flask',
      'Javascript',
      'NodeJS',
      'ExpressJS',
      'NextJS',
      'Angular',
      'Git',
      'Webpack',
      'PostgresSQL',
      'MongoDB',
      'Jest',
      'Docker',
      'Digital Ocean',
      'Redis'
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
