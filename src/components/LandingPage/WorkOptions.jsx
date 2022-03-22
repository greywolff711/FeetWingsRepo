import React from 'react'

function work_options(props) {
  return (
    <div class="how-we-work-card">
        <h3 class="text-heading">{props.h}</h3>
        <p class="work-text">{props.p}</p>
    </div>
  )
}

export default work_options