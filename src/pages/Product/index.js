import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';

export default class Product extends Component {
    state = {
        product: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/products/${id}`);
        this.setState({ product: response.data });
    };
    
    render() {

        const { product } = this.state;
        return(
            <section className="container-product-info">
                <section className="product-info">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>URL: <a href={product.url}>{product.url}</a></p>
                </section>
            </section>
        );
    }
}