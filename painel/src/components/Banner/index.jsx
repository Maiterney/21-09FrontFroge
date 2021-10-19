import React, { useRef, useState } from 'react'
import axios from 'axios'

const Banner = () => {

    const [ asset, setAsset ] = useState({});
    const [ posted, setPosted ] = useState(false);
    const fileName = useRef(null);


    function handleSubmit(e){

        e.preventDefault();

        const fileInput = document.getElementById("files");
        const data = new FormData();
      
        data.append('bannerdata', JSON.stringify( asset ));
        data.append('image', fileInput.files[0] );

        console.log('data:', data, 'assets:', asset);
      
        axios.post('https://frontfroge2109.herokuapp.com/banners/cadastrar', data, {
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

    function fileChange({target}){
        //console.log(target);
        //console.log(target.files)
        let fileRead = new FileReader();
        if(target.files[0] != undefined){
            fileRead.readAsDataURL(target.files[0]);
            fileRead.onload = e => {
                fileName.current.children[1].src = e.target.result;
                fileName.current.children[1].classList.add('active');
            }
    
            fileName.current.children[0].innerText = target.files[0].name;
            //fileName.current.children[1].src = target.files[0].name;
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
                    <label className="input-file" htmlFor="files" ref={fileName}> 
                        <span>Imagem do Banner</span>
                        <img src="" alt="" />
                    </label>
                    <input type="file" id="files" onChange={fileChange} name="image" required/>
                    <textarea name="description" onChange={handledChange} placeholder="Descrição" cols="30" rows="10" required/>
                    <input type="submit" value="Opa" />
                </form>
            </div>
        </section>
    )
}

export default Banner;