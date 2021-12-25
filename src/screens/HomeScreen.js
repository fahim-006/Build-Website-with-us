import React from 'react';
import { Link } from 'react-router-dom';
import FrameworkNames from '../components/FrameworkNames';
import Header from '../components/Header';
import MainSteps from './MainSteps';

export default function HomeScreen(props) {

  return (
    <div className='container-fluid'>
        <Header/>
        <div className='row'>
           <div className='col-lg-8 col-sm-12 col-md-12'>
                <FrameworkNames/>
                <div className='row'>
                  <div className='col-lg-3 col-sm-12 col-md-12'>
                  <Link className='prevBtn LinkInActive' to="#">Prev</Link>
                  </div>

                  <div className='col-lg-6 col-sm-12 col-md-12'>
                  <MainSteps step1></MainSteps>

                  </div>

                  <div className='col-lg-3 col-sm-12 col-md-12'>
               
                  <Link className='nextBtn LinkActive' to="/typeselect">next</Link>
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