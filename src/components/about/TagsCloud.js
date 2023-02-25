import React, { useEffect } from 'react';

import './styles.css';

const tagcloud = require('TagCloud');

function TagsCloud() {
  useEffect(() => {
    const container = '.tags-cloud';
    const texts = [
      'Java',
      'Spring Boot',
      'Python',
      'Flask',
      'Javascript',
      'CSS',
      'HTML',
      'ReactJS',
      'Git',
      'JSON',
      'Webpack',
      'Bootstrap',
      'PostgresSQL',
      'Oracle PL/SQL',
      'Jest',
      'NodeJS',
      'Docker',
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

export default TagsCloud;
