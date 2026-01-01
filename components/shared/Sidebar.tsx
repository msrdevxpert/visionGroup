"use client";
import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type GalleryItem = {
  id: string;
  mediaUrl: string;
  title: string;
};

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  logo?: string | StaticImageData;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen, logo }: Props) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch Gallery API
  useEffect(() => {
    const loadGallery = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/gallery`
        );
        const json = await res.json();

        if (json?.data?.length > 0) {
          setGallery(json.data);
        } else {
          setGallery([]);
        }
      } catch (error) {
        console.error("Gallery fetch error:", error);
        setGallery([]);
      } finally {
        setLoading(false);
      }
    };

    loadGallery();
  }, []);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <div className={`left-sidebar ${sidebarOpen ? "open" : ""}`} tabIndex={-1}>
        <div className="offcanvas-body d-flex flex-column align-items-center text-center">
          
          {/* Close Button */}
          <div className="d-flex justify-content-end w-100 mb-5">
            <button
              onClick={() => setSidebarOpen(false)}
              className="bg-transparent text-primary border-0 fs-4 left-sidebar-close"
              aria-label="Close"
            >
              <i className="ti ti-x"></i>
            </button>
          </div>

          {/* Logo */}
          <Image src={logo || ""} className="imglogo" alt="Logo" />

          <p className="text-white">
            We deliver trusted expertise across Civil, Solar Energy, IT Services,
            and Agriculture helping you build smarter, greener, and stronger
            solutions for tomorrow.
          </p>

          {/* Gallery */}
          <h5 className="fw-semibold text-white mt-3">Gallery</h5>

          <div className="row g-3 gallery" id="gallery">
            {loading && <p className="text-white">Loading...</p>}

            {!loading && gallery.length === 0 && (
              <p className="text-white">No images found</p>
            )}

            {gallery.map((item, index) => (
              <div
                key={item.id}
                className="col-4"
                onClick={() => handleOpen(index)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  className="w-100"
                  width={98}
                  height={98}
                   src={item.mediaUrl || "placeholder.jpg"}
                  alt={item.title || "Gallery Image"}
                />
              </div>
            ))}
          </div>

          {/* Social */}
          <h5 className="fw-semibold text-white mt-4">Follow</h5>
          <ul className="social-links p-0">
            <li><a href="#"><i className="ti ti-brand-facebook"></i></a></li>
            <li><a href="#"><i className="ti ti-brand-twitter"></i></a></li>
            <li><a href="#"><i className="ti ti-brand-instagram"></i></a></li>
            <li><a href="#"><i className="ti ti-brand-linkedin"></i></a></li>
            <li><a href="#"><i className="ti ti-brand-twitch"></i></a></li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      <div
        className="left-sidebar-overlay"
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={gallery.map((img) => ({ src: img.mediaUrl }))}
      />
    </>
  );
};

export default Sidebar;
