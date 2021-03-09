import 'bootstrap/dist/css/bootstrap.css';
import { Fragment } from 'react';
import './App.css';

function App() {
  return (
    <Fragment>
      <nav className="lgnav">
        <a href="#">
          <img src="https://logos.textgiraffe.com/logos/logo-name/Hazem-designstyle-kiddo-m.png" width="150" height="80" className="imgnav" alt="Hazem"/>
        </a>
      </nav>
      <br />
      <form className='form1'>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">First Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="First Name"/>
        </div>
        <div className="form-group">
        <label htmlFor="formGroupExampleInput2">Last Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Last Name"/>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked/>
          <label className="form-check-label" htmlFor="exampleRadios1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
          <label className="form-check-label" htmlFor="exampleRadios2">
            Female
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"/>
          <label className="form-check-label" htmlFor="exampleRadios3">
            Other
          </label>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email@domain.com"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </Fragment>
  );
}

export default App;
