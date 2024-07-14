import {create} from 'zustand'

type MessageStoreType ={
    message: string,
    setMessage: (message: string)=> void;
}

                                                //callback function with argument 'set' that returns an object
const useMessageStore = create<MessageStoreType>((set)=>({
    message:'',
    setMessage:(message: string)=>set({message})
}))

export default useMessageStore