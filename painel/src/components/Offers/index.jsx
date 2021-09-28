import React, { useRef, useState } from 'react'
import axios from 'axios'

const Offers = () => {

    const [ asset, setAsset ] = useState({});
    const [ posted, setPosted ] = useState(false);
    const checkRatingRef = useRef(null);
    const fileName = useRef(null);


    function handleSubmit(e){

        e.preventDefault();

        const fileInput = document.getElementById("files");
        const data = new FormData();
      
        data.append('offerdata', JSON.stringify( asset ));
        data.append('image', fileInput.files[0] );

        console.log('data:', data, 'assets:', asset);
      
        axios.post('http://localhost:5000/offers/cadastrar', data, {
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

        console.log(asset);
    }

    function ratingChange({target}){

        let Totalratings = target.dataset.rating;
        let currentRating = checkRatingRef.current.children;

        //target.classList.toggle('active');

        for(let rate = 0; rate <= Totalratings-1; rate++){
            currentRating[rate].classList.toggle('active');
        }

        setAsset({
            ...asset,
            'rating': target.dataset.rating
        })
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
                    <input type="text" onChange={handledChange} placeholder="Título da oferta" name="title"  required/>
                    <div className="rating" ref={checkRatingRef}>
                        <label onClick={ratingChange} htmlFor="rating-1" data-name="rating" data-rating="1"> 
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-rating"><path className="path-props" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        </label>
                        <label onClick={ratingChange} htmlFor="rating-2" data-rating="2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-rating"><path className="path-props" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        </label>
                        <label onClick={ratingChange} htmlFor="rating-3" data-rating="3">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-rating"><path className="path-props" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        </label>
                        <label onClick={ratingChange} htmlFor="rating-4" data-rating="4">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-rating"><path className="path-props" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        </label>
                        <label onClick={ratingChange} htmlFor="rating-5" data-rating="5">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-rating"><path className="path-props" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        </label>
                    </div>
                    <label className="input-file" htmlFor="files" ref={fileName}> 
                        <span>Imagem da oferta</span>
                        <img src="" alt="" />
                    </label>
    
                    <input type="file" id="files" name="image" onChange={fileChange} required/>

                    <textarea name="description" onChange={handledChange} placeholder="Descrição" cols="30" rows="10" required/>
                    <input type="submit" value="Opa" />
                </form>
            </div>
        </section>
    )
}

export default Offers;