import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import TypeNames from '../components/TypeNames';
import MainSteps from './MainSteps';

export default function TypeSelect(props) {

  return (
    <div className='container-fluid'>
        <Header/>
        <div className='row'>
           <div className='col-lg-8 col-sm-12 col-md-12'>
                <TypeNames/>
                <div className='row'>
                  <div className='col-lg-3 col-sm-12 col-md-12'>
                  <Link className='prevBtn LinkActive' to="/">Prev</Link>
                  </div>

                  <div className='col-lg-6 col-sm-12 col-md-12'>
                  <MainSteps step1 step2></MainSteps>

                  </div>

                  <div className='col-lg-3 col-sm-12 col-md-12'>
               
                  <Link className='nextBtn LinkActive' to="/ordernow">next</Link>
                  </div>
                </div>
            </div>
            <div className='col-lg-3 col-sm-12 col-md-12 container'>
                <div className='vl'>
                    <h4>PLEASE INPUT ALL THE FIELDS TO SHOW ESTIMATED PRICE</h4>
                </div>
            </div>
        </div>
      
    </div>
  );
}