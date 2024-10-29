import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import styles from'./styles/footer.module.css';

function Footer(){
    return(
        <footer className={styles.footer}>
            <section>
                <div className={styles.divFooterMain}>
                    <div>
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaLinkedin/>
                    </div>
                    <div>
                        <p><b>Costs</b> &copy;2024</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;