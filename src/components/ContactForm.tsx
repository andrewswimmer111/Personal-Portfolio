import { useForm, ValidationError } from '@formspree/react';
import { useState, useRef } from 'react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mrbzvwwn");
    const [error, setError] = useState("");
    let firstCheck = useRef(0);
    let firstTime = useRef(0);

    if (state.succeeded) {
        document.getElementById("contact-form-h1")?.classList.add("hidden");
        return <p style={{paddingBottom: "3em"}}>Thanks for reaching out!</p>; // INLINE STYLE HERE (got lazy)
    }

    const giveWarning = (divId: string) => {
        document.getElementById(divId)?.classList.add("warning-box");
        setTimeout(() => {
            document.getElementById(divId)?.classList.remove("warning-box")
        }, 500);

        if (firstTime.current === 0) {
            setError("*Please fill out all fields!");
        }
        else {
            document.getElementById("warning")?.classList.add("warning-text");
            setTimeout(() => {
                document.getElementById("warning")?.classList.remove("warning-text")
            }, 500);
        }
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log("running")
        event.preventDefault();

        const email = (event.target as HTMLFormElement).elements.namedItem('email') as HTMLInputElement;
        const message = (event.target as HTMLFormElement).elements.namedItem('message') as HTMLTextAreaElement;

        // Check all fields

        if (!email.value.trim()) {
            giveWarning("email");
        }
        if (!message.value.trim()) {
            giveWarning("message");
        }
        if (firstCheck.current === 0) {
            firstTime.current = 1;
            firstCheck.current = 1;
            console.log("changing here")
        }

        else if (email.value.trim() && message.value.trim()) {
            setError("")
            handleSubmit(event);
        }
    };

  return (
    <form onSubmit={handleFormSubmit} className='contact-form-box'>
      <label htmlFor="email" className='contact-form-label'>
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className='contact-form-email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message" className='contact-form-label'>
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className='contact-form-message'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <div className='contact-form-bottom'>
        <button type="submit" disabled={state.submitting} className='contact-form-button'>
            Submit
        </button>
        <div id="warning" className='contact-form-warning'> {error} </div>
      </div>
    </form>
  );
}

export default ContactForm;