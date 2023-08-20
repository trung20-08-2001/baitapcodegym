import React, {useState} from 'react';
import {MDBBtn, MDBInput, MDBRadio} from "mdb-react-ui-kit";
import {useDispatch} from "react-redux";
import {propertiesFilterChange, searchFilterChange, statusFilterChange} from "../redux/actions";

const Filter = () => {
    const dispatch=useDispatch();

    const handleChangeInput=(event)=>{
        dispatch(searchFilterChange(event.target.value.toUpperCase()))
    }

    const handleChangeStatusFilter=(event)=>{
        dispatch(statusFilterChange(event.target.value))
    }

    return (
        <>
            <div className="row">
                <h2 className="d-flex justify-content-center text-info">Search</h2>
                <hr></hr>
                <div className="col-lg-6 col-md-2">
                    <h5 className="d-flex justify-content-center">Task</h5>
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <MDBInput
                            type="text"
                            id="form1"
                            label="Search task..."
                            wrapperClass="flex-fill"
                            onChange={handleChangeInput}
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-2">
                    <h5 className="d-flex justify-content-center">Filter</h5>
                    <div className="d-flex justify-content-center">
                        <MDBRadio name='filter' id='inlineRadio1' value='ALL' label='All' inline onChange={handleChangeStatusFilter}/>
                        <MDBRadio name='filter' id='inlineRadio2' value='COMPLETE' label='Complete' inline onChange={handleChangeStatusFilter}/>
                        <MDBRadio name='filter' id='inlineRadio3' value='ACTIVE' label='Active' inline onChange={handleChangeStatusFilter}/>
                    </div>
                </div>
                <hr></hr>
            </div>
        </>
    );
};

export default Filter;
