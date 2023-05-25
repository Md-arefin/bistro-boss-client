import { Parallax } from 'react-parallax';




const Cover = ({ bgImg, coverTitle }) => {
    return (

        <Parallax
            blur={{ min: -55, max: 55 }}
            bgImageAlt={coverTitle}
            bgImage={bgImg}
            strength={-200}
            className='mb-10'
        >
            <div className="hero h-[700px] " >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl uppercase Cinzel font-bold">{coverTitle}</h1>
                        <p className="mb-5 text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;