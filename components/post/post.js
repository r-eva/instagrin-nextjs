import { BookmarkIcon, ChatBubbleOvalLeftIcon, EllipsisHorizontalIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
function Post() {
    return (
      <div className=" bg-white my-7 border">
        <div className=" flex items-center p-4">
          <div className="avatar mr-3">
            <div>
              <img className=" rounded-full w-10 h-10"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="foto user"
              ></img>
            </div>
          </div>
          <p className=" flex-1 text-sm font-semibold text-black">username</p>
          <EllipsisHorizontalIcon className=' h-5 text-black'/>
        </div>
        <img className="w-100" src="https://images.unsplash.com/photo-1498598457418-36ef20772bb9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHx8MA%3D%3D">
        </img>
        <div className=' flex justify-between p-4 cursor-pointer'>
          <div className=' flex space-x-4 items-center cursor-pointer'>
            <HeartIcon className=' h-6 text-black cursor-pointer'/>
            <ChatBubbleOvalLeftIcon className=' h-6 text-black cursor-pointer'/>
            <PaperAirplaneIcon className=' h-6  text-black cursor-pointer rotate-[-45deg]'/>
          </div>
          <BookmarkIcon className='h-6 text-black'/>
        </div>
        <div className=' px-4 truncate text-black'>
        <p className=' font-semibold mb-1 text-sm'>23 Likes</p>
        <span className=' font-semibold mr-1 text-sm text-black'>ckMobile</span>
        Nice View!!
        </div>
        <div className=' px-4 text-sm mb-1 text-gray-400 cursor-pointer'> View All 4 comments
        </div>
        <input className=' px-4 text-sm mb-1 text-gray-400' placeholder='Add a comment...'></input>
      </div>
    );
  }
  
  export default Post;
  