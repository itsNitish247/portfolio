import { React, useEffect, useState } from "react";
import "../styles/home.css";

function Home() {
  const [title, setTitle] = useState("Web Developer");

  useEffect(() => {
    const titles = ["Web Developer", "Freelancer", "Java Developer"];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setTitle(titles[currentIndex]);
      currentIndex = (currentIndex + 1) % titles.length;
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="main_body">
      <h1 className="intro">
        Hi, I'm
        <span className="name"> Nitish Kumar</span>
      </h1>
      <h2 className="profession">A {title}</h2>
    </div>
  );
}

export default Home;
