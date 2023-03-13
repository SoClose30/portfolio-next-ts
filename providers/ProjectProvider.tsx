

import React, { useState } from 'react'

type Props = {
    children: React.ReactNode;
}

export type ContextTypes = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProjectContext = React.createContext<ContextTypes | null>(null);

export const ProjectProvider = ({children}: Props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ProjectContext.Provider value={{isOpen, setIsOpen}}>
        {children}
    </ProjectContext.Provider>
  )
}
