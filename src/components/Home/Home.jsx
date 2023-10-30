import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home.scss";

const Home = () => {
  return (
    <main>
      <Carousel className="carousel">
        <div>
          <img src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/06bffb17-9483-429e-9145-25f046f65ad1.png" />
        </div>
        <div>
          <img src="https://t4.ftcdn.net/jpg/04/30/13/89/360_F_430138951_otmGEbVlWbrpfbRBJaNMvkqVXTkCRx76.jpg" />
        </div>
        <div>
          <img src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/0661bb90-3d05-4709-95a2-c61f927cf78c.jpg" />
        </div>
      </Carousel>

      <div className="trusted">
        <p>
          Trusted by over 1000 companies and thousands of learners around the
          world
        </p>
        <div className="brands">
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg"
            alt=""
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg"
            alt=""
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg"
            alt=""
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg"
            alt=""
          />
        </div>
      </div>

      <div className="courses">
        <div className="header">
          <h2>Courses for you</h2>
          <span>See more</span>
        </div>
        <div className="course-box-area">
          <div className="course-box">
            <img
              src="https://www.speedreadinglounge.com/wp-content/uploads/may-udemy-campaign.png"
              alt=""
            />
            <div className="course-content">
              <h3>Complete webdevelopment course</h3>
              <p>Author</p>
              <p>Rating</p>
              <p>Price</p>
              <p>Tag</p>
            </div>
          </div>
          <div className="course-box">
            <div className="course-banner">
              <img
                src="https://img.freepik.com/premium-vector/online-training-courses-landing-page-design-concept_254538-184.jpg"
                alt=""
              />
            </div>
            <div className="course-content">
              <h3>Complete webdevelopment course</h3>
              <p>Author</p>
              <p>Rating</p>
              <p>Price</p>
              <p>Tag</p>
            </div>
          </div>
          <div className="course-box">
            <div className="course-banner">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/013/904/050/small/online-courses-online-education-the-concept-of-getting-an-education-through-a-video-conference-advanced-training-courses-online-people-use-a-laptop-and-an-online-connection-to-get-an-education-vector.jpg"
                alt=""
              />
            </div>
            <div className="course-content">
              <h3>Complete webdevelopment course</h3>
              <p>Author</p>
              <p>Rating</p>
              <p>Price</p>
              <p>Tag</p>
            </div>
          </div>
          <div className="course-box">
            <div className="course-banner">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/009/361/470/small/online-education-course-for-children-landing-page-vector.jpg"
                alt=""
              />
            </div>
            <div className="course-content">
              <h3>Complete webdevelopment course</h3>
              <p>Author</p>
              <p>Rating</p>
              <p>Price</p>
              <p>Tag</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
