import Link from "next/link";
export default function Suggested({ data }) {
  console.log("console suggest", data);
  return (
    <div className="p-3">
      <div className="flex flex-row gap-3">
        <div>
          <img
            className="inline-block size-10 rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="foto user"
          ></img>
        </div>
        <div className="text-left mr-4">
          <h3 className="text-base text-black">Cornelia Mustika</h3>
          <p className="text-sm">Cornelia Mustika</p>
        </div>
        <div>
          <Link className="text-sm text-blue-500" href="">Switch</Link>
        </div>
      </div>
      <div className=" flex flex-row text-base font-semibold text-gray-400 gap-16">
        <h3 className="text-left">Suggested for you </h3>
        <Link className=" " href=''>See All</Link>
      </div>
      <div>
        {data.map((user, index) => (
          <div className=" flex flex-row gap-3 mb-2">
            <div>
              <img
                className="inline-block size-10 rounded-full"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="foto user"
              ></img>
            </div>
            <div className=" text-left mr-5" key={index}>
              <h3 className=" text-base text-black">{user.name}</h3>
              <p className=" text-sm">Suggested for you</p>
            </div>
            <div>
              <Link className=" text-sm text-blue-500" href="">
                Follow
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
