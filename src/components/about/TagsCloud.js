import React, { useEffect } from 'react';

import './styles.css';

const tagcloud = require('TagCloud');

function TagsCloud() {
  useEffect(() => {
    const container = '.tags-cloud';
    const texts = [
      'Python',
      'Flask',
      'Javascript',
      'CSS',
      'Java',
      'HTML',
      'ReactJS',
      'Git',
      'REST',
      'JSON',
      'Webpack',
      'Bootstrap',
      'PostgresSql',
      'npm',
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
