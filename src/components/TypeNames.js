import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveFrameworkName } from '../action/FrameworkNameActions';
import { saveSelectedType } from '../action/SelectedTypeAction';


export default function TypeNames() {
    var price;
    const dispatch = useDispatch();
    const submitHandler = (type) =>{
        //to do
        //e.preventDefault();
        if(type == 'My company website with price calculation'){
            price=30000;
            document.getElementById("1").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("2").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("3").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("4").className ="list-group-item list-group-item-action flex-column align-items-start activeListElement"
        }else if(type == 'An ecommerce site'){
            price=50000;
            document.getElementById("1").className ="list-group-item list-group-item-action flex-column align-items-start activeListElement"
            document.getElementById("2").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("3").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("4").className ="list-group-item list-group-item-action flex-column align-items-start"
        }else if(type == 'An online Course Platform'){
            price=40000;
            document.getElementById("1").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("2").className ="list-group-item list-group-item-action flex-column align-items-start activeListElement"
            document.getElementById("3").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("4").className ="list-group-item list-group-item-action flex-column align-items-start"
        }else if(type == 'A Blog Site'){
            price=15000;
            document.getElementById("1").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("2").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("3").className ="list-group-item list-group-item-action flex-column align-items-start activeListElement"
            document.getElementById("4").className ="list-group-item list-group-item-action flex-column align-items-start"
        }

        dispatch(
            saveSelectedType({type, price})
            );

    }
  return (
   
    <div className="list-group">
    <a id="1" className="list-group-item list-group-item-action flex-column align-items-start" onClick={()=>submitHandler('An ecommerce site')}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">An ecommerce site</h5>
      </div>
      <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas.</p>
    </a>
  
    <a id="2" className="list-group-item list-group-item-action flex-column align-items-start" onClick={()=>submitHandler('An online Course Platform')}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">An online Course Platform</h5>
      </div>
      <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas.</p>
    </a>

    <a id="3" className="list-group-item list-group-item-action flex-column align-items-start" onClick={()=>submitHandler('A Blog Site')}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">A Blog Site</h5>
      </div>
      <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas.</p>
    </a>

    <a id="4" className="list-group-item list-group-item-action flex-column align-items-start" onClick={()=>submitHandler('My company website with price calculation')}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">My company website with price calculation</h5>
      </div>
      <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas.</p>
    </a>
  </div>
  
  
  );
}