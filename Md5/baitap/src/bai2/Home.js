import {Component} from "react";
import Show from "./Show";
import Add from "./Add";


class Home extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {id: 1, name: "A", price: 10},
                {id: 2, name: "B", price: 1},
                {id: 3, name: "C", price: 110},
                {id: 4, name: "D", price: 1120},
                {id: 5, name: "E", price: 1660}
            ],
            productEdit: null,
            showList: true,
            showAdd: false,
        }
    }

    deleteProduct = (id) => {
        this.setState((prevState) => ({
            list: prevState.list.filter((item) => item.id !== id),
        }));
    };

    handleAddProduct = () => {
        this.setState({showList: false})
        this.setState({showAdd: true})
    }

    handleShowList = () => {
        this.setState({productEdit: null})
        this.setState({showAdd: false})
        this.setState({showList: true})
    }


    addProduct = newProduct => {
        this.state.list.push(newProduct)
    }

    getProductEdit = id => {
        let index=this.state.list.findIndex(item => item.id === id);
        this.setState({productEdit: this.state.list[index]});
    }

    handleEditProduct = (index, newProduct) => {
        this.state.list.splice(index, 1, newProduct)
        this.setState({productEdit: null})
    }

    render() {
        return (
            <>
                <h1 className='text-center'>Quản lí sản phẩm</h1>
                {this.state.showList &&
                    <Show handleAddProduct={this.handleAddProduct} deleteProduct={this.deleteProduct}
                          getProductEdit={this.getProductEdit} list={this.state.list}/>}
                {this.state.showAdd &&
                    <Add handleShowList={this.handleShowList} addProduct={this.addProduct} list={this.state.list}
                         productEdit={this.state.productEdit} handleEditProduct={this.handleEditProduct}/>}
            </>
        )
    }

}

export default Home;