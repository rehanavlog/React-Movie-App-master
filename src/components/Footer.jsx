import React from 'react'
import companyLogo from './logo.jpg';
import "./style.css"

const Footer = () => {
    return (
        <footer>
            <div className="inner-footer">
                <div className="footer-text">
                    <img src={companyLogo} alt="BigCo Inc. logo" />

                </div>
                <div class="main_div">
                    <div className="box">
                        <h2>Contact</h2>
                        <form method="" action="">
                            <div className="inputBox ">
                                <input type="text" name="username" autocomplete="off" required />
                                <label>Name</label>
                            </div>
                            <div className="inputBox">
                                <input type="email" name="email" autocomplete="off" required />
                                <label>Email</label>
                            </div>
                            <div className="inputBox">
                                
                            <textarea className="textarea" rows="3"></textarea>
                            </div><br/>
                            <button className="button">Submit</button>
                            
                        </form>
                    </div>
                </div>
            </div>
            <p className="copyright">
              ansa.rehana00786@gmail.com  &copy;7651975768
                Copyright &copy;2020 TechWA Movie App | All Rights are reserved.
            </p>

        </footer>

    )
}

export default Footer
