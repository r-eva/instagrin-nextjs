import Sidebar from "../sidebar/sidebar";
import {Cog6ToothIcon} from '@heroicons/react/24/outline'
function ProfilePage() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className=" h-screen bg-white w-full pl-52 pr-20">
        <div className=" max-w-6xl mx-5 p-10 xl:mx-auto"></div>
        <div className=" grid grid-cols-4 gap-4">
          <div className=" justify-center">
            <img
              className="rounded-full w-36 h-36"
              src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
            ></img>
          </div>
          <div className=" col-span-2">
            <span className=" text-gray-700 text-2xl mr-3">cornelia_mustika</span>
            <div className=" cursor-pointer inline text-sm text-gray-700 font-semibold p-1 px-2 border border-gray-200 rounded mr-3">Edit Profile</div>
            <div className=" cursor-pointer inline text-sm text-gray-700 font-semibold p-1 px-2 border border-gray-200 rounded mr-3">View Archive</div>
            <Cog6ToothIcon className=" cursor-pointer h-6 inline text-black"/>
            <div className=" mt-4 flex text-black">
              <div className=" font-semibold">20 post</div>
              <div className=" ml-4 font-semibold"> 200 followers</div>
              <div className=" ml-4 font-semibold"> 200 following</div>
            </div>
          </div>
        </div>
        <hr className=" border-gray-500 mt-6"/>
      <div className=" flex justify-center gap-10 -mt-[0.5px]">
        <button className=" focus:border-t border-gray-800 py-8 text-sm font-semibold focus:text-gray-600">
          POST
        </button>
        <button className="focus:border-t border-gray-800 py-8 text-sm font-semibold focus:text-gray-600">
          REELS
        </button>
        <button className="focus:border-t border-gray-800 py-8 text-sm font-semibold focus:text-gray-600">
          SAVED
        </button>
        <button className="focus:border-t border-gray-800 py-8 text-sm font-semibold focus:text-gray-600">
          TAGGED
        </button>
      </div>
      <div className=" grid grid-cols-3 gap-5">
        <div className=" overflow-hidden h-64 object-cover">
          <div>
          <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="post 1"/>
          </div>
        </div>
        <div>
        <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="post 2"/>
        </div>
        <div>
        <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg" alt="post 1"/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProfilePage;
