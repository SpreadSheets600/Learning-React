import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [Title, setTitle] = useState("");
  const [Post, setPost] = useState("");

  const handleSumbitClick = () => {
    // let Title = document.getElementById("TitleBox").value;
    // let Post = document.getElementById("PostBox").value;
    // console.log("Title : ",Title,"\n","Post : ", Post);

    setTitle("");
    setPost("");
  };

  return (
    <>
      <div>
        <h4>{props.heading}</h4>
        <div className="mb-3">
          <input
            type="Title"
            className="form-control my-3"
            id="TitleBox"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Your Title For The Post"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="PostBox"
            rows="3"
            value={Post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Write Your Post Here"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleSumbitClick}>
          Post
        </button>
        <button className="btn btn-primary mx-2" disabled="disabled">
          {Post.split(" ").length - 1} Words | {Post.length} Charactters |{" "}
          {0.008 * Post.split(" ").length} Minutes Read
        </button>
        <h4 className="text-body-secondary my-3">Your Post Preview</h4>
        <div className="container my-3">
          <p>
            <h5>{Title}</h5>
          </p>
          <p>{Post}</p>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
