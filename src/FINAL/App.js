import "./App.css";

import Carousel from "react-material-ui-carousel";

import Banner from "./components/Banner";

function App() {

  const items = [
    {
      Name: "Developers",
      Caption: "The Content Hub That Caters To You!",
      contentPosition: "left",
      Items: [
        {
          Name: "APIs for Devs",
          Image: "https://source.unsplash.com/featured/?coding",
        },
        {
          Name: "Trending VS Code Extensions",
          Image: "https://source.unsplash.com/featured/?developers",
        },
      ],
    },
    {
      Name: "Designers",
      Caption: "Nurture Your Creativity!",
      contentPosition: "middle",
      Items: [
        {
          Name: "Best UI/UX Practices",
          Image: "https://source.unsplash.com/featured/?ui,ux",
        },
        {
          Name: "Responsive Design And You",
          Image: "https://source.unsplash.com/featured/?css",
        },
      ],
    },
    {
      Name: "Copywriters",
      Caption: "Land More and Better Clients!",
      contentPosition: "right",
      Items: [
        {
          Name: "Pro Tip : Read More.",
          Image: "https://source.unsplash.com/featured/?reading",
        },
        {
          Name: "How To Craft Stories",
          Image: "https://source.unsplash.com/featured/?diary",
        },
      ],
    },
  ];

  return (
    <Carousel
      className="carousel"
      interval={3000}
      animation={"fade"}
      duration={500}
      navButtonsAlwaysVisible={false}
    >
      {items.map((item, index) => {
        return (
          <Banner
            item={item}
            key={index}
            contentPosition={item.contentPosition}
          />
        );
      })}
    </Carousel>
  );
}

export default App;
