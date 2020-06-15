import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">COVID-19 MEDIA</h5>
            <p>
              The Staff Covid-19 Media Project collects and publishes the most
              complete testing data available for Canada and territories.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">STAFF AT PLATFORM MEDIA</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Canada Health</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Us Department of Health</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Github</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">License</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://covid-19media.netlify.com"> Health-Dashboard.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
