function ContactMe() {
  return (
    <>
      <div>
        <h1>Get in contact</h1>
        <p>
          Feel free to message me using the form below or via social media.{" "}
        </p>
        <a href="https://www.linkedin.com/in/wing-kit-leung/">LinkedIn</a>
        <a href="https://github.com/Kit2345">GitHub</a>
      </div>
      <div>
        <form aria-label="form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </form>
      </div>
    </>
  );
}

export default ContactMe;
