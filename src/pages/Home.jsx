import React, { useState, useEffect } from 'react'
import { Loader, Card, FormField } from '../components'



const RenderCards=({data,title})=>{
    if (data?.length>0) { return data.map((post)=>
       <Card key={post._id}{...post}/>
    )}
    return (
        <h2 className='mt-5 font-bold text-white text-xl uppercase'>{title}</h2>
    )

}



const Home = () => {
    const [loading, setLoading] = useState(false)
    const [allPosts, setAllPosts] = useState(null)
    const [searchText, setSearchText] = useState('abc')
    return (
        <section className='max-w-7x1 mx-auto'>
            <div>
                <h1 className='text-white font-extrabold text-[32px]'>
                    Community Showcase
                </h1>
                <p className='mt-2 text-white text-[18] max-w[500px]'>Browser Through Amazing Images made by our Super Aritifcally INtelligent Computer Algorithm Pssst. This isnt the Terminator dont Worry</p>
            </div>
            <div className='mt-16'>
                <FormField />
            </div>
            <div className='mt-10'>
                {loading ? (<div className='flex justify-center items-center'>
                    <Loader />
                </div>) : (<>
                    {searchText && (
                        <h2 className='font-medium text-white text-xl mb-3'>
                            Shwoing Results for <span className='text-white'>
                                {searchText}
                            </span>
                        </h2>
                    )}  
                    <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grids-cols-2 grid-cols-1 gap-3'>
                        {searchText?(<RenderCards data={[]} title="No Search Results Found"/>):(<RenderCards data={[]} title="no posts found"/>)}
                    </div>
                </>)}
            </div>



        </section>
    )
}

export default Home