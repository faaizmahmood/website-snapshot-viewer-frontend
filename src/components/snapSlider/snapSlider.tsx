import styles from "./snapSlider.module.scss";
import Slider from "react-slick"; // install: npm i react-slick slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaExpand } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";

type Snapshot = {
    year: number;
    archiveUrl: string;
};

type SnapSliderProps = {
    snapshots: Snapshot[];
    setSelectedSnap: (snap: Snapshot) => void;
};

const SnapSlider = ({ snapshots, setSelectedSnap }: SnapSliderProps) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3, // adjust how many cards visible
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768, // mobile
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024, // tablet
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <section className={`${styles.snapSlider} pb-5`}>

            <Slider {...settings}>
                {snapshots.map((snap) => (
                    <div key={snap.year} className={`${styles.snapCard}`}>
                        <div className="">
                            <iframe
                                src={snap.archiveUrl}
                                sandbox="allow-scripts allow-same-origin"
                                width="100%"
                                height="300"
                                className="rounded-t-lg"
                            />
                            <div className="d-flex justify-content-between px-3 align-items-center mt-3">

                                <h3 className="text-center py-2">{snap.year}</h3>
                                <IconButton
                                    onClick={() => setSelectedSnap(snap)}
                                    size="small"
                                    sx={{
                                        color: "white", // 👈 icon color
                                        "&:hover": {
                                            backgroundColor: "rgba(255,255,255,0.1)", // 👈 visible hover
                                        },
                                    }}
                                >
                                    <FaExpand />
                                </IconButton>
                            </div>

                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default SnapSlider;
