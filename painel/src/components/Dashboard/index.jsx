import React, { useState } from 'react'
import axios from 'axios'

export const Dashboard = () => {

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
        <section className="sendBanner">
            <div className="form-controller">
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handledChange} placeholder="Título do banner" name="title"  required/>
                    <select type="text" onChange={handledChange} placeholder="Tipo de banner" name="chose" required> 
                        <option value="full"> Banner Completo </option>
                        <option value="half"> Banner Lateral </option>
                    </select>
                    <input type="file" id="files" onChange={handledChange} name="image" required/>
                    <textarea name="description" onChange={handledChange} placeholder="Descrição" cols="30" rows="10" required/>
                    <input type="submit" value="Opa" />
                </form>
            </div>
        </section>
    )
}
