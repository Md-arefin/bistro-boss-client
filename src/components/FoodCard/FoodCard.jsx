

const FoodCard = ({ item }) => {

    const { name, image, price, recipe } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>

            <p className="bg-slate-900 px-5 py-1 rounded-lg text-white absolute right-0 mt-4 mr-4">${price}</p>

            <div className="card-body">
                <h2 className="card-title text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-outline border-0 border-b-4 my-4 Cinzel font-bold">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;