
function Show(props)  {
        return (
            <div className="container">
                <button className="btn btn-primary" onClick={props.handleAddProduct}>Thêm sản phẩm</button>
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
                    {props.list.map((item) => {
                        return (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <th>{item.name}</th>
                                <th>{item.price}</th>
                                <th>
                                    <button className='btn btn-warning' onClick={()=>props.getProductEdit(item.id)}>Edit</button>
                                </th>
                                <th>
                                    <button className='btn btn-danger'
                                           onClick={()=>props.deleteProduct(item.id)}>Delete
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


export default Show;
