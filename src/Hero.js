import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero">
      <dv className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for thr internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.{" "}
          </p>
          <button className="btn"> Start Now </button>
        </article>
        <article className="hero-img">
          <img src={phoneImg} className="phone-img" alt="phone"></img>
        </article>
      </dv>
    </section>
  );
};

export default Hero;
