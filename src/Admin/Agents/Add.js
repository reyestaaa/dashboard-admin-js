import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Sidebar from '../../Components/Sidebar';

function Add(props) {
    return (

        <div className="container-fluid vh-100">
            <div className="row">
                <Sidebar />
                <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h2 className="fw-bold">New Members</h2>
                    </div>

                    <div class="row p-3">
                        <div class="col-md-12">
                            <form>
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input type="name" class="form-control" placeholder='Your Name' />
                            </div>
                            <div class="mb-3">
                            <label class="form-label">Role</label>
                                <select class="form-select" aria-label="Default select example">
                                <option selected>Your Role</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Phone</label>
                                <input type="number" class="form-control" placeholder='Your Number' />
                            </div>

                        <div className='text-end'>
                        <button type="submit" class="btn btn-light me-3">Back</button>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                            </form>
                        </div>
                    </div>

                    <Footer />

                </main>
            </div>
        </div>
    );
}

export default Add;