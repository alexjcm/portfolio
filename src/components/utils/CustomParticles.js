import React from 'react';

import Particles from 'react-particles-js';

function CustomParticles() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
            },
          },
          size: {
            value: 1,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 0.1,
            direction: 'top',
            out_mode: 'out',
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
      }}
    />
  );
}

export default CustomParticles;
