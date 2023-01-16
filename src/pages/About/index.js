import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import styles from "./style.module.scss";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Hero = () => {

  const particlesInit = useCallback(async engine => {
    console.log(engine);

    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <div id="home" className={styles.Container}>
       <Particles id="tsparticles" options={{
     
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }} init={particlesInit} loaded={particlesLoaded} />
      <div className={styles.HeroItem}>
        <div>
          <h1>Hello My name is Bilguunerkh</h1>
          <h1>
            I am the{" "}
            <span style={{ color: "#007FFF" }}>
              <Typewriter
                words={["React Developer", "UI Designer", "Software Engineer","Blue Helmet CEO","Khulan's Husband"]}
                loop={false}
              />
            </span>
          </h1>
          <div className={styles.Icons}>
            <SocialIcon network="twitter" />
            <SocialIcon network="google" />
            <SocialIcon network="instagram" />
            <SocialIcon network="youtube" />
            <SocialIcon network="facebook" />
         
          </div>
        </div>
      </div>
      <div className={styles.HeroItem}>
        <div className={styles.ImgContainer}>
          <img
            src="/images/devo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;