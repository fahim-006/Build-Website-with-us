import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveFrameworkName } from '../action/FrameworkNameActions';


export default function FrameworkNames() {
    var price;
    var framework;
    const dispatch = useDispatch();
    const submitHandler = (framework) =>{
        //to do
        //e.preventDefault();
        //document.getElementById(framework).className ="list-group-item list-group-item-action flex-column align-items-start activeListElement"
        if(framework == 'Python'){
            price=30000;
            document.getElementById("python").className ="list-group-item list-group-item-action flex-column align-items-start activeListElement"
            document.getElementById("Wordpress").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("Php_Laravel").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("Php_From_Scratch").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("Kajabi").className ="list-group-item list-group-item-action flex-column align-items-start"
        }else if(framework == 'Wordpress'){
            price=10000;
            document.getElementById("python").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("Wordpress").className ="list-group-item list-group-item-action flex-column align-items-start activeListElement"
            document.getElementById("Php_Laravel").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("Php_From_Scratch").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("Kajabi").className ="list-group-item list-group-item-action flex-column align-items-start"
        }else if(framework == 'PHP laravel'){
         // alert(framework)
            price=20000;
            document.getElementById("python").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("Wordpress").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("Php_Laravel").className ="list-group-item list-group-item-action flex-column align-items-start activeListElement"
            document.getElementById("Php_From_Scratch").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("Kajabi").className ="list-group-item list-group-item-action flex-column align-items-start"
        }else if(framework == 'Php (From Scratch)'){
            price=25000;
            document.getElementById("python").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("Wordpress").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("Php_Laravel").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("Php_From_Scratch").className ="list-group-item list-group-item-action flex-column align-items-start activeListElement"
            document.getElementById("Kajabi").className ="list-group-item list-group-item-action flex-column align-items-start"
        }else if(framework == 'Kajabi'){
            price=22000;
            document.getElementById("python").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("Wordpress").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("Php_Laravel").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("Php_From_Scratch").className ="list-group-item list-group-item-action flex-column align-items-start"
            document.getElementById("Kajabi").className ="list-group-item list-group-item-action flex-column align-items-start activeListElement"
        }
        dispatch(
            saveFrameworkName({framework, price})
            );

    }
  return (
   
    <div className="list-group">
    <a id="python" className="list-group-item list-group-item-action flex-column align-items-start" onClick={()=>submitHandler('Python')}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Python</h5>
      </div>
      <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas.</p>
    </a>
  
    <a id="Wordpress" className="list-group-item list-group-item-action flex-column align-items-start" onClick={()=>submitHandler('Wordpress')}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Wordpress</h5>
      </div>
      <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas.</p>
    </a>

    <a id="Php_Laravel" className="list-group-item list-group-item-action flex-column align-items-start" onClick={()=>submitHandler('PHP laravel')}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Php Laravel</h5>
      </div>
      <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas.</p>
    </a>

    <a id="Php_From_Scratch" className="list-group-item list-group-item-action flex-column align-items-start" onClick={()=>submitHandler('Php (From Scratch)')}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Php (From Scratch)</h5>
      </div>
      <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas.</p>
    </a>

    <a id="Kajabi" className="list-group-item list-group-item-action flex-column align-items-start" onClick={()=>submitHandler('Kajabi')}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Kajabi</h5>
      </div>
      <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas.</p>
    </a>
   
  </div>
  
  
  );
}