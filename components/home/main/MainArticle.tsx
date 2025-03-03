import Search from "@/components/common/search/Search";
import StudyWords from "./studyWords/StudyWords";

export default function MainArticle() {
    return (
        <article
            className="w-full h-[100vh] overflow-hidden bg-[url(/giphy.gif)] bg-no-repeat bg-center bg-fixed bg-cover relative flex flex-col items-center justify-center"
        >
        <div
            className="w-full h-[100vh] bg-[#000000aa] absolute top-0"
        ></div>
            <StudyWords/>
            <Search/>
        </article>
    );
  }
  