import React from 'react'
import image from './../component/contact .jpg';

const Contact = () => {
    return (
        <div class="containerone">
            <div>
                <h2>Contact Us</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry :</p>
            </div>
            <hr />
            <div class="row">
                <div class="columntwo">
                    <img src={image} />
                </div>
                <div class="column">
                    <form >
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        <label for="country">Country</label>
                        <select id="country" name="country">
                            <option value="australia">PAKISTAN</option>
                            <option value="canada">PAKISTAN</option>
                            <option value="usa">PAKISTAN</option>
                        </select>
                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact