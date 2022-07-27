import React from 'react';
import Footer from '../../Components/Footer';
import Sidebar from '../../Components/Sidebar';

function index(props) {
    return (
    <div className="container-fluid">
        <div className="row">
            <Sidebar />

            <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4">
                <h1 className="mt-4 border-bottom fw-bold mb-4">Input Your Ideas</h1>

                <div className="col-md-12 col-lg-12">
                        <div class="row">
                            <div class="col-md-12">
                                <form className='p-4'>
                                <div class="mb-3">
                                    <input type="name" class="form-control shadow-sm border-3 rounded-pill " placeholder='YOUR NAME' />
                                </div>
                                <div class="mb-3">
                                    <textarea class="form-control shadow-sm border-3 " placeholder='WHATS YOUR IDEA/SUGGESTION?....' id="exampleFormControlTextarea1" rows="6"></textarea>
                                </div>


                                <button type="submit" class="btn btn-secondary fw-bold btn-lg">SEND</button>
                                </form>
                            </div>
                        </div>

                        <div className='row p-3 mt-5 '>
                        <h2 className='fw-bold'>Table Ideas</h2>
                        <table class="table mt-3">
                            <thead>
                                <tr>
                                    <th scope='col' >FROM</th>
                                    <th scope='col' >IDEA / SUGGESTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Otto</th>
                                    <td >
                                        <div class="card border-3">
                                            <div class="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sed iure molestias, odit quisquam quaerat?
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th >Thornton</th>
                                    <td >
                                        <div class="card border-3">
                                            <div class="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sed iure molestias, odit quisquam quaerat?
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th >@twitter</th>
                                    <td >
                                        <div class="card border-3">
                                            <div class="card-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sed iure molestias, odit quisquam quaerat?
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <Footer />
            </main>
        </div>
    </div>
    );
}

export default index;