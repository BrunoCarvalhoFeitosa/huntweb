import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../services/api';
import './style.css';

export default class Main extends Component {

    //State to store files from API
    state = {
        products: [],
        productInfo: {},
        page: 1,
    };

    //This method is exacutable when the component is ready to reder
    componentDidMount() {
        this.loadProducts();
    };

    //Promise to get files from http request AXIOS to API
    loadProducts = async (page = 1) => {
        const response = await Api.get(`/products?page=${page}`);
        const { docs, ...productInfo } = response.data;
        
        this.setState({ products: docs, productInfo, page });
    };

    //Function to leave to previous page
    prevPage = () => {
        const { page } = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    };

    //Function to leave to next page
    nextPage = () => {
        const { page, productInfo } = this.state;

        if(page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    render() {
        const { page, productInfo } = this.state;

        return (
            <section className="container-product-list">
                <section className="product-list">
                    {this.state.products.map(product => (
                        <article key={product._id}>
                            <h2>{product.title}</h2>
                            <h3>{product.description}</h3>
                            <Link to={`/products/${product._id}`}>Acessar</Link>
                        </article>
                    ))}

                    <section className="product-actions">
                        <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                        <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
                    </section>
                </section>
            </section>
        );
    }
}