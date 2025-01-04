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
              <iframe src="https://topmate.io/embed/profile/jai_niresh_j?theme=D5534D" frameborder="0"
                  btn-style='{"backgroundColor":"#000","color":"#fff","border":"1px solid #000"}'
                  embed-version="v1"
                  button-text="Looking to level up your bug bounty game ? Let's connect ?"
                  position-right="30px"
                  position-bottom="30px"
                  custom-padding="0px"
                  custom-font-size="16px"
                  custom-font-weight="500"
                  custom-width="200px"
                  async=""
                  defer=""></iframe>
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
        {/* <iframe
        src="https://topmate-embed.s3.ap-south-1.amazonaws.com/v1/topmate-embed.js"
        user-profile="https://topmate.io/embed/profile/jai_niresh_j?theme=D5534D"
        btn-style='{"backgroundColor":"#000","color":"#fff","border":"1px solid #000"}'
        embed-version="v1"
        button-text="Looking to level up your bug bounty game ? Let's connect ?"
        position-right="30px"
        position-bottom="30px"
        custom-padding="0px"
        custom-font-size="16px"
        custom-font-weight="500"
        custom-width="200px"
        async=""
        defer=""
      ></iframe> */}
    </div>
  );
};

export default AboutUs;
