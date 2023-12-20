import React from "react";
import people from "../../assets/people.png";
import ai from '../../assets/ai.png';
import "./header.css";

const Header = () => {
  return (
    <div className="gpt__header section__padding" id="home">
      <div className="gpt__header-content">
        <h1 className="gradient__text">
         This is a React-based UI/UX model website design.
        </h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div className="gpt__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="submit">Get Started </button>
        </div>
        <div className="gpt__header-content__people">
          <img src={people} alt="Users" />
          <p>1,600 Peoples requested to access a visit an last 24 hour</p>
        </div>

      </div>
      <div className="gpt__header-image">
        <img src={ai} alt="AI image" />
      </div>
    </div>
  );
};

export default Header;
