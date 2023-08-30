const Footer = () => {
  return (
    <footer className="bg-black text-gega-grey">
        <div className="container  flex flex-col md:flex-row px-10 lg:px-0 pb-8">
          <div className="basis-1/3">
          <a href="#" className="text-2xl lg:text-3xl font-bold text-gega-grey text-transparent bg-gradient-to-r bg-clip-text from-gega-red to bg-gega-grey">
           GEGA
          </a>
           <p className="text-sm mt-2">2023 GEGA No &copy; COPYRIGHT </p>
          </div>
          <div className="basis-1/3">
            <h2 className="mb-2 text-gega-red cursor-pointer hover:text-gega-melon transition duration-500">LINKS</h2>
            <div className="grid grid-cols-5 gap-2 uppercase">
              <a href="#" className="col-span-2 hover:text-gega-red transition duration-500">Home</a>
              <a href="#" className="col-span-2 hover:text-gega-red transition duration-500">Celebrities</a>
              <a href="#" className="col-span-2 hover:text-gega-red transition duration-500">Blog</a>
              <a href="#" className="col-span-2 hover:text-gega-red transition duration-500">News</a>
              <a href="#" className="col-span-2 hover:text-gega-red transition duration-500">Contact</a>
            </div>
          </div>
          <div className="basis 1/3">
            <h2 className="mb-2 text-gega-red cursor-pointer hover:text-gega-melon transition duration-500">Follow Us</h2>
            <form action="" className="flex">
              <input className="py-1 px-2 outline-none placeholder:text-xs placeholder:uppercase bg-transparent border border-gega-red" placeholder="Enter your email address" type="text" />
              <button className="py-1 px-2 border border-gega-red bg-gega-red font-gemunu uppercase">Subscribe</button>
            </form>
          </div>
        </div>
    </footer>
  )
}

export default Footer