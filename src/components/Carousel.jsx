import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";

const images = [
  {
    src: "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg",
    title: "Delhi",
    name: "Visit once",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
  },
  {
    src: "https://cdn.abhibus.com/2024/02/Things-to-Do-in-Lucknow.jpg",
    title: "Lucknow",
    name: "Visit once",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
  },
  {
    src: "https://www.nativeplanet.com/img/2023/06/rishikesh34-1686056150.jpg",
    title: "Rishikesh",
    name: "Visit once",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
  },
  {
    src: "https://www.clubmahindra.com/blog/media/section_images/shuttersto-6675dd0919940fc.jpg",
    title: "Shimla",
    name: "Visit once",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
  },
  {
    src: "https://cdn.britannica.com/69/154069-050-49DAFC41/harbour-Hong-Kong.jpg",
    title: "malli",
    name: "Visit once",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
  },
  {
    src: "https://cdn.britannica.com/44/94544-050-3195E0BF/Hong-Kong-skyline-Convention-and-Exhibition-Center.jpg",
    title: "Chopta",
    name: "Visit once",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/70/Neeulm_Valley_AJK_%28Arang_Kel%29.jpg",
    title: "South Ex",
    name: "Visit once",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
  },
  {
    src: "https://static2.tripoto.com/media/filter/tst/img/344054/Image/1662793164_praneet_kumar_h8dcf_v98ma_unsplash.jpg.webp",
    title: "Kashmir",
    name: "Visit once",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8X4eD6se1zOvksGz1rlFG8okv3We1BZk-NWNDlCYXrlIIeONJuDNAFrCWrV3Solh1LLk&usqp=CAU",
    title: "Jammu",
    name: "Visit once",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
  },
  {
    src: "https://www.sotc.in/blog/wp-content/uploads/2022/08/landscape-sandstone-mountains-with-river-green-valley-himalayas-nubra-valley-jammu-kashmir-india-2.jpg",
    title: "Lay",
    name: "Visit once",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
  },
  {
    src: "image/parrot2.jpg",
    title: "Surj",
    name: "Visit once",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.",
  },
];

function Carousel() {
  const [items, setItems] = useState(images);
  const [runningTime, setRunningTime] = useState(3000);
  const [timeAutoNext, setTimeAutoNext] = useState(7000);
  const carouselRef = useRef(null);
  const timeRunningRef = useRef(null);

  const showSlider = (type) => {
    let newItems = [...items];
    if (type === "next") {
      newItems.push(newItems.shift());
    } else {
      newItems.unshift(newItems.pop());
    }
    setItems(newItems);
    resetTimeAnimation();

    if (carouselRef.current) {
      carouselRef.current.classList.add(type);
      setTimeout(() => {
        if (carouselRef.current) {
          carouselRef.current.classList.remove(type);
        }
      }, runningTime);
    }
  };

  const resetTimeAnimation = () => {
    if (timeRunningRef.current) {
      timeRunningRef.current.style.animation = "none";
      timeRunningRef.current.offsetHeight; // trigger reflow
      timeRunningRef.current.style.animation = null;
      timeRunningRef.current.style.animation = `runningTime ${
        timeAutoNext / 1000
      }s linear 1 forwards`;
    }
  };

  useEffect(() => {
    const runNextAuto = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    return () => clearTimeout(runNextAuto);
  }, [items, timeAutoNext]);

  useEffect(() => {
    resetTimeAnimation();
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list">
        {items.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{ backgroundImage: `url(${item.src})` }}
          >
            <div className="content">
              <div className="title font-4xl  font-bold">{item.title}</div>
              <div className="name  text-red-500 font-bold ">{item.name}</div>

              <div className="btn">
                <h1>{index}</h1>
              </div>
              {(index === 0 || index === 1) && (
                <>
                  <div className="des mb-4">{item.description}</div>
                  <div className="flex">
                    <button
                      type="button"
                      className=" bg-orange-500 p-2  rounded-lg"
                    >
                      contect
                    </button>{" "}
                    <input
                      type="text"
                      placeholder="your name"
                      className=" bg-white p-2 ml-2  rounded-lg"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button className="prev" onClick={() => showSlider("prev")}>
          {"<"}
        </button>
        <button className="next" onClick={() => showSlider("next")}>
          {">"}
        </button>
      </div>
      <div className="timeRunning" ref={timeRunningRef}></div>
    </div>
  );
}

export default Carousel;
