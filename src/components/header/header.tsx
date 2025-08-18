import logo from '../../assets/imgs/logo.png'
import styles from './header.module.scss'

const Header = () => {
    return (
        <>

            <header className={`${styles.header} row`}>

                <div className="col-3">
                    <img src={logo} />
                </div>

                <div className='col-6'>

                </div>

                <div className='col-3 d-lg-block d-none d-flex justify-content-end gap-3 align-items-center'>

                    <button className='outlined-btn'>Login</button>
                    <button className='filled-btn'>Free Sign Up</button>

                </div>

            </header>

        </>
    )
}

export default Header