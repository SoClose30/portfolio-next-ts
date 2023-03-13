import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { ContextTypes, ProjectContext } from '../../providers/ProjectProvider';

type Props = {
    title?: string;
    description?: string;
    technologies?: string;
    link: string;
    isLocal: boolean;
    stateHandler: {
        isOpen: boolean;
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }
}

export default function ProjectInfo({title, description, technologies, link, isLocal, stateHandler}: Props) {
    

    const handleState = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        
        stateHandler.setIsOpen(!stateHandler.isOpen);
        setTimeout(() => {
            window.scrollTo(0, document.body.scrollHeight);
        }, 100)
    }

    let Content;

    if(!stateHandler.isOpen) {
        Content = <><p className="font-bold tracking-tighter self-start text-sm md:text-lg">{title}</p>
        <p className="text-[#BBB] italic mt-1 mb-4 self-start text-xs md:text-base">{description}</p>
        {!isLocal ? <Link href={link} className={`text-[#F2F2F2] bg-slate-600 px-10 py-2 rounded-sm self-start`} target="_blank">
        Visit
        </Link> : <button className={`text-[#F2F2F2] bg-slate-600 px-10 py-2 rounded-sm self-start`} onClick={(e) => handleState(e)}>
        See more
        </button>}</>
    } else {
        Content = <><p className="font-bold tracking-tighter absolute top-7 left-10 md:top-5">{title}</p>
        <p className="text-[#BBB] italic mt-1 mb-4 absolute bottom-20 left-10 whitespace-normal md:top-10">{description}</p>
        <p className="whitespace-normal w-[80%] font-bold text-2xl">{technologies}</p>
        {!isLocal ? <Link href={link} className={`text-[#F2F2F2] bg-slate-600 px-10 py-2 rounded-sm`} target="_blank">
        Visit
        </Link> : <button className={`text-[#F2F2F2] bg-slate-600 px-10 py-2 rounded-sm absolute top-5 right-7`} onClick={(e) => handleState(e)}>
        Close
        </button>}</>
    }

  return (
    <div className={`whitespace-nowrap flex flex-col justify-center items-center`}>
        {Content}
    </div>
  )
}
