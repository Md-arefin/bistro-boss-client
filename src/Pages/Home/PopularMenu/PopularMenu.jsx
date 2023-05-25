
import useMenu from "../../../components/Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {

    const [menu] =useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    
    //         setMenu(popularItems)

    // const [menu , setMenu] = useState([]);
    // useEffect( () =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)
    //     })
    // }, [])


    return (
        <section className="mb-16">

            <SectionTitle
                heading={'From our Menu'}
                subHeading={'Popular Menu'}
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;