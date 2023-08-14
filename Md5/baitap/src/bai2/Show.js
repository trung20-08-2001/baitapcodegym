import {Component} from "react";


class Show extends Component {
    deleteProduct = (id) => {
       this.props.deleteProduct(id)
    };

    handleAddProduct = () => {
        this.props.handleAddProduct()
    };

    getProductEdit=id=>{
        this.props.getProductEdit(id)
        this.handleAddProduct()
    }

    render() {
        let {list}=this.props;
        return (
            <div className="container">
                <button className="btn btn-primary" onClick={() => this.handleAddProduct()}>Thêm sản phẩm</button>
                <table className="table text-center">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((item) => {
                        return (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <th>{item.name}</th>
                                <th>{item.price}</th>
                                <th>
                                    <button className='btn btn-warning' onClick={()=>this.getProductEdit(item.id)}>Edit</button>
                                </th>
                                <th>
                                    <button className='btn btn-danger'
                                            onClick={() => this.deleteProduct(item.id)}>Delete
                                    </button>
                                </th>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>

        )
    }
}


export default Show;
