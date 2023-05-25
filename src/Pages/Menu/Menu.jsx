import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import useMenu from '../../components/Hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';



const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered')


    return (
        <div>
            <Helmet>
            <title>Menu | Bistro Boss</title>
            </Helmet>

            <Cover coverTitle='Our Menu' bgImg={menuImg}></Cover>

            <SectionTitle
                subHeading="Don't Miss"
                heading="Today's offer"
            ></SectionTitle>

            {/* Offered Menu items */}

            <MenuCategory items={offered} ></MenuCategory>

            {/* Dessert Menu items */}

            <MenuCategory
                items={dessert}
                coverTitle='Dessert'
                bgImg={dessertImg}
            ></MenuCategory>

            {/*  Pizza Menu items */}

            <MenuCategory
                items={pizza}
                coverTitle='pizza'
                bgImg={pizzaImg}
            ></MenuCategory>

            {/* salad Menu items */}

            <MenuCategory
                items={salad}
                coverTitle='salad'
                bgImg={saladImg}
            ></MenuCategory>

            {/* soup Menu items */}

            <MenuCategory
                items={soup}
                coverTitle='soup'
                bgImg={soupImg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;