import React,{Fragment} from "react"


const  App:React.FC =()=> {


  return (
    <Fragment>
      <div>
        <header className="bg-page-header py-3 px-5">
      
      <nav className="flex items-center justify-between">

        <img src="/public/img/imag1.jpeg" alt="page" className="w-20" />

        <ul className="flex gap-5 text-lg">
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
      </header>

      <main className="w-full text-page-principal-text">
        {/* premio  */}
        <section className="uppercase">

          <article className="py-3 md:px-5 px-10 ">
            <h2 className="text-5xl font-bold font-sans text-center py-10">Primer Sorteo</h2>  
            <div className="flex justify-center">
              <img src="/public/img/img2.jpeg" className="w-full bg-cover h-auto" alt="imga-sort" />   
            </div>
          </article>

          {/* Porcentaje */}
          <article className=" py-3 md:px-5 px-10 ">
            <h3 className="text-3xl font-semibold text-center py-10">
              Increible!!
            </h3>

            {/* <span>
          </span>    */}
            <div className="flex items-center justify-center">
              <div className="block ">
                <p className="font-semibold  text-center">Valor</p>
                <span className="text-3xl font-bold">$11.000</span>
              </div>
            </div>
          </article>

          <article className="bg-page-secondary-color text-white px-5 py-8">
            <h2 className="text-2xl text-center font-bold">Adquiere tus numeros</h2>

            <article className="py-10 grid md:grid-cols-3 gri-cols-1 space-y-5 md:space-y-0 md:space-x-5 space-x-0">

              <div className="border  flex flex-col  border-white-100 wit-fit p-10 rounded-3xl justify-center items-center ">
                <p className="text-4xl font-mono"><span className="text-xl">X</span>3</p>
                <p className="text-md font-thin">darse la oportunidad</p>
                <h3 className="font-semibold text-6xl  pt-5 ">$33.000</h3>
                <p className="text-md font-thin pb-5">Pesos Colombianos </p>
                <button className="py-2 px-5 bg-white text-black font-bold rounded-full">
                  Comprar Entradas 
                </button>
              </div>
              <div className="border  flex flex-col  border-white-100 wit-fit p-10 rounded-3xl justify-center items-center ">
                <p className="text-4xl font-mono"><span className="text-xl">X</span>3</p>
                <p className="text-md font-thin">darse la oportunidad</p>
                <h3 className="font-semibold text-6xl  pt-5 ">$33.000</h3>
                <p className="text-md font-thin pb-5">Pesos Colombianos </p>
                <button className="py-2 px-5 bg-white text-black font-bold rounded-full">
                  Comprar Entradas 
                </button>
              </div>
              <div className="border  flex flex-col  border-white-100 wit-fit p-10 rounded-3xl justify-center items-center ">
                <p className="text-4xl font-mono"><span className="text-xl">X</span>3</p>
                <p className="text-md font-thin">darse la oportunidad</p>
                <h3 className="font-semibold text-6xl  pt-5 ">$33.000</h3>
                <p className="text-md font-thin pb-5">Pesos Colombianos </p>
                <button className="py-2 px-5 bg-white text-black font-bold rounded-full">
                  Comprar Entradas 
                </button>
              </div>


            </article>
          </article>
        </section>
      </main>
    </div>
    </Fragment>
  )
}

export default App
