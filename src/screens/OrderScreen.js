import React from 'react';
import { Link } from 'react-router-dom';
import AddFeatures from '../components/AddFeatures';
import CalculateMainValue from '../components/CalculateMainValue';
import Header from '../components/Header';
import MainSteps from './MainSteps';

export default function OrderScreen(props) {

  return (
    <div className='container-fluid'>
        <Header/>
        <div className='row'>
           <div className='col-lg-8 col-sm-12 col-md-12'>
                <AddFeatures/>
                
                <div className='row'>
                  <div className='col-lg-3 col-sm-12 col-md-12'>
                  <Link className='prevBtn LinkActive' to="/typeselect">Prev</Link>
                  </div>

                  <div className='col-lg-6 col-sm-12 col-md-12'>
                  <MainSteps step1 step2 step3></MainSteps>

                  </div>

                  <div className='col-lg-3 col-sm-12 col-md-12'>
               
                  <Link className='nextBtn LinkInActive' to="#">next</Link>
                  </div>
                </div>
            </div>
            <div className='col-lg-3 col-sm-12 col-md-12'>
                <div className='vl'>
                    <CalculateMainValue/>
                </div>
            </div>
        </div>
      
    </div>
  );
}