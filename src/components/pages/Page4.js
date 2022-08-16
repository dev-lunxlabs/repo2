import React from "react";
import "../../styles/Page1.css";
import Layout from "../Layout";
const Page4 = (props) => {
  const cardBackground = {
    backgroundColor: "black",
  };
  return (
    <>
      <div className="mt-25 centralize mb-50">
        <div className="card " id="Page4" style={cardBackground}>
          <div className="card-body" id="Page4">
            <div className="card-heading">
              Your entire business in one place
            </div>
            <div className="card-content ">
              <p className="card-text">
                From video on-demand, livestream and indoor & outdoor classes to
                personal training and many other ways to grow your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Layout

        order="1"
        title="Sell your videos"
        content="Launch your own ‘’Netflix feel like’’ video-on-demand service in minutes. Directly upload videos and control who gets access and when."
        works="WORKS WITH:"
      />
      <Layout
        order="2"
        title="Offer livestream classes"
        content="Launch your own ‘’Netflix feel like’’ video-on-demand service in minutes. Directly upload videos and control who gets access and when."
        works="WORKS WITH:"
      />
      <Layout
        order="3"
        title="Manage your in-person classes"
        content="Launch your own ‘’Netflix feel like’’ video-on-demand service in minutes. Directly upload videos and control who gets access and when."
        works="WORKS WITH:"
      />
      <Layout
        order="4"
        title="Monetise your way"
        content="Maximise your sales with monthly memberships, class packs or one-time buys for your in-person, live stream and pre-recorded classes. We handle all technology and billing, so you can focus on what you do best!"
        
      />
    </>
  );
};

export default Page4;
