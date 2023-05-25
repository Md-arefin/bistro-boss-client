import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";




const MenuCategory = ({ items, coverTitle, bgImg }) => {


    return (
        <div className="pt-8 mt-10">
            {coverTitle && <Cover coverTitle={coverTitle} bgImg={bgImg}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

            <Link to={`/order/${coverTitle}`}>
                <div className="text-center my-10">
                    <button className=" btn btn-outline border-0 border-b-4 my-4 Cinzel text-lg">Order Your Food</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;