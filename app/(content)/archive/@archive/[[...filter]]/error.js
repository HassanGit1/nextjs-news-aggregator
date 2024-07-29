'use client'

export default function FilterError ({error}) {
    return <div id="error">
        <h1 className="text-green-400 text-center text-5xl 
        tracking-wider font-black mt-16 mb-4">
           An Error Occurred!
        </h1>
        <p className="text-3xl mt-2 text-center text-green-100">
            {error.message}
        </p>
    </div>
}