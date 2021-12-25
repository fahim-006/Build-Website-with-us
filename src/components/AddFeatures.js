import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveFrameworkName } from '../action/FrameworkNameActions';
import { savePagePrice } from '../action/PageNoAction';
import { savePaymentMethod } from '../action/PaymentMethodAction';
import { saveUIUX } from '../action/UIUXaction';


export default function AddFeatures() {
    var priceUIUX;
    var priceGateway;
    var PricePage = 0;
    const dispatch = useDispatch();
   

    const handleRange = (e) =>{
        e.preventDefault();
        if(e.target.value > 3){
            PricePage += 600;
        }
        var TotalPage=e.target.value;
        dispatch(
            savePagePrice({TotalPage, PricePage})
            );
    }
    const handlePaymentMethod = (e, paymentMethod) => {
        e.preventDefault();
        if(paymentMethod == "None"){
            priceGateway = 0;
        }else if(paymentMethod == "Both"){
            priceGateway = 3500;
        }else if(paymentMethod == "Paypal"){
            priceGateway = 2000;
        }else if(paymentMethod == "Stripes"){
            priceGateway = 2000;
        }

        dispatch(
            savePaymentMethod({paymentMethod, priceGateway})
            );
    }

    const handleUIUX = (e, uiux) =>{
        e.preventDefault();
        if(uiux == "yes"){
            priceUIUX = 0;
        }else{
            priceUIUX = 5000;
        }
        dispatch(
            saveUIUX({uiux, priceUIUX})
            );
    }

  return (
   
    <div className="list-group addfeaturesMain">
    <a id="UIUX" className="list-group-item list-group-item-action flex-column align-items-start addfeaturesMain">
    <h3>DO YOU HAVE UX DESIGN READY?</h3>
      <div className="d-flex w-100 justify-content-center">
        <button className="btn btn-light" onClick={(event)=>handleUIUX(event,"yes")}>Yes</button>
        <button className="btn btn-light" onClick={(event)=>handleUIUX(event,"No")}>No</button>
      </div>
    </a>
  
    <a id="pages" className="list-group-item list-group-item-action flex-column align-items-start addfeaturesMain">
    <h3>HOW MANY PAGES DO YOU WANT FOR YOUR PUBLIC WEBSITES?</h3>
      <div className="d-flex w-100 justify-content-between">
         
        <input onChange={handleRange} className='d-flex w-100 justify-content-between' type="range" name='range' min="0" max="100" width="500px"/>
      </div>
    </a>

    <a id="gateway" className="list-group-item list-group-item-action flex-column align-items-start addfeaturesMain">
    <h3>ANY PAYMENT GATEWAY INTREGRATION?</h3>
      <div className="d-flex w-100 justify-content-center">
        <button className="btn btn-light" onClick={(event)=>handlePaymentMethod(event,"Stripes")}>Stripe</button>
        <button className="btn btn-light" onClick={(event)=>handlePaymentMethod(event,"Paypal")}>Paypal</button>
        <button className="btn btn-light" onClick={(event)=>handlePaymentMethod(event,"Both")}>Both</button>
        <button className="btn btn-light" onClick={(event)=>handlePaymentMethod(event,"None")}>None</button>
      </div>
    </a>
  </div>
  );
}