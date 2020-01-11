import React, {Fragment} from 'react';
import '../../App.css';

const Projects = () => {
    return (
        <Fragment>
     <div className="projects">
        <div className="card" >
        <div className="card-body">
        <img src={require("../../github.png")} className="card-img-top" alt="ServerSideApp" />

          <h5 className="card-title">User Experience Sampling</h5>
          <p className="card-text">A Context Aware Experience Sampling Server Side App.</p>
          <a href="https://github.com/gyurmey/User-experience-sampling-/tree/master/ServersideApp" className="btn btn-primary">GitHub</a>
        </div>
     </div>


     <div className="card" >
    <div className="card-body">
    <img src={require("../../github.png")} className="card-img-top" alt="Voting App" />
    <h5 className="card-title">University Polling App</h5>
    <p className="card-text">A Secure E-Voting prototype inspired from Neuchâtel protocol with return codes</p>
    <a href="https://github.com/gyurmey/university-voting-web-app" className="btn btn-primary">GitHub</a>
    </div>
    </div>


    <div className="card" >
    <div className="card-body">
    <img src={require("../../github.png")} className="card-img-top" alt="Wordpress" />
    <h5 className="card-title">Wordpress Site</h5>
    <p className="card-text">Wordpress Site to show university site</p>
    <a href="#" className="btn btn-primary">GitHub</a>
    </div>
    </div>

    </div>
</Fragment>
    )
}

export default Projects
