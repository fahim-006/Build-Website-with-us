import React from 'react';

export default function MainSteps(props) {
  return (
    <div className="row main-steps">
      <div className={props.step1 ? 'active' : ''}></div>
      <div className={props.step2 ? 'active' : ''}></div>
      <div className={props.step3 ? 'active' : ''}></div>
    </div>
  );
}