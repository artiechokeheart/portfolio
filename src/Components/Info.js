"use client";
import { Fragment } from "react";
import { useState, useEffect } from "react";

export default function Info() {
  return (
    <article className="Profile">
      <h2 className="typeWriter">About Me</h2>
      <p className="introduction">
        I am a bubbly and creative individual with a love of problem solving.
        From dungeons and dragons and fiction writing to katas and NYT puzzles,
        I enjoy being able to use my ability to think laterally. My ADHD thrives
        off it and I have never found something that lights up my brain quite
        like solving the problems that coding provides. The satisfaction of
        being able to constantly learn and build something is why I want to be a
        software developer. <span className="blinkingText">|</span>
      </p>
    </article>
  );
}
