import React from 'react'

function Card({data,changeFriendStatus,index}) {
  return (
    <div className="card w-72 h-52 bg-zinc-300 rounded-md relative">
          <div className="img w-full h-32 rounded-md overflow-hidden">
            <img
              src={data.img}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold px-6 py-2 text-xl">{data.name}</p>
          <button onClick={()=>changeFriendStatus(index)} className={`${data.isFriend?"bg-red-500":"bg-blue-500"}   rounded-md absolute left-4 px-4 py-1 bottom-2 text-white`}>
            {data.isFriend?"Remove Friend":"Add Friend"}
          </button>
        </div>
  )
}

export default Card