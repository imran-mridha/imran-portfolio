import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";
import { useParams,Link } from "react-router-dom";
import { projectsData } from "../../data";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Navigation } from "swiper";
import ProjectSlider from "./ProjectSlider";

const ProjectDetails = () => {
  const { id } = useParams();
  const selectedProduct = projectsData.find((data) => data.id == id);
  const {
    name,
    image,
    technology,
    des,
    tag,
    live_link,
    repo_link,
    server_link,
    detail_img,
  } = selectedProduct;
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto border border-accent p-5 rounded">
        <div>
          <div>
            <button className="btn">
              <FaArrowLeft className="mr-1 text-xl" />
              <Link to='/'>
                Back Home
              </Link>
            </button>
          </div>
          <div className="my-5">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              // breakpoints={{
              //   280: {
              //     slidesPerView: 1,
              //     spaceBetween: 20,
              //   },
              //   768: {
              //     slidesPerView: 2,
              //     spaceBetween: 40,
              //   },
              //   1024: {
              //     slidesPerView: 3,
              //     spaceBetween: 50,
              //   },
              // }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {detail_img.map((proImg, id) => (
                <SwiperSlide className="w-full" key={id}>
                  <ProjectSlider proImg={proImg} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div>
          <h2 className="text-center text-3xl">{name}</h2>
          <p className="my-5">{des}</p>
          <p className="mb-5 text-2xl text-white">Used Technology</p>
          <div className="">
            {technology?.map((tec) => (
              <div class="badge mr-3 my-2">{tec}</div>
            ))}
          </div>
          <div className="my-5">
            <button className="btn mr-5">
              <AiOutlineLink className="mr-1 text-xl" />
              <a href={live_link} target="_blank">
                Live Demo
              </a>
            </button>
            <button className="btn mr-5">
              <AiFillGithub className="mr-1 text-xl" />
              <a href={repo_link} target="_blank">
                GitHub Client
              </a>
            </button>
            <button className="btn">
              <AiFillGithub className="mr-1 text-xl" />
              <a href={server_link} target="_blank">
                GitHub Server
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
