import React, { useState } from 'react'
import axios from 'axios'

const Dashboard = () => {

    const [ asset, setAsset ] = useState({});
    const [ posted, setPosted ] = useState(false);


    function handleSubmit(e){

        e.preventDefault();

        const fileInput = document.getElementById("files");
        const data = new FormData();
      
        data.append('bannerdata', JSON.stringify( asset ));
        data.append('image', fileInput.files[0] );

        console.log('data:', data, 'assets:', asset);
      
        axios.post('http://localhost:5000/cadastrar/banner', data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => response);
    }

    function handledChange({target}){
        if(target.type != 'file'){
            setAsset({
                ...asset,
                [target.name]: target.value,
            })
        }
    }

    if(posted){
        return (
          <div className="control-form">
              <h1> Cadastrado com sucesso! </h1>
          </div>
        )
    }

    return (
        <section className="dashboard-controller">
            <h1>Dashboard</h1>
        </section>
    )
}

export default Dashboard;