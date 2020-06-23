import React from "react"
import { motion } from "framer-motion"
import Button from "../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Regular lined icons
import { faBell as farBell } from '@fortawesome/free-regular-svg-icons'
import { faCommentAlt as farCommentAlt } from '@fortawesome/free-regular-svg-icons'
import { faGem as farGem } from '@fortawesome/free-regular-svg-icons'
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons'

// Filled icons
import { faArrowLeft, faArrowRight, faCog, faHeart, faBell, faSearch, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className="z-30 inset-x-0 top-0 relative py-2 px-3 bg-gray-800 border-b-2 border-gray-900">
      <nav className="flex items-center justify-between space-x-4">
        <div className="leading flex w-1/2 md:w-1/3 items-center justify-start sm:space-x-8 md:space-x-4 lg:space-x-8 text-sm xl:text-lg">
          <a href="" className="flex items-center justify-center">
            <svg width="144" height="168" viewBox="0 0 144 168" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.5 0L0.5 30V138H36.5V168L66.5 138H90L144 84V0H30.5Z" fill="#8552F6"/>
                <path d="M36 102V12H132V78L108 102H84L59.5 126.5V102H36Z" fill="white"/>
                <rect x="72" y="36" width="12" height="36" fill="#8552F6"/>
                <rect x="102" y="36" width="12" height="36" fill="#8552F6"/>
            </svg>
          </a>
          <div className="nav-menu flex items-center space-x-8 md:space-x-4 xl:space-x-10">
            <a href="" className="transition ease-in-out duration-200 hover:text-purple-400"><span className="hidden md:block">Following</span><div className="w-5 h-5 block md:hidden rounded bg-white"></div></a>
            <a href="" className="transition ease-in-out duration-200 hover:text-purple-400"><span className="hidden md:block">Browse</span><div className="w-5 h-5 block md:hidden rounded bg-white"></div></a>
            <a href="" className="transition ease-in-out duration-200 hover:text-purple-400"><span className="hidden md:block">Esports</span><div className="w-5 h-5 block md:hidden rounded bg-white"></div></a>
            <a href="" className="transition ease-in-out duration-200 hover:text-purple-400"><span className="hidden md:block">Music</span><div className="w-5 h-5 block md:hidden rounded bg-white"></div></a>
            <button className="p-2 hidden md:block rounded-lg transition ease-in-out duration-300 hover:bg-gray-600">
                <div className="w-4 h-4 flex items-center justify-center">
                    <FontAwesomeIcon icon={faEllipsisH} />
                </div>
            </button>
          </div>
        </div>
        <div className="center hidden md:flex md:w-1/3 justify-center">
          <div className="flex flex-grow max-w-sm divide-x divide-gray-800">
            <input type="text" placeholder="Search" className="flex-grow py-2 px-3 text-sm leading-none text-white rounded-l-lg placeholder-gray-400 bg-gray-600 outline-none border-2 border-transparent focus:border-purple-500 focus:bg-gray-900"/>
            <button className="w-8 px-4 flex items-center justify-center rounded-r-lg bg-gray-600 opacity-50">
              <div className="w-4 h-4 flex items-center justify-center">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </button>
          </div>
        </div>
        <div className="trailing flex w-1/2 md:w-1/3 items-center justify-end space-x-4">
          <div className="actions flex space-x-2">
            <button className="p-2 rounded-lg transition ease-in-out duration-300 hover:bg-gray-600">
              <div className="w-4 h-4 flex items-center justify-center">
                <FontAwesomeIcon icon={farBell} />
              </div>
            </button>
            <button className="p-2 rounded-lg transition ease-in-out duration-300 hover:bg-gray-600">
              <div className="w-4 h-4 flex items-center justify-center">
                <FontAwesomeIcon icon={farCommentAlt} />
              </div>
            </button>
            <button className="hidden md:block text-xs font-semibold leading-none flex items-center py-1 px-3 space-x-2 rounded text-white bg-gray-600 transition ease-in-out duration-300 hover:bg-gray-500">
              <FontAwesomeIcon icon={farGem} className="w-3 h-3" />
              <span>Get Bits</span>
            </button>
          </div>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 transition ease-in-out duration-300 hover:bg-purple-500">
            <FontAwesomeIcon icon={farUser} />
          </button>
        </div>
      </nav>
    </header>
  )
}

const SideMenu = () => {
  return (
    <div className="z-20 sticky inset-y-0 left-0 md:w-12 lg:w-64 bg-gray-700">
      <div className="wrapper flex flex-col space-y-4 h-full justify-between">
        <nav className="space-y-2">
          <div className="section">
            <div className="header py-1 px-2 flex items-center justify-center lg:justify-between">
              <h5 className="text-xs uppercase font-semibold hidden lg:block">Followed Channels</h5>
              <button className="p-2 rounded-lg transition ease-in-out duration-300 hover:bg-gray-600 hidden lg:block">
                <div className="w-4 h-4 flex items-center justify-center">
                <FontAwesomeIcon icon={faArrowLeft} />
                </div>
              </button>
              <div className="w-4 h-4 rounded bg-white md:block lg:hidden"></div>
            </div>
            <div className="channels">
              <a href="" className="channel py-2 pl-2 pr-3 flex items-start justify-between hover:bg-gray-600 hover:bg-opacity-25">
                <div className="leading space-x-3 flex items-center">
                  <img src="" alt="" className="w-8 h-8 rounded-full bg-orange-500"/>
                  <div className="channel-info hidden lg:block">
                    <p className="text-sm font-semibold leading-none mb-1">summit1G</p>
                    <p className="text-xs text-gray-400 leading-none">Grand Theft Auto V</p>
                  </div>
                </div>
                <div className="trailing items-center space-x-1 hidden lg:flex">
                  <span className="status w-2 h-2 rounded-full bg-red-600"></span>
                  <p className="text-xs">24.23K</p>
                </div>
              </a>
              <a href="" className="channel py-2 pl-2 pr-3 flex items-start justify-between hover:bg-gray-600 hover:bg-opacity-25">
                <div className="leading space-x-3 flex items-center">
                  <img src="" alt="" className="w-8 h-8 rounded-full bg-yellow-500"/>
                  <div className="channel-info hidden lg:block">
                    <p className="text-sm font-semibold leading-none mb-1">Alfie</p>
                    <p className="text-xs text-gray-400 leading-none">Old School Runescape</p>
                  </div>
                </div>
                <div className="trailing items-center space-x-1 hidden lg:flex">
                  <span className="status w-2 h-2 rounded-full bg-red-600"></span>
                  <p className="text-xs">3.9K</p>
                </div>
              </a>
              <a href="" className="channel py-2 pl-2 pr-3 flex items-start justify-between hover:bg-gray-600 hover:bg-opacity-25">
                <div className="leading space-x-3 flex items-center">
                  <img src="" alt="" className="w-8 h-8 rounded-full bg-green-500"/>
                  <div className="channel-info hidden lg:block">
                    <p className="text-sm font-semibold leading-none mb-1">Classify</p>
                    <p className="text-xs text-gray-400 leading-none">Call of Duty: Mode..</p>
                  </div>
                </div>
                <div className="trailing items-center space-x-1 hidden lg:flex">
                  <span className="status w-2 h-2 rounded-full bg-red-600"></span>
                  <p className="text-xs">1.2K</p>
                </div>
              </a>
              <a href="" className="channel py-2 pl-2 pr-3 flex items-start justify-between hover:bg-gray-600 hover:bg-opacity-25">
                <div className="leading space-x-3 flex items-center">
                  <img src="" alt="" className="w-8 h-8 rounded-full bg-blue-500"/>
                  <div className="channel-info hidden lg:block">
                    <p className="text-sm font-semibold leading-none mb-1">Someone else</p>
                    <p className="text-xs text-gray-400 leading-none">Grand Theft Auto V</p>
                  </div>
                </div>
                <div className="trailing items-center space-x-1 hidden lg:flex">
                  <span className="status w-2 h-2 rounded-full bg-red-600"></span>
                  <p className="text-xs">902</p>
                </div>
              </a>
              <div className="show-more py-2 pl-2 pr-3 hidden lg:block">
                <a href="" className="text-xs text-purple-500 hover:underline">Show More</a>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="header p-2 flex items-center justify-center lg:justify-between">
              <h5 className="text-xs uppercase font-semibold hidden lg:block">Online Friends</h5>
              <div className="w-4 h-4 rounded bg-white xs:block lg:hidden"></div>
            </div>
            <div className="friends">
              <a href="" className="friend py-2 pl-2 pr-3 flex items-start justify-between hover:bg-gray-600 hover:bg-opacity-25">
                <div className="leading space-x-3 flex items-center">
                  <img src="" alt="" className="w-8 h-8 rounded-full bg-orange-500"/>
                  <div className="friend-info hidden lg:block">
                    <p className="text-sm font-semibold leading-none mb-1">DeKrakn</p>
                    <p className="text-xs text-gray-400 leading-none">Online</p>
                  </div>
                </div>
              </a>
              </div>
            </div>
        </nav>
        <div className="border-t border-gray-600 p-2">
          <input type="text" placeholder="Search to add friends" className="w-full flex-grow px-2 py-1 text-xs rounded text-white placeholder-gray-400 bg-gray-600 outline-none border-2 border-transparent focus:border-purple-500 focus:bg-gray-900"/>
        </div>
      </div>
    </div>
  )
}

const ChannelContent = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-purple-900 opacity-50" style={{ height: "auto", maxHeight: "calc(100vh - 16rem)", paddingBottom: "55%" }}>
        {/* <iframe
            src="https://player.twitch.tv/?channel=summit1g&parent=google.com&muted=true"
            height="100%"
            width="100%"
            frameborder="no"
            scrolling="no"
            allowfullscreen="true">
        </iframe> */}
      </div>
      <div className="player-info flex py-4 pl-3 pr-5 items-start justify-between">
        <div className="leading flex items-center space-x-3">
          <a href="avatar"><div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-800"><FontAwesomeIcon icon={farUser} className="text-2xl"/></div></a>
          <div className="stream-info flex flex-col font-semibold">
            <h3 className="leading-tight">summit1G</h3>
            <p className="text-sm">gta chillin [ @summit1g ]</p>
            <div className="metadata flex flex-wrap mt-1 text-sm">
              <a href="" className="text-purple-500 font-normal mr-4">Grand Theft Auto V</a>
              {/* <span>•</span> */}
              <div className="tags flex items-center space-x-1 text-gray-400 font-semibold" style={{ fontSize: ".675rem" }}>
                <a href="" className="tag px-3 py-1 leading-none rounded-full bg-gray-600">English</a>
                <a href="" className="tag px-3 py-1 leading-none rounded-full bg-gray-600">Action</a>
                <a href="" className="tag px-3 py-1 leading-none rounded-full bg-gray-600">Multiplayer</a>
                <a href="" className="tag px-3 py-1 leading-none rounded-full bg-gray-600">Role-Playing</a>
              </div>
            </div>
          </div>
        </div>
        <div className="trailing">
          <div className="button-wrapper flex space-x-2">
            <button className="py-2 px-3 rounded transition ease-in-out duration-300 bg-gray-600 hover:bg-gray-500">
              <div className="w-4 h-4 flex items-center justify-center">
                <FontAwesomeIcon icon={faHeart} />
              </div>   
            </button>
            <button className="py-2 px-3 rounded transition ease-in-out duration-300 bg-gray-600 hover:bg-gray-500">
              <div className="w-4 h-4 flex items-center justify-center">
                <FontAwesomeIcon icon={faBell} />
              </div>
            </button>
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Chat = () => {
  return (
    <div className="z-10 relative inset-y-0 left-0 sm:w-12 md:w-80 border-l border-gray-600 bg-gray-700 hidden md:block">
      <div className="wrapper flex flex-col h-full">
        <div className="header p-2 flex items-center justify-center md:justify-between border-b border-gray-600">
            <button className="p-2 hidden md:block rounded-lg transition ease-in-out duration-300 hover:bg-gray-600">
              <div className="w-4 h-4 flex items-center justify-center">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>            
            </button>
            <h5 className="text-xs uppercase font-semibold text-gray-300">Stream Chat</h5>
            <button className="p-2 hidden md:block rounded-lg transition ease-in-out duration-300 hover:bg-gray-600">
              <div className="w-4 h-4 flex items-center justify-center">
                <FontAwesomeIcon icon={farUser} />
              </div>   
            </button>
          </div>
          <div className="flex-grow">
          </div>
          <div className="footer flex flex-col p-2 space-y-2">
            <input type="text" placeholder="Send a message" className="w-full flex-grow px-3 py-2 text-xs leading-loose rounded text-white placeholder-gray-300 bg-gray-500 bg-opacity-25 outline-none border-2 border-transparent focus:border-purple-500 focus:bg-gray-900"/>
            <div className="actions flex items-center justify-between">
              <div className="leading flex items-center space-x-2 px-3 py-2 rounded  ease-in-out duration-300 cursor-pointer hover:bg-gray-600">
                <div className="w-4 h-4 border-2 rounded-full border-purple-500"></div>
                <span className="text-xs text-gray-500 font-semibold">84.4k</span>
              </div>
              <div className="trailing flex space-x-2">
                <button className="py-2 px-3 rounded transition ease-in-out duration-300 hover:bg-gray-600">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <FontAwesomeIcon icon={faCog} />
                  </div>   
                </button>
                <button className="py-2 px-3 rounded text-sm font-semibold leading-tight text-white bg-purple-700 transition ease-in-out duration-300 hover:bg-purple-600">Chat</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

function TwitchApp() {
    return (
      <motion.div className="h-screen w-screen text-white bg-gray-900 overflow-hidden" exit={{ opacity: 0 }} initial="initial" animate="animate">
        <Header />
        <div className="flex" style={{ height: "calc(100% - 56px)" }}>
          <SideMenu />
          <main className="flex flex-grow">
            <div className="flex-grow overflow-y-scroll">
              <ChannelContent />
            </div>
            <Chat />
          </main>
        </div>
      </motion.div>
    );
  }

  export default TwitchApp