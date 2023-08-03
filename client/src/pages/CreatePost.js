import React from 'react'
import { preview } from '../assets'


export default function CreatePost() {

    function handlechange() {

    }

    return (
        <section>
            <p className='intro'>
                <div className="intro-title">Create</div>
                <div className="intro-description">Create a collection of visually and imaginative stunning images generate by AI. </div>
            </p>
            <form action="" className='Frm'>
                <div className="form-div">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' onChange={handlechange} name='name' />
                </div>
                <div className="form-div">
                    <label htmlFor="name" className='promptlabel'>Prompt   <button>Surprise Me</button></label>
                    <input type="text" placeholder='Random Prompt' onChange={handlechange} name='name' />
                </div>

            </form>
            <div >
                <img src={preview} alt="" className="preview" />
            </div>

            <button className='generate'>Generate</button>

            <div className="share-des">
            ** Once you have generated the image you can share it with the community **
            </div>

            <button className='share'>Share with the Community</button>


        </section>
    )
}
