import "./App.css";

import Carousel from "react-material-ui-carousel";

import Banner from "./components/Banner";

function App() {

  const items = [
    {
      Name: "Developers",
      Caption: "Come in, we've got ALL the code!",
      contentPosition: "left",
      Items: [
        {
          Name: "APIs for Devs",
          Image: "https://source.unsplash.com/featured/?coding",
          //Image: "https://via.placeholder.com/400"
        },
        {
          Name: "Trending VS Code Extensions",
          Image: "https://source.unsplash.com/featured/?developers",
          //Image: "https://via.placeholder.com/400"
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
          // Image: "https://source.unsplash.com/featured/?ui,ux",
          Image: "https://via.placeholder.com/400"
        },
        {
          Name: "Responsive Design And You",
          // Image: "https://source.unsplash.com/featured/?css",
          Image: "https://via.placeholder.com/400"
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
          // Image: "https://source.unsplash.com/featured/?reading",
          Image: "https://via.placeholder.com/400"
        },
        {
          Name: "How To Craft Stories",
          // Image: "https://source.unsplash.com/featured/?diary",
          Image: "https://via.placeholder.com/400"
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
      autoPlay={false}
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
