import Button from '../components/Button'
import { statistics } from "../constants"
import { arrowRight } from '../assets/icons'

const Hero = () => {
    return (
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
            <div className="relative xl:2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-coral-red">Our Summer collections</p>
                <h1 className="max-sm:text-[72px] text-8xl font-palanquin font-bold max-sm:leading-[82px] mt-10">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span><br />
                    <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
                </h1>
                <p className="text-lg text-slate-400 font-montserrat leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
                <Button label="Shop now" iconUrl={arrowRight}/>
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    { statistics.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                            <p className="text-lg text-slate-400 font-montserrat leading-7">{stat.label}</p>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}

export default Hero