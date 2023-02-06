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

    }
    const handleSupriseMe = () => {

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
                    <div className='realtive bg=[#100000] border btext-white focus:ring-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
                        {form.photo ? (<img src={form.photo} alt={form.prompt}
                            className="w-full h-full object-contain" />) : (<img src={preview} alt='preview' className='w-9/12 h-9/12 object-contain opacity-50' />)}
                            {generatinImg&&(<div>
                                <Loader className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.4)] rounded-lg"/>
                                </div>)}
                    </div>

                </div>
            </form>   </section>
    )
}

export default CreatePost