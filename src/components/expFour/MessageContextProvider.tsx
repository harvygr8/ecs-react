import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type MessageContextProps={
  message: string,
  setMessage: (message: string)=>void
}

export const MessageContext = createContext<MessageContextProps>({
  //default values
  message: '',
  setMessage: ()=>{} 
});


type MessageProviderProps={
    children: ReactNode
}

export const MessageProvider=({ children }:MessageProviderProps) => {
  const [message, setMessage] = useState<string>('');

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
