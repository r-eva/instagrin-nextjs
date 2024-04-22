function post() {
  return (
    <div className=" bg-white my-7 border">
      <div className=" flex items-center">
        <div className="avatar mr-3">
          <div className=" rounded-full w-10 h-10">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="foto user"
            ></img>
          </div>
        </div>
        <p className=" text-sm font-semibold">username</p>
      </div>
    </div>
  );
}

export default post;
