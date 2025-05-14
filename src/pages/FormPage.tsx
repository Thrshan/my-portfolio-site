
function FormPage() {


    return (
        <>
            {/* <form action="https://getform.io/f/bjjmkvpb" method="POST"> */}
            <form action="https://usebasin.com/f/5b8a8cb4708e" method="POST">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <input type="text" name="message" placeholder="Your Message" required />

      {/* Honeypot Field */}
      <input type="hidden" name="_gotcha" style={{ display: 'none' }} />

      {/* Checkbox with fallback */}
      <input type="checkbox" name="subscribe" value="yes" defaultChecked />
      <input type="hidden" name="subscribe" value="no" />

      {/* Radio Buttons */}
      <label>
        <input type="radio" name="gender" value="male" defaultChecked /> Male
      </label>
      <label>
        <input type="radio" name="gender" value="female" /> Female
      </label>
      <label>
        <input type="radio" name="gender" value="other" /> Other
      </label>

      {/* Select Field */}
      <select name="work-experience">
        <option value="one-year">0-1 years</option>
        <option value="one-five-years">1-5 years</option>
      </select>

      <button type="submit">Send</button>
    </form>
        </>
    );
}

export default FormPage