function Register () {
    return (
        <div>
            <div className="contact-container">
                <h1 className="contact-container-heading">
                    Login Page
                </h1>
                <form>
              <label>
                Email ID:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email.."
                  required
                />
              <br/>
              <label className="label-name">
                Password: </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password.."
                  required
                /><br/>
                <button>Register</button>
            </form>
          
                
            </div>
            </div>
                )
        }
 export default Register;
        
