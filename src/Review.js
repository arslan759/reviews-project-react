import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <article
      style={{ width: "25rem" }}
      className="container d-flex flex-column justify-content-center align-items-center shadow-lg px-5 py-3"
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "#5ba6d4",
          borderRadius: "50%",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "50%",
            marginLeft: "-15px",
            marginTop: "2px",
          }}
        />
        <div
          style={{
            width: "30px",
            height: "30px",
            background: "#5ba6d4",
            borderRadius: "50%",
            marginTop: "-110px",
            marginLeft: "-5px",
            transform: "translateY(25%)",
          }}
        >
          <FaQuoteRight style={{ color: "white" }} />
        </div>
      </div>
      <div>
        <h6 className="mt-2 mb-0">{name.toUpperCase()}</h6>
        <p style={{ color: "gray", fontSize: "12px" }} className="mt-0 mb-3">
          {job.toUpperCase()}
        </p>
        <p style={{ fontSize: "13px" }}>{text}</p>
      </div>
      <div>
        <button
          style={{ border: "none", background: "none" }}
          onClick={() => prevPerson()}
        >
          <FaChevronLeft style={{ color: "gray" }} />
        </button>

        <button
          style={{ border: "none", background: "none" }}
          onClick={() => nextPerson()}
        >
          <FaChevronRight style={{ color: "gray" }} />
        </button>
      </div>
      <button
        style={{
          border: "none",
          background: "whitesmoke",
          color: "blueviolet",
          padding: "3px",
          marginTop: "10px",
        }}
        onClick={() => randomPerson()}
      >
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
