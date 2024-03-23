import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiGhost } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SubscribedChannels() {
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const [channel, setChannel] = useState();
  useEffect(() => {
    const getSubscribedChannel = async () => {
      try {
        const res = await axios.get(
          `https://playitnow-backend.playitnow.co/api/v1/subscription/getSubscribedChannel/${userData._id}`,
          {
            withCredentials: true,
          }
        );
        if (res.status === 200) {
          console.log(res?.data?.data);
          setChannel(res?.data?.data);
        }
      } catch (err) {
        console.log(err.response);
      }
    };
    getSubscribedChannel();
  }, []);
  return (
    <div className="  pb-10">
      <div>
        <h1 className="text-3xl font-bold text-white p-3 ">
          Channels you Subscribed
        </h1>
      </div>
      {channel?.length === 0 && (
        <div className="w-[80vw] h-64 bg-gray-950 shadow-md shadow-gray-800 rounded-md flex flex-col justify-center items-center m-4">
          <BiGhost className="text-white hover:animate-pulse" size={50} />
          <h1 className="font-semibold text-white antialiased">
            No channels subscribed.
          </h1>
        </div>
      )}
      <div className="flex flex-wrap justify-center items-center  gap-10">
        {channel &&
          channel
            .slice()
            .reverse()
            .map((channel) => (
              <div
                key={channel?._id}
                className="hover:bg-slate-600/30 p-4 transition"
                onClick={() =>
                  navigate(`/profile/${channel?.channel[0].username}`)
                }
              >
                <Avatar
                  src={channel?.channel[0].avatar}
                  sx={{ width: 250, height: 250 }}
                />
                <h1 className="text-white font-semibold text-center text-2xl mt-10">
                  {channel?.channel[0].username}
                </h1>
              </div>
            ))}
      </div>
    </div>
  );
}

export default SubscribedChannels;
