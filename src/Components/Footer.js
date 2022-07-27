import React from 'react';

let url = "https://images.glints.com/unsafe/360x0/glints-dashboard.s3.amazonaws.com/company-logo/785498edd8976f2fbd2c1e9eef389c41.png"

function Footer(props) {
    return (
        <footer className='text-muted text-center mt-5'>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={url} class="img-fluid icons" alt="..." />
                <p >© 2022 Copyright: PT Immobi Solusi Prima</p>
            </div>

            <p>(021)27094931</p>
        </footer>
    );
}

export default Footer;