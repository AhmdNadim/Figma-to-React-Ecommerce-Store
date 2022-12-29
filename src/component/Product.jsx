import React, {useState, useEffect} from 'react'
// import { useDispatch } from 'react-redux';
// import { addCart } from '../redux/action';
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom';
import images from './../component/bag.png';

    


const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);


    // const dispatch = useDispatch();
    // const addProduct = (product) => {
    //     dispatch(addCart(product));
    // }
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products/', id);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    // const Loading = () => {
    //     return(
    //         <>
    //             Loading.....
    //         </>
    //     )
    // }
    const ShowProduct = () => {
        return(
            <>
              {/* <div className='col-md-6'>
                <img src={product.image} alt={product.title}
                height="400px" width="400px" />
             </div>
             <div className='col-md-6'>
                <h4 className='text-uppercase text-black-50'>
                    {product.category}
                </h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder'>
                    Rating {product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                </p>
                <h3 className='display-6 fw-bold my-4'>
                    $ {product.price}
                </h3>
                <p className='lead'>{product.description}</p>
                <button className='btn btn-outline-dark px-4 py-2'>
                    Add to Cart
                </button>
                <NavLink to="/cart" className='btn btn-dark ms-2 px-3 py-2'>
                    Go to Cart
                </NavLink>
             </div> */}
             <div className='cartt'>
             <div className='cart1'>
                <img src={images} />
             </div>
             <div className='cart2'>
                <h4>
                  MEN'S CLOTHING
                </h4>
                <h1 className='cart4'>
                 Fjallravan - Foldsack No. 1
                 Backpack, Fits 15 Laptops
                </h1>
                <p className='cart5'>
                    Rating 3.9
                    <i className='fa fa-star'></i>
                </p>
                <h3 className='cart6'>
                    $109.95
                </h3>
                <p className='cart7'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <button className='cart8'>
                    Add to Cart
                </button>
                <button to="/cart" className='cart9'>
                    Go to Cart
                </button>
             </div>
            </div>
            </> 
        )
    }
     
  return (
    <div>
     <div className='container'>
        <div className='row'>
            <ShowProduct/>
            {/* <ShowProduct/> */}
        </div>
     </div>
    </div>
  )
}

export default Product;