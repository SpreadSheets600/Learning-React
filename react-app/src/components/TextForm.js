import React from 'react'

export default function TextForm(props) {
  return (
    <div>
        <h4>{props.heading}</h4>
        <div className="mb-3">
            <input type="email" className="form-control" id="emailbox" placeholder="Enter Your Email Address"/>
        </div>
        <div className="mb-3">
            <textarea className="form-control" id="reqbox" rows="3" placeholder='Describe Your Feature / Bug Report / Suggestion'></textarea>
        </div>
        <button classNameName="btn btn-primary">Sumbit</button>
    </div>
  )
}

TextForm.defaultProps = {
    heading: 'Contact Me'
}