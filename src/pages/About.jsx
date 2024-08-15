import heroBg from "../assets/bg-2.jpg";
import { PiSlideshowFill } from "react-icons/pi";
import { PiUsersThreeFill } from "react-icons/pi";
import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";
import { TbDeviceVisionPro } from "react-icons/tb";

function About() {
  return (
    <div className="transparent min-h-screen relative">
      <img
        src={heroBg}
        alt="Hero Background"
        className="w-full h-full absolute left-0 top-0 object-cover pointer-events-none -z-10"
      />
      <div className="h-20 md:h-40"></div>
      {/* A glassy div with some text */}
      <div className="isolate w-[calc(100%-40px)] md:w-[calc(100%-100px)] xl:w-[calc(100%-200px)] rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 m-auto p-6 text-white backdrop-blur-3xl">
        <div className="flex items-center gap-2 mb-2">
          <PiSlideshowFill size={30} />
          <h3 className="text-md uppercase">About Us</h3>
        </div>
        <p>
          At Torchie.io, we believe in the power of community and collaboration.
          Our mission is to create a dynamic social media platform specifically
          designed for students. We aim to foster an environment where students
          can connect, share knowledge, and support each other throughout their
          academic and personal growth.
        </p>
        <div className="flex items-center gap-2 mt-6 mb-2">
          <PiUsersThreeFill size={30} />
          <h3 className="text-md uppercase">Who We Are</h3>
        </div>
        <p>
          We are a passionate team of Computer Science, Biology, and Business
          majors who understand the unique challenges and opportunities within
          the academic landscape. Our diverse backgrounds and shared vision
          drive us to build a platform that not only meets but exceeds the needs
          of today&apos;s students.
        </p>
        <div className="flex items-center gap-2 mt-6 mb-2">
          <TbSquareRoundedArrowUpFilled size={30} />
          <h3 className="text-md uppercase">What we do</h3>
        </div>
        <p>
          Torchie.io provides a space where students can:
          <br />
          <br />
          Connect: Network with peers, join study groups, and form lasting
          friendships.
          <br />
          <br />
          Collaborate: Work together on projects, share resources, and get
          feedback from the community.
          <br />
          <br />
          Learn: Access a wealth of knowledge through user-generated content,
          expert advice, and academic resources.
          <br />
          <br />
          Grow: Develop both academically and personally through mentorship
          programs, career guidance, and skill-building opportunities.
        </p>
        <div className="flex items-center gap-2 mt-6 mb-2">
          <TbDeviceVisionPro size={30} />
          <h3 className="text-md uppercase">Our Vision</h3>
        </div>
        <p>
          We envision a world where students are empowered to achieve their
          fullest potential through meaningful connections and collaborative
          learning. Torchie.io is more than just a social media platform;
          it&apos;s a vibrant community where students can thrive.
        </p>
      </div>
    </div>
  );
}

export default About;
