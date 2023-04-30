import React from "react";
import avatar from "../assets/avatar.jpeg"
import profile from "../assets/profile.jpg"
import iconsvg from "../assets/iconsvg.json"

export default function Home() {
  return <div>
    <div
      className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center aos-init aos-animate"
      data-aos="fade">
      <img className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
        src={profile} alt="" />
      <h3 className="mt-6 mb-1 text-4xl font-semibold dark:text-white">Emanuel Pérez Cortes</h3>
      <p className="mb-4 text-[#7B7B7B] font-semibold text-lg">Software Developer</p>
      <div className="flex space-x-3">
        <a href="https://www.facebook.com/profile.php?id=100080591415485" target="_blank"
          rel="noopener noreferrer">
          <span className="socialbtn text-[#1773EA]">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path d={iconsvg.pathFacebook}>
              </path>
            </svg>
          </span>
        </a>
        <a href="https://twitter.com/DrManhattanMR" target="_blank" rel="noopener noreferrer">
          <span className="socialbtn text-[#1C9CEA]">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d={iconsvg.pathTwitter} >
              </path>
            </svg>
          </span>
        </a>
        <a href="https://www.linkedin.com/in/emanuel-perez-cortes-77787515a/" target="_blank" rel="noopener noreferrer">
          <span className="socialbtn text-[#0072b1]">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path d={iconsvg.pathLinkedIn}>
              </path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>;
}
