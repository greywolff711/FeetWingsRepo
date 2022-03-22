import React from 'react'

function options(props) {
  return (
    <div class="col-lg-8 col-sm-6">
        <h5>{props.heading}</h5>
        <p>{props.para}</p>
    </div>
  )
}

export default options