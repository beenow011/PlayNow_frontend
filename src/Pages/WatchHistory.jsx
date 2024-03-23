import axios from "axios";
import React, { useEffect, useState } from "react";
import ActionAreaCard from "../components/HomeCard";

function WatchHistory() {
  const [videos, setVideos] = useState();
  useEffect(() => {
    const getWatchHistory = async () => {
      try {
        const res = await axios.get(
          "https://playitnow-backend.playitnow.co/api/v1/users/get-watch-history",
          {
            withCredentials: true,
          }
        );
        console.log(res);
        if (res?.data?.success) {
          setVideos(res?.data?.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getWatchHistory();
  }, []);
  console.log(videos);
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-white mb-10 p-3 ">
          Watch History
        </h1>
        {videos?.length === 0 && (
          <div className="w-[80vw] h-64 bg-gray-950 shadow-md shadow-gray-800 rounded-md flex flex-col justify-center items-center m-4">
            <BiGhost className="text-white hover:animate-pulse" size={50} />
            <h1 className="font-semibold text-white antialiased">No videos.</h1>
          </div>
        )}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 justify-center flex-wrap">
          {videos &&
            videos
              .slice()
              .reverse()
              .map((vid) => (
                <li
                  key={vid?._id}
                  className=" hover:shadow-violet-700 hover:shadow-xl transition 
                  border-2 border-violet-700 p-2 rounded-md"
                >
                  <ActionAreaCard {...vid} />
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default WatchHistory;
