const Contact = () => {
    return(
        <div className="contact">
            <h3>Contact Us</h3>
            <form action="">
                <label htmlFor="">
                    <span>Your email:</span>
                    <input type="email" name="email" required />
                </label>
                <label htmlFor="">
                    <span>Your message</span>
                    <textarea name="message" id="" cols="30" rows="10" required></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;