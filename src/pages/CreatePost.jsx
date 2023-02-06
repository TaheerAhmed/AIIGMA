import React, { useState, useEffect } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { FormField, Loader } from '../Components'
import { getRandomPrompt } from '../utils'


const CreatePost = () => {

    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: ''
    })
    const [generatinImg, setGeneratingImg] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleSubmit = () => {

    }
    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSupriseMe = () => {
        const randomPrompt=getRandomPrompt(form.prompt)
        setForm({...form,prompt:randomPrompt})
    }
    const generateImg=()=>{
        
    }
    return (
        <section className='max-w-7xl mx-auto'>
            <div>
                <h1 className='text-white font-extrabold text-[32px]'>
                    Create
                </h1>
                <p className='mt-2 text-white text-[18] max-w[500px]'>Create Amazing Images made by our Super Aritifcally INtelligent Computer Algorithm Pssst.Show off what you cant do </p>
            </div>
            <form className='mt-16 max-w-3xl text-white' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-5'>
                    <FormField labelName="Name" type="text" name="name" placeholder="JOHNDOE" value={form.name} handleChange={handleChange} />
                    <FormField labelName=" Prompt" type="text" name="prompt" placeholder="A 3D render of a rainbow colored hot air balloon flying above a reflective lake" value={form.prompt} handleChange={handleChange} isSupriseMe handleSupriseMe={handleSupriseMe} />
                    <div className='realtive bg-white border btext-white focus:ring-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
                        {form.photo ? (<img src={form.photo} alt={form.prompt}
                            className="w-full h-full object-contain " />) : (<img src={preview} alt='preview' className='w-9/12 h-9/12 object-contain opacity-50' />)}
                        {generatinImg && (<div className="absolute inset-0 z-0 flex  justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                            <Loader />
                        </div>)}
                    </div>
                </div>
                <div className='mt-5 flex gap-5'>
                    <button type='button' onClick={generateImg} className="text-gray-800 rounded-lg bg-white w-full py-2 hover:bg-black hover:text-white border">

                        {generatinImg?"Generating...":"Generate"}
                    </button>

                </div>
                <div className='mt-10'>
                    <p className='mt-2 text-white text-[14px]'>Once you have created an image you can now share it with your friends</p>
                    <button type="submit" className='w-full py-2 bg-black rounded-lg border mt-5 hover:bg-white hover:text-black text-[16]'>
                        {loading?"Sharing....":"Share with the community"}
                    </button>
                </div>
            </form> 
        </section>
    )
}

export default CreatePost