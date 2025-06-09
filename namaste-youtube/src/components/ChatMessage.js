import React from 'react'
import { USER_ICON } from '../utility/constant'

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center border border-b border-gray-300 my-2 shadow-sm">
      <img className="w-12 h-12 rounded-lg" alt="" src={USER_ICON} />

      <p className="ml-2  font-bold text-md">{name}</p>
      <p className="ml-3  text-sm">{message}</p>
    </div>
  )
}

export default ChatMessage