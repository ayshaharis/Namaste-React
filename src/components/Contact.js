const Contact =()=>{
    return(
        <div>
            <h1>
                Contact Us page
            </h1>
            <form>
                <input placeholder="Name" className="p-2 m-2 border border-black"></input>
                <input placeholder="Message" className="p-2 m-2 border border-black"></input>
               <button className="p-2 m-2 border border-black">Submit</button>
                </form>
        </div>
    )
}

export default Contact;