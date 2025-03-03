import { useEffect, useState } from "react";
import styles from './StudyWords.module.css';

export default function StudyWords() {
    const [studyWord, setStudyWord] = useState('');
    const [wordIdx, setWordIdx] = useState(0);
  
    const handle = {
      writeWord: (word:string) => {
        let idx = 0;
        const interval = setInterval(() => {
          if(word.length > idx) idx++;
          setStudyWord(word.substring(0, idx));
        }, 100);
        setTimeout(() => {
          clearInterval(interval);
        }, word.length * 100);
      }
      , removeWord: (word:string) => {
        let idx = word.length - 1;
        const interval = setInterval(() => {
          if(0 < idx) idx--;
          setStudyWord(word.substring(0, idx));
        }, 100);
        setTimeout(() => {
          clearInterval(interval);
        }, word.length * 100);
      }
    }
  
    useEffect(() => {
      const words = ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL', 'GraphQL', 'RESTful API', 'WebSocket', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Firebase', 'OAuth', 'JWT', 'CI/CD', 'TDD', 'BDD', 'Jest', 'Mocha', 'Chai', 'Cypress', 'Puppeteer', 'Selenium', 'Jenkins', 'Git', 'GitHub', 'GitLab', 'Bitbucket', 'Slack', 'Jira', 'Confluence', 'Trello', 'Notion', 'Figma', 'Adobe XD', 'Sketch', 'Zeplin', 'InVision', 'WebStorm', 'VSCode', 'Sublime Text', 'Atom', 'Vim', 'IntelliJ', 'Eclipse', 'NetBeans', 'Visual Studio', 'Xcode', 'Android Studio', 'Postman', 'Insomni'];
      // const words = ['Android Studio', 'Android Studio'];
      const word = words[wordIdx];
      handle.writeWord(word);
      setTimeout(() => { 
        handle.removeWord(word);
      }, word.length * 300);
      setTimeout(() => { 
        if(words.length <= wordIdx+1) setWordIdx(0);
        else setWordIdx(wordIdx+1);
      }, word.length * 600);
    }, [wordIdx]);

    return (
        <div className="w-full relative z-10 text-white flex items-cnter justify-center mb-20 max-sm:mb-10">
          <div className={`pl-2 pr-2 w-2/5 max-xl:w-3/5 max-sm:w-3/4 mainArticleMediaWidth`}>
            <div
              className="text-6xl max-xl:text-5xl max-md:text-4xl max-sm:text-2xl"
            >
              <h2>Keep Calm</h2>
              <h2 className="mt-2 max-sm:mt-0">& Keep Study</h2>
            </div>
            <div className="text-[#8ab0ef] font-bold mt-5 max-sm:mt-3 text-7xl max-xl:text-6xl max-md:text-5xl max-sm:text-3xl">
              {studyWord}
              <span 
                className="inline-block ml-2 bg-white blink w-[4px] h-[60px] max-xl:h-[50px] max-md:h-[40px] max-sm:h-[30px] max-sm:w-[2px]"
              ></span>
            </div>
          </div>
        </div>
    );
  }
  