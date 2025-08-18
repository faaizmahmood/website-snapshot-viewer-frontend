/* eslint-disable no-empty-pattern */
import Header from '../../components/header/header'
import styles from './home.module.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import useHome from './useHome'
import { useState } from 'react'
import { PulseLoader } from 'react-spinners'
import { PiEmptyBold } from "react-icons/pi";
import SnapSlider from '../../components/snapSlider/snapSlider'

const Home = () => {
    const {
        domainSchema,
        handleDomainSubmit,
        loading,
        snapshots,
        // error,
    } = useHome()

    // 🔹 State for modal
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedSnap, setSelectedSnap] = useState<any | null>(null)
    

    return (
        <main className={styles.home}>
            <Header />

            <section className={`${styles.hero} container text-center py-5`}>
                <h6>Track Any Domain’s Evolution</h6>
                <h1 className='mt-4'>
                    See How Any Website Has Evolved <br /> <span>Over Time</span>
                </h1>
                <p className='mt-3'>
                    Explore snapshots, Domain Authority, and Page Authority year by year in one simple timeline.
                </p>

                {/* ✅ Formik form */}
                <Formik
                    initialValues={{ domain: '' }}
                    validationSchema={domainSchema}
                    onSubmit={(values) => {
                        handleDomainSubmit(values.domain)
                    }}
                >
                    {({ }) => (
                        <Form>
                            <div className={`${styles.inputContainer} mt-4`}>
                                <Field type="text" name="domain" placeholder="yourwebsite.com" />
                                <button type="submit" className="filled-btn" disabled={loading}>
                                    {loading ? "Checking..." : "Check Domain"}
                                </button>
                            </div>
                            <ErrorMessage name="domain" component="div" className="text-white mt-2" />
                        </Form>
                    )}
                </Formik>

                <p className='mt-4'>
                    Enter any domain to explore its snapshots and SEO authority over the years.
                </p>
            </section>

            {/* Snapshots */}
            <section className={`${styles.snaps} container`}>
                {loading ? (
                    <>
                        <div className='text-center pb-4'>
                            <PulseLoader
                                color="#ffffff"
                                size={8}
                            />
                            <p className="text-center text-white">Loading snapshots...</p>
                        </div>
                    </>
                ) : snapshots.length === 0 ? (
                    <>
                    <p className="text-center text-white pb-5"><PiEmptyBold /> No snapshots found for this domain.</p>
                    </>
                ) : (
                    <div className="row">
                        <SnapSlider snapshots={snapshots} setSelectedSnap={setSelectedSnap} />
                    </div>
                )}
            </section>


            {/* 🔹 Modal */}
            {selectedSnap && (
                <div className={styles.modalOverlay} onClick={() => setSelectedSnap(null)}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
                    >
                        <button className={styles.closeBtn} onClick={() => setSelectedSnap(null)}>
                            ✖
                        </button>
                        <iframe
                            src={selectedSnap.archiveUrl}
                            width="100%"
                            height="100%"
                            sandbox="allow-scripts allow-same-origin"
                            style={{ border: "none" }}
                        ></iframe>
                    </div>
                </div>
            )}
        </main>
    )
}

export default Home
