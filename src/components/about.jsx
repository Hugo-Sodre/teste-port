import Perfil from '../assets/perfil.jpg'
function About() {
    return (
        <section className='w-full flex flex-col  md:flex-row'>
            <div className="text-third font-bold">
                Sobre mim
            </div>

            
            <div className='flex flex-col md:flex-row'>
            <div className='max-w-[350px]'>
                    <img src={Perfil} className='' alt="Pefil" />
                </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magni et quidem nihil voluptas, nobis ipsa nisi fuga voluptatem mollitia.</div>
            </div>
        </section>
    );
}

export default About;