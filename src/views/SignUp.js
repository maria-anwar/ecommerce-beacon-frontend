import React from "react";
import { Link } from "react-router-dom";
const SignUp = () =>{
    return(
        <>
            {/* Login Slider Area */}
            <div class="breadcrumb-area">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-12 text-center">
                    <h2 class="breadcrumb-title">Shop</h2>
                    <ul class="breadcrumb-list">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item active">Register</li>
                    </ul>
                   
                </div>
            </div>
        </div>
    </div>

    {/* Login Slider Area End */}

    <div class="login-register-area pt-100px pb-100px">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-12 ml-auto mr-auto">
                    <div class="login-register-wrapper">
                        <div className="login-register-tab-list nav">
                        <Link class="active" data-bs-toggle="tab" to="/Login">
                                <h4>login</h4>
                            </Link>
                            <a class="active" data-bs-toggle="tab" href="/SignUp">
                                <h4>Register</h4>
                            </a>
                        </div>
                             
                           
                                <div id="lg2" class="tab-pane">
                                <div class="login-form-container">
                                    <div class="login-register-form">
                                        <form action="#" method="post">
                                            <input type="text" name="user-name" placeholder="Username" />
                                            <input type="password" name="user-password" placeholder="Password" />
                                            <input name="user-email" placeholder="Email" type="email" />
                                            <div class="button-box">
                                                <button type="submit"><span>Register</span></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div> 
                    </div>
                                       
                        </div>
                       
                    </div>
                </div>
            </div>
     
 
        </>
    );
}
export default SignUp;