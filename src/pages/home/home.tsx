import Header from '../../components/header/header'
import styles from './home.module.scss'

const Home = () => {
    return (
        <>

            <main className={styles.home}>

                <Header />

                <section className={`${styles.hero} container text-center py-5`}>

                    <h6>Track Any Domain’s Evolution</h6>

                    <h1 className='mt-4'>See How Any Website Has Evolved <br /> <span>Over Time</span> </h1>

                    <p className='mt-3'>Explore snapshots, Domain Authority, and Page Authority year by year in one simple timeline.</p>


                    <div className={`${styles.inputContainer} mt-4`}>

                        <input type='text' placeholder='yourwebsite.com' />

                        <button className='filled-btn' >Check Domain</button>

                    </div>

                    <p className='mt-4'>Enter any domain to explore its snapshots and SEO authority over the years.</p>

                </section>

            </main>

        </>
    )
}

export default Home