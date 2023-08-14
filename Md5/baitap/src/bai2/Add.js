import {Component} from "react";

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list,
            productEdit: this.props.productEdit,
            name: '',
            price: ''
        }
    }


    render() {
        return (
            <>
                <div className="container">
                    <div className="form-group">
                        <label htmlFor="email">Name:</label>
                        <input type="text" className="form-control" placeholder="Enter name" id="name" name="name"
                               onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Price:</label>
                        <input type="number" min="0" className="form-control" id="price" placeholder="Enter price"
                               name="price" onChange={(event) => this.handleChange(event)}/>

                    </div>
                    {this.state.productEdit == null &&
                        <button className="btn btn-primary" onClick={() => this.addProduct()}>Save</button>}
                    {this.state.productEdit != null &&
                        <button className="btn btn-primary" onClick={() => this.handleEditProduct()}>Save</button>}
                    &nbsp;&nbsp;&nbsp;
                    <button className="btn btn-primary" onClick={this.handleShowList}>Back</button>
                </div>
            </>
        )
    }

    componentDidMount() {
        let inputName = document.getElementById("name")
        let inputPrice = document.getElementById("price")
        if (this.state.productEdit != null) {
            inputName.value = this.state.productEdit.name;
            inputPrice.value = this.state.productEdit.price;
            this.setState({name: this.state.productEdit.name})
            this.setState({price: this.state.productEdit.price})
        }
    }

    addProduct = () => {
        let newObj;
        if (this.state.list.length === 0) {
            newObj = {
                id: 1,
                name: this.state.name,
                price: this.state.price
            }
        } else {
            newObj = {
                id: this.state.list[(this.state.list.length - 1)].id + 1,
                name: this.state.name,
                price: this.state.price
            }
        }
        this.props.addProduct(newObj);
        this.props.handleShowList();
    }

    handleChange = (event) => {
        let {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleShowList = () => {
        this.props.handleShowList();
    }

    handleEditProduct = () => {
        let newObj = {id: this.state.productEdit.id, name: this.state.name, price: this.state.price};
        this.props.handleEditProduct(newObj.id - 1, newObj)
        this.props.handleShowList();
    }

}

export default Add;