import React, {useState} from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCheckbox,
    MDBCol,
    MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow, MDBSpinner,
    MDBTabs,
    MDBTabsContent,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsPane,
} from "mdb-react-ui-kit";
import "./style.css";
import Filter from "./Filter";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, editStatusAction} from "../redux/actions";
import {v4} from "uuid";
import {searchTextSelector, todoListSelector, todosRemainingSelector} from "../redux/selector";
import {store} from "../redux/store";

export default function List4() {
    const dispatch = useDispatch();
    const [active, setActive] = useState("tab1");
    const [name, setName] = useState("")
    const [properties, setProperties] = useState("MEDIUM")
    const todoList = useSelector(todosRemainingSelector);

    const handleChangeInput = (event) => {
        const {value} = event.target;
        setName(value)
    }

    const handleChangeProperties = (event) => {
        const {value} = event.target
        setProperties( value)
    }

    const handleChangeStatusTask = (id) => {
        dispatch(editStatusAction(id))
    }

    const handleAddTodo = () => {
        dispatch(addTodo({
            id:v4,
            name:name.toUpperCase(),
            properties:properties,
            complete:false,
        }))
        setName("");
        setProperties("MEDIUM")
    }


    return (
        <section className="gradient-custom vh-100 ">
            <MDBContainer className="py-5 h-100 w-75">
                <MDBRow className="d-flex justify-content-center align-items-center">
                    <MDBCol xl="10">
                        <MDBCard>
                            <MDBCardBody className="p-5">
                                <Filter></Filter>
                                <MDBTabsContent>
                                    <MDBTabsPane show={active === "tab1"}>
                                        <MDBListGroup className="mb-0">
                                            {todoList.map((item) => (
                                                item.complete ?
                                                    <>
                                                        <MDBListGroupItem
                                                            className=" d-flex align-items-center border-0 mb-2 rounded"
                                                            style={{backgroundColor: "#f4f6f7"}} key={item.id}>
                                                            <MDBCheckbox
                                                                name="flexCheck"
                                                                value=""
                                                                id="flexCheck"
                                                                className="me-3"
                                                                defaultChecked
                                                                onChange={() => handleChangeStatusTask(item.id)}/>
                                                            <s>{item.name}</s>
                                                            <span className="ms-auto">{item.properties}
                                                            </span>
                                                        </MDBListGroupItem>
                                                    </>
                                                    :
                                                    <>
                                                        <MDBListGroupItem
                                                            className=" d-flex align-items-center border-0 mb-2 rounded"
                                                            style={{backgroundColor: "#f4f6f7"}} key={item.id}>
                                                            <MDBCheckbox
                                                                name="flexCheck"
                                                                value=""
                                                                id="flexCheck"
                                                                className="me-3"
                                                                onChange={() => handleChangeStatusTask(item.id)}
                                                            />
                                                            {item.name}
                                                            <span className="ms-auto">{item.properties}
                                                            </span>
                                                        </MDBListGroupItem>
                                                    </>
                                            ))}
                                        </MDBListGroup>
                                    </MDBTabsPane>
                                </MDBTabsContent>
                                <div className="d-flex justify-content-center align-items-center mb-4">
                                    <MDBInput
                                        type="text"
                                        id="form1"
                                        label="New task..."
                                        wrapperClass="flex-fill"
                                        value={name}
                                        onChange={handleChangeInput}
                                    />
                                    <select style={{height: "35px", borderRadius: '10px', borderColor: 'red'}}
                                            value={properties} onChange={handleChangeProperties}>
                                        <option value="HIGH">HIGH</option>
                                        <option value="MEDIUM">MEDIUM</option>
                                        <option value="LOW">LOW</option>
                                    </select>
                                    <MDBBtn type="submit" color="info" className="ms-2" onClick={handleAddTodo}>
                                        Add
                                    </MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
