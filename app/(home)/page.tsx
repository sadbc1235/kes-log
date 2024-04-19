import MainText from "../../components/mainText";
import styles from "../../styles/home.module.css"

export default function HomePage() {

    return (
        <>
            <div className={styles.background}>
                <img src="/nature-3507_512.gif" />
                <div className={styles.filter}></div>
            </div>
            <MainText/>
        </>
    );
}