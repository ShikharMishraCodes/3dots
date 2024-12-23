import React from "react";
import songPic from "../assets/song-pic.png";
import { Pause, SkipBack, SkipForward, Play } from "lucide-react";

function HomePage() {
  const pianoKeys = Array(61).fill(null); // 52 keys for a standard piano interface

  // function to determine if a key is black
  const isBlackKey = (index) => {
    const keyPattern = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0]; // 0 for white, 1 for black
    return keyPattern[index % 12] === 1;
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
            <Pause className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-orange-500 text-2xl font-bold">CHAPTER 1</h1>
            <p className="text-orange-500">5 FINGERS 5 NOTES</p>
          </div>
        </div>
      </div>


      {/* Hero Section */}
      <div className="flex gap-8 mt-9">
        {/* Right Side Image */}
        <div className="absolute z-10 w-80 right-10 top-14 bg-gray-800/85 backdrop-blur-xl rounded-lg p-4">
          {/* <div className="aspect-video bg-gray-900 rounded-lg mb-4" /> */}
          <img className="aspect-video bg-gray-900 rounded-lg mb-4" src={songPic} />

          <div className="flex flex-col items-center gap-4">
            <div className="w-full bg-gray-700 h-1 rounded-full">
              <div className="w-1/3 h-full bg-orange-500 rounded-full" />
            </div>

            <div className="flex items-center gap-8">
              <SkipBack className="w-6 h-6 text-white" />
              <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                <Pause className="w-6 h-6 text-white" />
              </div>
              <SkipForward className="w-6 h-6 text-white" />
            </div>

            <div className="w-full">
              <div className="text-orange-500 mb-2 text-sm">LYRICS</div>
              <div className="text-gray-400 text-xs">
                <p>Chiru Chiru Chinukai Kurisaave</p>
                <p>Maru Kshanamuna Marugai Poyaave</p>
              </div>
            </div>
          </div>
        </div>

        {/* Piano ki Strings aur Paino ki Keys */}
        <div className="flex-grow">
          {/* Piano ki Strings */}
          <div className="h-48 relative mb-8">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-px bg-gray-700"
                style={{ top: `${i * 14}%` }}
              />
            ))}
            {/* Note Blocks */}
            <div className="absolute left-1 top-1/4 w-16 h-2 bg-purple-500 rounded" />
        
            <div className="absolute left-1/2 top-1/2 w-36 h-2 bg-blue-500 rounded" />
            <div className="absolute right-3/4 top-1/3 w-36 h-2 bg-blue-500 rounded" />
            <div className="absolute left-3/4 top-3/4 w-16 h-2 bg-green-500 rounded" />
            <div className="absolute right-3/4 bottom-0 w-16 h-2 bg-purple-200 rounded" />
            <div className="absolute left-3/4 top-3/4 w-16 h-2 bg-green-500 rounded" />
            <div className="absolute right-1/4 bottom-1 w-16 h-2 bg-green-500 rounded" />
          </div>

          {/* Piano vala button aur Paino ki Keys */} 
          <div className="overflow-hidden mt-16">
            {/* Piano vala button */}
            <div className="left-4 top-4 m-4">
              <div className="bg-orange-900 text-orange-500 px-3 py-1 rounded-md inline-flex items-center">
                <span>PIANO</span>
                <div className="ml-2 w-8 h-4 rounded-full bg-gray-700 flex items-center px-1">
                  <div className="w-3 h-3 rounded-full bg-orange-500" />
                </div>
              </div>
            </div>

            {/* Piano keys  */}
            <div className="w-full flex">
              {pianoKeys.map((_, i) => (
                <div
                  key={i}
                  className={`relative ${
                    isBlackKey(i)
                      ? "w-6 h-32 -mx-3 z-10 bg-gray-900"
                      : "w-10 h-48 bg-white"
                  } ${!isBlackKey(i) ? "border border-gray-200" : ""}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default HomePage;

