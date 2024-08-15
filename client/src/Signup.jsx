import React from 'react';

function Signup() {

    const [name,setName]=useState();
    const [email,setEmail]=useState();;
    const [password,setPassword]=useState();
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#6c757d'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <h2>Register</h2>
        <form>
          <div className="mb-3 text-start">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-0">
            Sign Up
          </button>
        </form>
        <p>Already have an account</p>
        <button><a href="/login">Login</a></button>
      </div>
    </div>
  );
}

export default Signup;
