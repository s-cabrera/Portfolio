// import React, { useState }  from "react";

// Here we import a helper function that will check if the email is valid
// import { validateEmail } from '../utils/helpers';

function Contact() {
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    // const [name, setName] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');

    // const handleInputChange = (e) => {

    //     const { target } = e;
    //     const inputType = target.name;
    //     const inputValue = target.value;
    
    //     if (inputType === 'email') {
    //       setEmail(inputValue);
    //     } else if (inputType === 'name') {
    //       setName(inputValue);
    //     } else {
    //       setMessage(inputValue);
    //     }
    //   };

    //   const handleSubmit = (e) => {
    //         // Preventing the default behavior of the form submit (which is to refresh the page)
    //         e.preventDefault();

    //         ////Check if the name input field is empty
    //         if (!name) {
    //             setErrorMessage(`Name is required`);
    //             return;
    //           }

    //         // First we check to see if the email is not valid
    //         if (!validateEmail(email)) {
    //           setErrorMessage('Email is invalid');
    //           return;
    //         }
    //         if (!message) {
    //           setErrorMessage(
    //             `Message is required`
    //           );
    //           return;
    //         }
    //         alert(`Form Submitted`);
            
    //         const body = encodeURIComponent(message + "\n\nFrom " + name + ",\n\n" + email);

    //         //Optional code I added that will fill out an email
    //         document.location.href = `mailto:stephanie.cabrera.333@gmail.com?subject=${name}&body=${body}`

    //         // If everything goes according to plan, we want to clear out the input after a successful registration.
    //         setName('');
    //         setEmail('');
    //         setMessage('');
    //         setErrorMessage('');
    //   };

    return (
        <div>
        {/* <form className="row justify-content-start text-start ms-2 col-10 col-lg-8 col-md-10 col-sm-10 py-3">
            <h3 className="">Contact</h3>
            <div className="">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input
                        className="form-control"
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Ex: Jane Doe"
                    />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input
                        className="form-control"
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Ex: janedoe@email.com"
                    />
                </div>
                <div className="mb-3">
                    <label for="message" className="form-label">Message</label>
                    <textarea 
                        className="form-control" 
                        rows="5"
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Enter message here" 
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
        {errorMessage && (
            <div className="ms-2">
              <p className="ps-2 error-text">{errorMessage}</p>
            </div>
          )} */}
        </div>
    );
}

export default Contact;