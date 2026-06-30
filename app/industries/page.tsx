import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
    title: "Industries We Serve | Yuvasoft AI",
    description:
        "Discover the industries we help transform with custom software development, AI solutions, mobile applications and digital platforms.",
};

const ArrowSvg = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M21.7061 12.708L14.707 19.7071C14.512 19.9021 14.256 20 14 20C13.744 20 13.488 19.9021 13.293 19.7071C12.902 19.3161 12.902 18.684 13.293 18.293L18.5859 13H3C2.447 13 2 12.552 2 12C2 11.448 2.447 11 3 11H18.5859L13.293 5.70707C12.902 5.31607 12.902 4.68401 13.293 4.29301C13.684 3.90201 14.316 3.90201 14.707 4.29301L21.7061 11.292Z"
            fill="currentColor"
        />
    </svg>
);

export default function IndustriesPage() {
    return (
        <main>
            {/* Breadcrumb */}

            <section className="breadcrumb-area minus-margin overflow-hidden position-relative z-index-one">
                <div className="container">
                    <div className="row justify-content-center position-relative z-index-one">
                        <div className="col-lg-10">
                            <div className="breadcrumb-info text-center">
                                <p className="breadcrumb-nav text_color_white">
                                    <Link href="/">Home</Link>
                                    <i className="bi bi-slash-lg mx-1"></i>
                                    <span className="text_color_light_white">
                                        Industries
                                    </span>
                                </p>

                                <h1 className="text_color_white">
                                    Industries We Serve
                                </h1>

                                <p className="breadcrumb-desc text_color_light_white">
                                    We build tailored digital products for businesses across
                                    multiple industries, helping organizations streamline
                                    operations, improve customer experiences and grow with modern
                                    technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <video
                    className="breadcrumb-video-bg z-index-minus-one position-absolute top-0 start-0 h-100 w-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source
                        src="/assets/images/new-images-v2/video/breadcrumb.mp4"
                        type="video/mp4"
                    />
                </video>
            </section>

            {/* Industries */}

            <section className="service-area bg_color_black pt-120 pb-120 position-relative z-index-one overflow-hidden">

                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-lg-8">

                            <div className="section-title text-center">

                                <span className="sub-title d-inline-block">
                                    Industries
                                </span>

                                <h2 className="title text_color_white text-anime">
                                    Technology Built Around Your Business
                                </h2>

                                <p className="desc text_color_light_white">
                                    Every industry has different challenges. Our team designs
                                    software specifically for your workflows instead of forcing
                                    generic solutions.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="row pt-60 gy-4">

                        {industries.map((industry) => (

                            <div
                                key={industry.slug}
                                className="col-lg-4 col-md-6"
                            >

                                <div className="service-box-wrap h-100">

                                    <div className="service-box position-relative overflow-hidden h-100 d-flex flex-column">

                                        <div className="text-center mb-4">

                                            <img
                                                src={industry.image}
                                                alt={industry.title}
                                                style={{
                                                    maxWidth: "240px",
                                                    width: "100%",
                                                }}
                                            />

                                        </div>

                                        <h3
                                            className="text_color_white"
                                            style={{
                                                fontSize: "22px",
                                                marginBottom: "14px",
                                            }}
                                        >
                                            {industry.title}
                                        </h3>

                                        <p
                                            className="text_color_light_white flex-grow-1"
                                        >
                                            {industry.description}
                                        </p>

                                        <div
                                            className="mt-4"
                                        >

                                            <Link
                                                href={`/industries/${industry.slug}`}
                                                className="border-btn d-inline-flex align-items-center gap-2"
                                            >
                                                Learn More

                                                <ArrowSvg />

                                            </Link>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                <img
                    className="position-absolute z-index-minus-one translate-middle top-50 start-50"
                    src="/assets/images/new-images-v2/shapes/service-bg-sp.png"
                    alt=""
                />

            </section>
        </main>
    );
}