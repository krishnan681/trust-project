// import { useEffect, useRef, useState } from "react";
// import "./Gallery.css";
 

// const galleryItems = [
//   {
//     id: 1,
//     type: "image",
//     src: "https://your-image-url-1.jpg",
//   },
//   {
//     id: 2,
//     type: "image",
//     src: "https://your-image-url-2.jpg",
//   },
//   {
//     id: 3,
//     type: "image",
//     src: "https://your-image-url-3.jpg",
//   },
//   {
//     id: 4,
//     type: "image",
//     src: "https://your-image-url-4.jpg",
//   },
//   {
//     id: 5,
//     type: "image",
//     src: "https://your-image-url-5.jpg",
//   },
//   {
//     id: 6,
//     type: "image",
//     src: "https://your-image-url-6.jpg",
//   },

//   // VIDEO 1
//   {
//     id: 7,
//     type: "video",
//     src: "https://your-video-url-1.mp4",
//     thumbnail: "https://your-video-thumbnail-1.jpg",
//   },

//   // VIDEO 2
//   {
//     id: 8,
//     type: "video",
//     src: "https://your-video-url-2.mp4",
//     thumbnail: "https://your-video-thumbnail-2.jpg",
//   },
// ];

// export default function Gallery() {
//   const [lightbox, setLightbox] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const revealRefs = useRef([]);

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const observer = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//           }
//         }),
//       {
//         threshold: 0.08,
//       }
//     );

//     revealRefs.current.forEach((el) => {
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const addRef = (el) => {
//     if (el && !revealRefs.current.includes(el)) {
//       revealRefs.current.push(el);
//     }
//   };

//   const openLightbox = (item, index) => {
//     setLightbox(item);
//     setCurrentIndex(index);
//   };

//   const closeLightbox = () => {
//     setLightbox(null);
//   };

//   const nextMedia = () => {
//     const nextIndex = (currentIndex + 1) % galleryItems.length;
//     setCurrentIndex(nextIndex);
//     setLightbox(galleryItems[nextIndex]);
//   };

//   const prevMedia = () => {
//     const prevIndex =
//       (currentIndex - 1 + galleryItems.length) % galleryItems.length;

//     setCurrentIndex(prevIndex);
//     setLightbox(galleryItems[prevIndex]);
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!lightbox) return;

//       if (e.key === "Escape") {
//         closeLightbox();
//       }

//       if (e.key === "ArrowRight") {
//         nextMedia();
//       }

//       if (e.key === "ArrowLeft") {
//         prevMedia();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [lightbox, currentIndex]);

//   return (
//     <main className="gallery page-enter">
//       {/* HERO SECTION */}

//       <section className="page-hero">
//         <div className="page-hero__bg" />

//         <div className="container page-hero__content">
//           <span className="section-tag">Our Gallery</span>

//           <h1>
//             Moments of
//             <br />
//             <em>Impact & Joy</em>
//           </h1>

//           <p>
//             Applied Research and Training Centre for Empowerment (ARTCE) is a
//             non-profit organization dedicated to empowering underprivileged
//             communities through education, healthcare, environmental
//             conservation, skill development, and social awareness. We work to
//             eradicate poverty and illiteracy, promote sustainable development,
//             protect nature, and support individuals through training,
//             counseling, and community development programs. Explore our gallery
//             to see the impact of our initiatives and the lives we continue to
//             transform.
//           </p>
//         </div>
//       </section>

//       {/* GALLERY */}

//       <section className="gallery-main">
//         <div className="container">
//           <div className="gallery-grid">
//             {galleryItems.map((item, index) => (
//               <div
//                 key={item.id}
//                 className="gallery-item reveal"
//                 ref={addRef}
//                 style={{
//                   transitionDelay: `${(index % 4) * 0.07}s`,
//                 }}
//                 onClick={() => openLightbox(item, index)}
//               >
//                 <div className="gallery-item__img">
//                   {item.type === "image" ? (
//                     <img
//                       src={item.src}
//                       alt=""
//                       loading="lazy"
//                     />
//                   ) : (
//                     <>
//                       <img
//                         src={item.thumbnail}
//                         alt=""
//                         loading="lazy"
//                       />

//                       <div className="gallery-video-icon">
//                         <span>▶</span>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* LIGHTBOX */}

//       {lightbox && (
//         <div
//           className="lightbox"
//           onClick={closeLightbox}
//         >
//           <div
//             className="lightbox__card"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="lightbox__close"
//               onClick={closeLightbox}
//             >
//               ✕
//             </button>

//             <button
//               className="lightbox__nav lightbox__nav--prev"
//               onClick={prevMedia}
//             >
//               ❮
//             </button>

//             <button
//               className="lightbox__nav lightbox__nav--next"
//               onClick={nextMedia}
//             >
//               ❯
//             </button>

//             <div className="lightbox__img">
//               {lightbox.type === "image" ? (
//                 <img
//                   src={lightbox.src}
//                   alt=""
//                 />
//               ) : (
//                 <video
//                   src={lightbox.src}
//                   controls
//                   autoPlay
//                   playsInline
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }








import { useEffect, useRef, useState } from "react";
import "./Gallery.css";
 

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "https://vinayakaneedcharitabletrust.com/images/gallery/img01.jpeg",
  },
  {
    id: 2,
    type: "image",
    src: "https://vinayakaneedcharitabletrust.com/images/gallery/img02.jpeg",
  },
  {
    id: 3,
    type: "image",
    src: "https://vinayakaneedcharitabletrust.com/images/gallery/img03.jpeg",
  },
  {
    id: 4,
    type: "image",
    src: "https://vinayakaneedcharitabletrust.com/images/gallery/img04.jpeg",
  },
  {
    id: 5,
    type: "image",
    src: "https://vinayakaneedcharitabletrust.com/images/gallery/img05.jpeg",
  },
  {
    id: 6,
    type: "image",
    src: "https://vinayakaneedcharitabletrust.com/images/gallery/img06.jpeg",
  },
  {
    id: 7,
    type: "image",
    src: "https://vinayakaneedcharitabletrust.com/images/gallery/img08.jpeg",
  },
  {
    id: 8,
    type: "image",
    src: "https://vinayakaneedcharitabletrust.com/images/gallery/img09.jpeg",
  },
  {
    id: 9,
    type: "image",
    src: "https://vinayakaneedcharitabletrust.com/images/gallery/img10.jpeg",
  },
  {
    id: 10,
    type: "image",
    src: "https://vinayakaneedcharitabletrust.com/images/gallery/img10.jpeg",
  },
  {
    id: 11,
    type: "image",
    src: "https://vinayakaneedcharitabletrust.com/images/gallery/img11.jpeg",
  },
  {
    id: 12,
    type: "image",
    src: "https://vinayakaneedcharitabletrust.com/images/gallery/img12.jpeg",
  },
  {
    id: 13,
    type: "image",
    src: "https://vinayakaneedcharitabletrust.com/images/gallery/img13.jpeg",
  },
  {
    id: 14,
    type: "image",
    src: "https://vinayakaneedcharitabletrust.com/images/gallery/img14.jpeg",
  },
  {
    id: 15,
    type: "image",
    src: "https://vinayakaneedcharitabletrust.com/images/gallery/img15.jpeg",
  },
  {
    id: 15,
    type: "image",
    src: "https://vinayakaneedcharitabletrust.com/images/gallery/img16.jpeg",
  },
 
];

export default function Gallery() {
  const revealRefs = useRef([]);
  const [lightbox, setLightbox] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.08,
      }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const openLightbox = (item, index) => {
    setCurrentIndex(index);
    setLightbox(item);
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setCurrentIndex(nextIndex);
    setLightbox(galleryItems[nextIndex]);
  };

  const showPrev = () => {
    const prevIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;

    setCurrentIndex(prevIndex);
    setLightbox(galleryItems[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox) return;

      if (e.key === "Escape") {
        closeLightbox();
      }

      if (e.key === "ArrowRight") {
        showNext();
      }

      if (e.key === "ArrowLeft") {
        showPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, currentIndex]);

  return (
    <main className="gallery page-enter">
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero__bg" />

        <div className="container page-hero__content">
          <span className="section-tag">Our Gallery</span>

          <h1>
            Moments of
            <br />
            <em>Impact & Joy</em>
          </h1>

          <p>
            Applied Research and Training Centre for Empowerment
            (ARTCE) is a non-profit organization dedicated to
            empowering underprivileged communities through
            education, healthcare, environmental conservation,
            skill development, and social awareness. We work to
            eradicate poverty and illiteracy, promote sustainable
            development, protect nature, and support individuals
            through training, counseling, and community
            development programs. Explore our gallery to see the
            impact of our initiatives and the lives we continue
            to transform.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-main">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="gallery-item reveal"
                ref={addRef}
                style={{
                  transitionDelay: `${(index % 4) * 0.08}s`,
                }}
                onClick={() =>
                  openLightbox(item, index)
                }
              >
                <div className="gallery-item__img">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt=""
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <img
                        src={item.thumbnail}
                        alt=""
                        loading="lazy"
                      />

                      <div className="gallery-video-icon">
                        <span>▶</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="lightbox"
          onClick={closeLightbox}
        >
          <div
            className="lightbox__card"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              className="lightbox__close"
              onClick={closeLightbox}
            >
              ✕
            </button>

            <button
              className="lightbox__nav lightbox__prev"
              onClick={showPrev}
            >
              ‹
            </button>

            <button
              className="lightbox__nav lightbox__next"
              onClick={showNext}
            >
              ›
            </button>

            <div className="lightbox__img">
              {lightbox.type === "image" ? (
                <img
                  src={lightbox.src}
                  alt=""
                />
              ) : (
                <video
                  src={lightbox.src}
                  controls
                  autoPlay
                  playsInline
                />
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}