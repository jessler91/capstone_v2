import React, { Component } from 'react'

export class Products extends Component {
  
    state = { 
        loading: true,
        products: [],
    }

    async componentDidMount() {
        const url = "https://localhost50000/products2"
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results);
        this.setState({ products: data.results[0], loading: false });
    }

    render() {

        if (this.state.loading) {
            return <div> loading... </div>
        }
        
        if (this.state.products) {
            return <div> didn't get a product </div>
        }

        return (
            <div> 
                <div>{this.state.product.name.title}</div>
                <div>{this.state.product.name.first}</div>
                <div>{this.state.product.name.last}</div>
            </div>
        );
    }
}

export default Products
