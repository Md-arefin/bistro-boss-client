import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './featured.css'


const Featured = () => {
    return (
        <section className="text-white featured-item my-20 bg-fixed ">
            <div className=" bg-black  bg-opacity-40 pb-20 pt-12 px-36">
                <SectionTitle
                    heading='Featured Item'
                    subHeading='check it out'
                ></SectionTitle>

                <div className="md:flex justify-center items-center gap-10 pb-20 pt-12 px-36">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>

                    <div>
                        <p>Aug 20, 2029</p>
                        <p className="uppercase"> Where can i get some?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate cum voluptatibus tempore at adipisci iure laboriosam rerum aperiam, nostrum saepe vel. Ab ea eos ratione repudiandae soluta fugit enim quia sit unde velit odit culpa molestiae iusto voluptates cumque sunt laboriosam accusantium delectus numquam odio, iste debitis. Placeat, nam vero!</p>
                        <button className="btn btn-outline btn-primary border-0 border-b-4 my-4">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;