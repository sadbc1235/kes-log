"use client"
import { useEffect, useState } from "react";
import styles from "../styles/mainText.module.css";

export default function MainText() {
    const [idx, setIdx] = useState(0);
    const [word, setWord] = useState('');
    const [wordIdx, setWordIdx] = useState(0);
    const [wordList, setWordList] = useState([
        'Spring'
        , 'Nest.js'
        , 'Javascript'
        , 'Node.js'
        , 'CSS'
        , 'Java'
        , 'Next.js'
        , 'Typescript'
        , 'SQL'
    ]);
    const [isWrite, setIsWrite] = useState(true);

    const writeWord = (_word) => {
        if(isWrite) {
            setWord(_word.substring(0, idx));
            setTimeout(() => {
                setIdx( (idx+1) );
            }, 50);
            if(idx == _word.length) {
                setTimeout(() => {
                    setIsWrite(false);
                }, 1000);
            }
        }
    }

    const removeWord = (_word) => {
        if(!isWrite) {
            setWord(_word.substring(0, idx));
            setTimeout(() => {
                setIdx( (idx-1) );
            }, 50);
            if(idx == 0) {
                setWordIdx( (wordIdx == wordList.length-1 ? 0 : wordIdx+1) );
                setTimeout(() => {
                    setIsWrite(true);
                }, 300);
            }
        }
    }

    useEffect(() => {
        writeWord(wordList[wordIdx]);
        removeWord(wordList[wordIdx]);
    }, [idx]);

    return (
        <section className={styles.container}>
            <article className={styles.mainText}>
                <div className={styles.textBox}>
                    <p>Keep Calm and</p>
                    <p>
                        Keep Studying&nbsp;
                        <span className={styles.word}>{word}</span>
                        <span className={styles.cursor}></span>
                    </p>
                </div>
            </article>
        </section>
    )
}