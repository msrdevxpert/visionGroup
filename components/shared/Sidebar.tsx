import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  logo?: string | StaticImageData;
};
const Sidebar = ({ sidebarOpen, setSidebarOpen, logo }: Props) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define your images
  const images = [{ src: "/images/showcase-1.webp" }, { src: "/images/showcase-2.webp" }, { src: "/images/showcase-3.webp" }, { src: "/images/showcase-4.webp" }, { src: "/images/showcase-1.webp" }, { src: "/images/showcase-2.webp" }];

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };
  return (
    <>
      <div className={`left-sidebar ${sidebarOpen ? "open" : ""}`} tabIndex={-1}>
        <div className="offcanvas-body d-flex flex-column align-items-center text-center">
          <div className="d-flex justify-content-end w-100 mb-5">
            <button onClick={() => setSidebarOpen(false)} className="bg-transparent text-primary border-0 fs-4 left-sidebar-close" aria-label="Close">
              <i className="ti ti-x"></i>
            </button>
          </div>

          <Image src={logo || "Vision Group"} className="imglogo" alt="" />
          <p className="text-white">We delivers trusted expertise across Civil, Solar Energy, IT Services, and Agriculture—helping you build smarter, greener, and stronger solutions for tomorrow.</p>
          <h5 className="fw-semibold text-white">Gallery</h5>
          <div className="row g-3 gallery" id="gallery">
            {images.map((image, index) => (
              <div key={index} className="col-4" onClick={() => handleOpen(index)} style={{ cursor: "pointer" }}>
                <Image className="w-100" width={98} height={98} src={image.src} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
          <h5 className="fw-semibold text-white">Follow</h5>
          <ul className="social-links p-0">
            <li>
              <a href="#">
                <i className="ti ti-brand-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti ti-brand-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti ti-brand-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti ti-brand-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti ti-brand-twitch"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="left-sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
      <Lightbox open={open} close={() => setOpen(false)} slides={images} index={currentIndex} />
    </>
  );
};

export default Sidebar;
