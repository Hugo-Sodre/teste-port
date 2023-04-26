
function Landing() {
    return (
        <section className='font-bold h-screen flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-4 md:gap-6'>
                <div>
                    <h1 className='text-secundary '>
                        Olá, meu nome é
                    </h1>
                    <h1 className='text-third text-2xl '>Hugo Silva Sodré</h1>
                    <span className='text-[#8892b0] text-2xl '>Lorem ipsum dolor sit amet.</span>

                    <p className='text-[#8892b0]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laborum eveniet, culpa id autem nostrum.
                    </p>
                </div>

                <a href="#" className='py-2 px-3 border border-secundary w-32 text-center text-secundary rounded-md duration-[0.6s] hover:shadow-[3px_3px_0_#64ffda]'>Sobre mim</a>
            </div>

            
        </section>
       
        
    );
}

export default Landing;