'use client'
import { useEffect, useState } from "react";
import IconDoubleArrowRight from "./icon/IconDoubleArrowRight";

export default function Pagination({lastIdx}:{lastIdx:number}) {

    const handle = {
        search: (idx:number) => {
            setCurIdx(idx);
        }
    }

    const [pageIndxList, setPageIndxList] = useState<number[]>([]);
    const [curIdx, setCurIdx] = useState(1);
    const [startIdx, setStartIdx] = useState(1);
    const [endIdx, setEndIdx] = useState((lastIdx < 5 ? lastIdx : 4));

    useEffect(() => {
        if(lastIdx < 5) {
            setStartIdx(1);
            setEndIdx(lastIdx);
        } else if(curIdx == 1) {
            setStartIdx(1);
            setEndIdx(4);
        } else if(curIdx == lastIdx) {
            setStartIdx(lastIdx-3);
            setEndIdx(lastIdx);
        } else if(endIdx == curIdx) {
            if(!(endIdx+2 > lastIdx)) {
                setStartIdx(endIdx-1);
                setEndIdx(endIdx+2);
            } else {
                setStartIdx(lastIdx-3);
                setEndIdx(lastIdx);
            }
        } else if(startIdx == curIdx) {
            if(!(startIdx-2 < 1)) {
                setStartIdx(startIdx-2);
                setEndIdx(startIdx+1);
            } else {
                setStartIdx(1);
                setEndIdx(4);
            }
        }
    }, [curIdx]);

    useEffect(() => {
        let _pageIndxList = []
        for(let i=startIdx; i<=endIdx; i++) {
            _pageIndxList.push(i);
        }
        setPageIndxList(_pageIndxList);
    }, [startIdx]);

    return (
        <div 
            className="w-full h-[50px] absolute bottom-0 flex gap-4 justify-center items-center text-[#8ab0ef]"
        >
            {curIdx > 1 && <IconDoubleArrowRight className="w-[20px] h-[20px] fill-[#8ab0ef] cursor-pointer rotate-180" onClick={handle.search.bind(null, 1)}/>}
            {startIdx > 1 && '...'}
            <div className="flex gap-4">
                {
                    pageIndxList.map((item:any, idx:number) => (
                        <span key={idx} className={"px-2 rounded-full cursor-pointer "+(item == curIdx && 'bg-[#EFF8FF]')} onClick={handle.search.bind(null, item)}>{item}</span>
                    ))
                }
            </div>
            {endIdx < lastIdx && '...'}
            {curIdx != lastIdx && <IconDoubleArrowRight className="w-[20px] h-[20px] fill-[#8ab0ef] cursor-pointer" onClick={handle.search.bind(null, lastIdx)}/>}
        </div>
    )
}