

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center mx-auto my-10 md:w-4/12">
            <p className="italic Cinzel font-semibold text-lg text-yellow-500 mb-2">--- {subHeading} ---</p>
            <h2 className="text-4xl font-semibold uppercase border-y-4 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;