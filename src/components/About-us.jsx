import React from 'react';

const AboutUs = () => {
  return (
    <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <style>
          {`
          .profile-section {
            background-color: #343a40;
            color: #fff;
            padding: 80px 20px;
            border-radius: 10px;
            margin-top: 30px;
          }
          .profile-img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 20px;
            border: 5px solid #fff;
          }
          .profile-title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .profile-description {
            font-size: 1.2rem;
            line-height: 1.6;
            margin-bottom: 30px;
          }
          .icon-box {
            font-size: 3rem;
            margin-bottom: 20px;
          }
          .icon-box i {
            border: 2px solid #fff;
            border-radius: 50%;
            padding: 20px;
            color: #fff;
            transition: all 0.3s ease-in-out;
          }
          .icon-box i:hover {
            background-color: #fff;
            color: #343a40;
          }
        `}
        </style>

        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Profile Section */}
              <section className="profile-section text-center">
                <img
                  src="./profile.JPG"
                  alt="Profile Picture"
                  className="profile-img"
                />
                <h1 className="profile-title">JAI NIRESH J</h1>
                <div className="profile-description">
                  <h3>SOFTWARE DEVELOPER - ETHICAL HACKER</h3>
                  <p>You know how things are built, in order to break them!</p>
                </div>
                <br />
                <hr style={{ color: '#f8f9fa' }} />

                {/* Icon Boxes */}
                
                <div className="row justify-content-center pt-5">
                
                  <div className="col-lg-4 col-md-4 col-sm-6">
                  <a href="mailto:nireshpandian191@gmail.com">
                    <div className="icon-box">
                      <i className="fas fa-envelope"></i>
                    </div>
                    </a>
                  </div>
                 
                 
                  <div className="col-lg-4 col-md-4 col-sm-6">
                  <a href="https://www.linkedin.com/in/jainireshj">
                    <div className="icon-box">
                      <i className="fab fa-linkedin-in"></i>
                    </div>
                    </a>
                  </div>
                 
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <a  href='https://www.topmate.io/jai_niresh_j' target='_blank'>
                    <div className="icon-box">
                      <i className="fab fa-codiepie"></i>
                    </div>
                    </a>
                  </div>
                </div>
                {/* End Icon Boxes */}
              </section>
              {/* End Profile Section */}
            </div>
          </div>
        </div>

        {/* Bootstrap JS and dependencies */}
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        {/* Font Awesome Script */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js"></script>
    </div>
  );
};

export default AboutUs;
