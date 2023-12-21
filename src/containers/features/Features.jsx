import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";

const featuresData = [
  {
    title: "Imporoving and distrusts instanly",
    text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    title: "Become the tended active",
    text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    title: "Messsage or am nothing",
    text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    title: "Really boy law county",
    text: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
const Features = () => {
  return (
    <div className="gpt__features section__padding" id="feature">
      <div className="gpt__features-heading">
        <h1 className="gradient__text">
          This is Features Section,Step into the Future Today & Make it Happen
        </h1>
        <p>Reaquest Early Access to Get Start</p>
      </div>
      <div className="gpt__features_container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  );
};

export default Features;
