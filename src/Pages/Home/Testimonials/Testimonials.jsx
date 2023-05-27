import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'
import { FaQuoteLeft } from "react-icons/fa";
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20">
            <SectionTitle
                subHeading={"What Our Client Say"}
                heading="Testimonials"
            ></SectionTitle>

            {/*  */}

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="w-3/4 my-16 mx-auto text-center">

                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                className='mx-auto my-10'
                                readOnly
                            />
                            <div className="text-7xl flex justify-center my-8">
                                <FaQuoteLeft />
                            </div>

                            <p>{review.details}</p>
                            <h3 className="text-3xl mt-2 text-yellow-500">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;