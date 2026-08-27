/* eslint-disable no-unused-vars */
import "../css/style.css";
import lawnMower from "../media/lawnMower.png";
import logo from "../media/AtoZ_logo.png";
import AOS from "aos";
import cloud from "../media/cloud.png";
import Swal from "sweetalert2";
import cloud1 from "../media/cloud1.png";
import vida from "../media/editedVideo.mp4"
import { useNavigate } from "react-router-dom";

import axios from "axios";
import CascadeSlider from "../components/cascading";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  usePresenceData,
  useTransform,
  wrap,
} from "motion/react";
import "aos/dist/aos.css";
import BeforeAfterSlider from "../components/slider";
import "../css/resp.css";
import Tilt from "react-parallax-tilt";

import cloud2 from "../media/cloud2.png";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo1 from "../media/ani.png"
import logo2 from "../media/29.png"
import logo3 from "../media/ratedFivetStars.png"
import grid1 from '../media/img (1).jpg'
import grid2 from '../media/img (2).jpg'
import grid3 from '../media/img (3).jpg'
import grid4 from '../media/img (4).jpg'
import grid5 from '../media/img (5).jpg'
import grid6 from '../media/img (6).jpg'
import grid7 from '../media/img (7).jpg'
import grid8 from '../media/img (8).jpg'
import grid9 from '../media/img (9).jpg'
import grid10 from '../media/img (10).jpg'
import grid11 from '../media/img (17).jpg'
import grid12 from '../media/img (18).jpg'
import grid13 from '../media/img (19).jpg'
import imgX from "../media/img (3).jpg"
import imgX1 from "../media/img (22).jpg"
import arrow from "../media/realArrow.png";
import {
  faArrowDown,
  faAngleDown,
  faMobile,
  faEnvelope,
  faX,
  fanav,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import man from "../media/img (16).jpg";
import man2 from "../media/img (7).jpg";
import island from "../media/island.png";
export default function Home() {
const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const fonNav = useRef(null);
  const nameUser = useRef(null)
  const emUser = useRef(null)
  const locUser = useRef(null)
  const descUser = useRef(null)
  const floatBtn = useRef(null)
  const fonUser = useRef(null)
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    description: "",
  })
  const [activeIndexAbout, setActiveIndexAbout] = useState(null);
  const homeRef = useRef(null);
  const contactDiv = useRef(null)
  const [scrollUnlocked, setScrollUnlocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!homeRef.current || scrollUnlocked) return;
      const hero = homeRef.current;
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      if (window.scrollY + window.innerHeight > heroBottom) {
        window.scrollTo({
          top: heroBottom - window.innerHeight,
          behavior: "auto",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollUnlocked]);


  const toGallery = () => {
    fonNav.current.style.right = "-105%";
    const gallery = document.getElementById("Gallery");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" })
    }

  }

  const cards = [
    {
      id: 1,
      title: "Gravel laying",
      desc: "Lorem ipsum dolor siting elit. vero magnam magni fugiat.",
    },
    {
      id: 2,
      title: "Clay compact",
      desc: "Lorem ipsum dolor siting elit. vero magnam magni fugiat.",
    },
    {
      id: 3,
      title: "Driveways & pathways",
      desc: "Lorem ipsum dolor siting elit. vero magnam magni fugiat.",
    },
    {
      id: 4,
      title: "Lawn care",
      desc: "Lorem ipsum dolor siting elit. vero magnam magni fugiat.",
    },
  ];

  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  const faqs = [
    {
      question: "What is the best time of year to start landscaping?",
      answer:
        "Spring and early fall are often ideal for planting and lawn improvements in Western Washington. Hardscaping, gravel work, cleanup, and maintenance can be scheduled year-round.",
    },
    {
      question: "How often should I have my lawn mowed?",
      answer:
        "During active spring growth, many Kitsap County lawns need weekly mowing. Growth slows during dry summer periods and winter, so frequency should follow weather and grass condition.",
    },
    {
      question: "What landscaping services do you offer?",
      answer:
        " A to Z Landscaping and More provides lawn care, landscape design, hardscaping, retaining walls, gravel work, pathways, planting, and seasonal yard cleanup throughout Kitsap County. ",
    },
    {
      question: "Do you offer free landscaping estimates?",
      answer:
        " Yes. A to Z Landscaping and More offers free estimates for landscaping, lawn care, and hardscaping projects in Kitsap County. Call or text Ryan to schedule.",
    },
    {
      question: "Can I schedule one-time yard cleanup or regular lawn maintenance?",
      answer:
        "Yes. A to Z Landscaping and More offers one-time yard cleanup and ongoing lawn maintenance options. Service frequency is planned around your property, season, and goals.",
    },
    
  ];

  const showFon = () => {
    fonNav.current.style.right = "0%";
  };
  const cnclFon = () => {
    fonNav.current.style.right = "-105%";
  };

  const toHome = () => {
    fonNav.current.style.right = "-105%";
    const home = document.getElementById("home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    }
  };
  const toAbout = () => {
  fonNav.current.style.right = "-105%";
  navigate("/about");
};


const toFAQ = () => {
  fonNav.current.style.right = "-105%";

  const faq = document.getElementById("FAQ");

  if (faq) {
    faq.scrollIntoView({
      behavior: "smooth"
    });
  }
    fonNav.current.style.right = "-105%";
    const home = document.getElementById("FAQ");
    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    }
  };
  const toContact = () => {
    if(window.innerWidth<=992){
fonNav.current.style.right = "-105%";
    contactDiv.current.style.display = "flex"
    floatBtn.current.style.zIndex = "-1"
    }else{
      fonNav.current.style.right = "-105%";
    contactDiv.current.style.display = "flex"
    floatBtn.current.style.zIndex = "-1"
    }

    
    

  };

 
  const toCancelFon = () => {
     if(window.innerWidth <= 992){
fonNav.current.style.right = "-105%";
    contactDiv.current.style.display = "none"
    floatBtn.current.style.zIndex = "8"
  }else{
    fonNav.current.style.right = "-105%";
    contactDiv.current.style.display = "none"
    floatBtn.current.style.zIndex = "-1"
  }
    



  };
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", phone: "", location: "", description: "" };


    if (!nameUser.current.value.trim()) {
      newErrors.name = "Full name is required";
      valid = false

    }

    const emailValue = emUser.current.value.trim();
    if (!emailValue) {
      newErrors.email = "Email is required"
      valid = false;

    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }
    const phoneValue = fonUser.current.value.trim();
    if (!phoneValue) {
      newErrors.phone = "Phone number is required";
      valid = false
    } else if (!/^\d{7,15}$/.test(phoneValue)) {
      newErrors.phone = "Enter a valid phone number";
      valid = false;
    }
    if (!locUser.current.value.trim()) {
      newErrors.location = "Location is required";
      valid = false;
    }
    if (!descUser.current.value.trim()) {
      newErrors.description = "Please describe your project";
      valid = false;
    }

    setErrors(newErrors);
    return valid

  }
  const toCall = () => {
    window.location.href = "tel: 360-953-3878"

  }
  const getQuote = () => {
    const name = nameUser.current.value;
    const em = emUser.current.value;
    const fon = fonUser.current.value;
    const desc = descUser.current.value;
    const loc = locUser.current.value;


    if (!validateForm()) {
      return;

    }
    Swal.fire("Sending message...")

    const url = "https://ato-z-six.vercel.app/sendEmail";

    const body = `     
Greetings,

${desc}

Location: ${loc}

Regards,
${name},
${fon},
${em}
  `;

    const data = {
      emUser: em,
      nameUser: name,
      body: body,
      subject: "Someone messaged you from your website"
    };

    axios.post(url, data)
      .then(response => {
        console.log("✅ Success:", response.data);
        Swal.fire(response.data.message || "Your inquiry has been sent successfully!");
      })
      .catch(error => {
        console.error("❌ Error:", error.response?.data || error.message);
        Swal.fire(error.response?.data?.message || "Failed to send your inquiry. Please try again later.");
      });
  };
  return (
    <div>
      <div className="miniCover">
        <img src={logo} alt="" />
      </div>
      <button className="floatBtn" onClick={toCall} ref={floatBtn}>  Call Now</button>
      <div className="fonNav" ref={fonNav}>
        <div className="fonNavPlacer">
          <p onClick={toHome}>Home</p>
          <p onClick={toAbout}>About Us</p>
          <p onClick={toFAQ}>FAQ</p>
          <p onClick={toGallery}>See Our Work</p>
          <div className="fonNavCancel" onClick={cnclFon}>
            <FontAwesomeIcon icon={faX} className="faIcon" />
          </div>
        </div>
      </div>
      <div className="contact" ref={contactDiv}>
        <div className="contactWrap">
          <div className="contactPlacer">
            
            <div className="actContact">
              <div className="actContInputWrap">
                <p>Full name</p>
                <div className="actContInputCover">
                  <input ref={nameUser} type="text" placeholder="Enter name" />
                </div>
                {errors.name && <div className="errAlert"> <span>*{errors.name}</span></div>}

              </div>
              <div className="actContInputWrap">
                <p>Email</p>
                <div className="actContInputCover">
                  <input ref={emUser} type="email" placeholder="Enter email" />
                </div>
                {errors.email && <div className="errAlert"> <span>*{errors.email}</span></div>}
              </div>
              <div className="actContInputWrap">
                <p>Phone</p>
                <div className="actContInputCover">
                  <input ref={fonUser} type="number" placeholder="Your phone number" />
                </div>
                {errors.phone && <div className="errAlert"> <span>*{errors.phone}</span></div>}

              </div>
              <div className="actContInputWrap">
                <p>Location</p>
                <div className="actContInputCover">
                  <input ref={locUser} type="text" placeholder="Your location" />
                </div>
                {errors.location && <div className="errAlert"> <span>*{errors.location}</span></div>}

              </div>
              <div className="actContTxtWrap">
                <p>Briefly explain your project</p>
                <div className="actContTextCover">
                  <textarea ref={descUser} name="" placeholder="Tell us about your project" id=""></textarea>
                </div>
                {errors.description && <div className="errAlert"> <span>*{errors.description}</span></div>}

              </div>
            </div>
            <div className="actContBtns">
              <div className="cnclBtn" onClick={toCancelFon}>
                <FontAwesomeIcon icon={faX} className="faIcon" />
              </div>
              <button onClick={getQuote}>Send</button>
            </div>

          </div>
        </div>
      </div>

      <section id="home">
        <div className="homePlacer">
          

          <div className="newHome">
            <div className="newHomeLayer">
              <div className="newHomePlacer">
                <h1> Professional Landscaping  <br /> &  Lawn Care in Kitsap County</h1>
                <p>9  years of experience transforming outdoor spaces for homes and businesses in Kitsap County.</p>
                <div className="newhomeLogos">
                  <img src={logo1} alt="" />
                  <img src={logo2} alt="" />
                  <img src={logo3} alt="" />
                </div>
                <div className="newHomeBtn">
                  <motion.button

                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={toContact}

                  > <FontAwesomeIcon className="faIcon" icon={faMobile} /> Request a Free Qoute</motion.button>

                </div>
                <CascadeSlider />



              </div>
            </div>

          </div>

          <div className="hero">
            <div className="heroPlacer">
              <div className="heroTitle">
                <span>Greener Lawns</span>
                <h2>Better Living</h2>
              </div>
              <div className="heroIslandCont">
                <div className="lawnMower">
                  <img src={lawnMower} alt="" />
                </div>
                <div className="island">
                  <img src={island} alt="" />
                </div>
              </div>
              <img className="could1" src={cloud} alt="" />
              <img className="could2" src={cloud1} alt="" />
              <img className="could3" src={cloud2} alt="" />
              <img className="could4" src={cloud2} alt="" />
              <img className="could5" src={cloud2} alt="" />
              <img className="could6" src={cloud1} alt="" />
              <div className="heroCont">
                <div className="heroCard1" data-aos="fade-in">
                  <div className="heroCardContPlacer">

                    <img src={imgX1} alt="" />
                    <div className="heroCardCont">
                      <h4>Leaf and Debris Removal</h4>
                      <p>
                        Fallen leaves, branches, and yard debris can quickly pile up and suffocate your lawn. We carefully remove all debris to protect your grass, shrubs, and garden beds while keeping your property looking neat. Let A to Z Landscaping & More keep your yard clean and worry-free. Request a free quote today.

                      </p>

                    </div>

                  </div>
                </div>


                <div className="heroCard2" data-aos="fade-in">
                  <div className="heroCardContPlacer">
                    <div className="heroCardCont">
                      <h4>Lawn and Garden Prep</h4>
                      <p>
                        Proper preparation in the fall sets your lawn and garden up for a healthy, vibrant spring. At A to Z Landscaping & More we trim, edge, and clean up beds to ensure your plants and grass get the care they need. Get your yard ready for the season. Request a free quote today.
                      </p>

                    </div>
                    <img src={imgX} alt="" />

                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="aboutPlacer">
          <div className="aboutIntro">
            <h2>What we do</h2>
            <p>
              From residential yards to commercial spaces, we bring care and expertise to every project. Check out our service areas to see where we can help enhance your property.
            </p>
          </div>

          <div className="aboutCards">
            <div
              className={`aboutCard aboutCard1 aboutCardActive`}

            >
              <div className="aboutCardCover">
                <div className="abCrdTop">

                </div>
                <div className="abCrdBtm">
                  <div className="abtCardLeft">
                    <h4>Landscape Design</h4>
                    <p>Fallen leaves, branches, and debris can harm your lawn and garden. A to Z Landscaping removes all clutter, keeping your yard clean, healthy, and beautiful year-round.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`aboutCard aboutCard2 aboutCardActive`}

            >
              <div className="aboutCardCover">
                <div className="abCrdTop">

                </div>
                <div className="abCrdBtm">
                  <div className="abtCardLeft">
                    <h4>Lawn Maintenance</h4>
                    <p>
                      Keep your lawn looking neat, healthy, and well-groomed all season long. Regular mowing, edging, and trimming help maintain a polished appearance while promoting strong, even growth.  </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`aboutCard aboutCard3 aboutCardActive`}

            >
              <div className="aboutCardCover">
                <div className="abCrdTop">

                </div>
                <div className="abCrdBtm">
                  <div className="abtCardLeft">
                    <h4>Fertilization & Treatment</h4>
                    <p>Our fertilization and treatment services give your lawn the nutrients and protection it needs to thrive. We address common issues like nutrient deficiencies, pests, and diseases to promote lush, healthy grass.  </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`aboutCard aboutCard4 aboutCardActive`}

            >
              <div className="aboutCardCover">
                <div className="abCrdTop">

                </div>
                <div className="abCrdBtm">
                  <div className="abtCardLeft">
                    <h4>Yard Cleanup</h4>
                    <p>We remove leaves, branches, and other yard debris to keep your property clean and well-maintained. Clearing clutter not only improves appearance but also supports a healthier lawn and garden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="greenCards">
        <div className="gcPlacer">
          <div className="grenCardWrap" >
            <div className="gc1">
              <div className="gc1T">
                <h4>We bring your outdoor vision to life.</h4>
                <p>
                  A custom feature like a fountain can completely transform your yard, turning ordinary spaces into stunning focal points. Below is an example of how thoughtful landscaping can elevate your property and bring your vision to life.

                </p>
              </div>
              <div className="gc1B">
                <BeforeAfterSlider />
              </div>
            </div>
            <div className="gc2">
              <div className="gc2WholeWrap">
                <div className="gc2T">
                  <h4>Transforming outdoor spaces.</h4>
                  <p>
                    We're passionate about turning ordinary outdoor areas into functional, beautiful spaces that homeowners and businesses can enjoy for years. Every project is approached with care, skill, and attention to detail, ensuring your property looks its best and stands the test of time.
                  </p>
                  <p>
                    One great example is a recent walkway we transformed from bare ground into a stunning stone path. Watch the video to see how thoughtful design and quality craftsmanship bring a space to life.
                  </p>
                </div>
                <div className="gc2B">
                  <video autoPlay muted loop controls={false} src={vida}></video>
                </div>
              </div>

            </div>
            <div className="gc3">
              <div className="gc2TN">
                <h4>Landscaping experts in Kitsap County. </h4>
                <p>
                  At A to Z Landscaping and More, we proudly provide landscaping and hardscaping services for homeowners and businesses across Kitsap County.
                </p>
                <p>
                  From Bainbridge Island to Silverdale, Poulsbo, Port Orchard, Bremerton, Kingston, Gorst, Poulsbo, Manchester, and beyond, we know the local climate, soil, and styles that make each property thrive. No matter where you are in Kitsap County, we bring skill, care, and attention to every project.
                </p>
              </div>
              <div className="gc2BT">
                <button onClick={toCall}>Call Now</button>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="Gallery" id="Gallery">
        <div className="galleryPlc">
          <div className="galleryWrap">
            <img className="imgTall" src={grid1} alt="" />
            <img className="imgLong" src={grid2} alt="" />
            <img className="imgLong" src={grid3} alt="" />
            <img className="imgTall" src={grid4} alt="" />
            <img src={grid5} alt="" />
            <img className="imgTall" src={grid6} alt="" />
            <img src={grid7} alt="" />
            <img src={grid8} alt="" />
            <img className="imgTall" src={grid9} alt="" />
            <img src={grid11} alt="" />
            <img src={grid13} alt="" />
           <img src={grid13} alt="" />

            <img className="imgLong" src={grid11} alt="" />
          </div>
        </div>

      </section>
      <section id="FAQ">
        <div className="faqPlacer">
          <div className="faqIntro">
            <h2>Frequently asked questions</h2>
            <p>
              Below, you'll find answers to common questions about our services, process, and how we can help transform your property.

            </p>
          </div>
          <div className="faqAccordWrap">
            <div className="accordion">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq ${activeIndex === index ? "active" : ""}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="question">
                    <h4>{faq.question}</h4>
                    <FontAwesomeIcon className="faIcons" icon={faAngleDown} />
                  </div>
                  <div className="answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA section — fixed: position + z-index + paddingBottom so it never overlaps the footer ── */}
      <section
        className="semiFoot"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          clear: "both",
          overflow: "visible",
          paddingBottom: "80px",
        }}
      >
        <div
          className="semiFootPlc"
          style={{ position: "relative", zIndex: 3 }}
        >
          <h3>Ready to transform your ourdoor space?</h3>
          <div
            className="semifootBtn"
            style={{ position: "relative", zIndex: 4 }}
          >
            <motion.div
              className="sfBtnBright"
              onClick={toCall}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              style={{
                position: "relative",
                zIndex: 5,
                transformOrigin: "center",
                cursor: "pointer",
              }}
            >
              <div className="mCallIon">
                <FontAwesomeIcon icon={faMobile} className="faIcon" />
              </div>
              <p>Call Now</p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}