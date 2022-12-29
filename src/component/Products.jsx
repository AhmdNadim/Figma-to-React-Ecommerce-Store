import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';



const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (<>
            <div className='col-md-3'>
                <Skeleton height={350} />
            </div>
            <div className='col-md-3'>
                <Skeleton height={350} />
            </div>
            <div className='col-md-3'>
                <Skeleton height={350} />
            </div>
            <div className='col-md-3'>
                <Skeleton height={350} />
            </div>
        </>
        );
    };

    const filterProduct = (cat) => {
        const updatetdList = data.filter((x) => x.category === cat);
        setFilter(updatetdList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='d-none d-lg-block'>
                    <div className='buttons btb btns d-flex justify-content-center cla'>
                        <button className='btn me-2 m-5'
                            onClick={() => setFilter(data)}
                        >All</button>
                        <button className='btn me-2 m-5'
                            onClick={() => filterProduct("men's")}
                        >Men's</button>
                        <button className='btn  me-2 m-5'
                            onClick={() => filterProduct("women's")}
                        >Women's</button>
                        <button className='btn  me-2 m-5'
                            onClick={() => filterProduct("jewelery")}
                        >Jewelery</button>
                        <button className='btn  me-2 m-5'
                            onClick={() => filterProduct("electronics")}
                        >Electronic</button>
                    </div>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className='col-md-3 mb-4'>
                                <div class="card h-100 text-center p-4" key={product}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0,12)}</h5>
                                        <p class="card-text lead fw-bold">
                                            ${product.price}...
                                        </p>
                                        <NavLink to={'/products/${product.id'} class="buy">
                                            Buy Now
                                        </NavLink>
                                    </div>
                                </div>
                            </div>   
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h1 className='display-4 fw-bolder sbb text-center'>New Products</h1>
                </div>
            </div>
            <div className='m-0 row justify-content-right'>
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    )
}

export default Products;