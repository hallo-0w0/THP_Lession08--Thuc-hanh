import React, { Component } from 'react';
import ThpListTasks from './components/ThpListTasks';
import ThpTaskAdd from './components/ThpTaskAdd';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { thp_taskId: 1, thp_taskName: "Học lập trình frontend", thp_level: "Small" },
        { thp_taskId: 2, thp_taskName: "Học lập trình reactjs", thp_level: "Medium" },
        { thp_taskId: 3, thp_taskName: "Lập trình với Frontend - Reactjs", thp_level: "High" },
        { thp_taskId: 4, thp_taskName: "Lập trình Fullstack (PHP, Java, NetCore)", thp_level: "Small" },
      ]
    }
  }

  thpHandldSumit = (param) => {
    console.log("App:", param);
    let { products } = this.state;
    products.push(param);
    this.setState({
      products: products
    });
  }

  onUpdate = (updatedProducts) => {
    this.setState({ products: updatedProducts });
  }

  render() {
    return (
      <div className='container border mt-5'>
        <h1>Trinh Huu Phuc - 2210900085</h1>
        <hr />
        <ThpListTasks renderProducts={this.state.products} onUpdate={this.onUpdate} />
        <hr />
        <ThpTaskAdd onSummit={this.thpHandldSumit} />
      </div>
    )
  }
}
