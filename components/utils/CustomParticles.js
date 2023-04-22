import React, { useCallback } from 'react';
import Particles from 'react-particles';

import { loadFull } from 'tsparticles';

export default function CustomParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: '#232741',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'repulse',
            },
            onDiv: {
              enable: false,
              type: 'circle',
            },
            onHover: {
              enable: true,
              mode: 'bubble',
              parallax: {
                enable: false,
                force: 2,
                smooth: 10,
              },
            },
            resize: {
              delay: 0.5,
              enable: true,
            },
          },
          modes: {
            push: {
              default: true,
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 16,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: 'ease-out-quad',
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: 'ease-out-quad',
              },
            },
            bubble: {
              distance: 200,
              duration: 2,
              mix: false,
              opacity: 0,
              size: 0,
              divs: {
                distance: 150,
                duration: 0.8,
                mix: false,
              },
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            blink: false,
            color: '#ffffff',
            distance: 150,
            enable: false,
            frequency: 1,
            opacity: 0.1,
            shadow: {
              blur: 5,
              color: '#000',
              enable: false,
            },
            triangles: {
              enable: false,
              frequency: 1,
            },
            width: 1,
          },
          collisions: {
            enable: true,
          },
          lineLinked: {
            enable: false,
          },
          move: {
            directions: 'none',
            drift: 0,
            enable: true,
            outModes: {
              default: 'out',
            },
            random: true,
            speed: 0.3,
            straight: false,
            direction: 'top',
          },
          number: {
            density: {
              enable: true,
            },
            value: 160,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
            anim: {
              speed: 4,
              sizeMin: 0.3,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
