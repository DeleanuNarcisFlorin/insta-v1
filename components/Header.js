import Image from "next/image";
import React from "react";
import { SearchIcon, PlusCircleIcon} from '@heroicons/react/outline';
import { HomeIcon} from "@heroicons/react/solid";

export default function Header() {
    return (
        
        <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
             {/* Left */}
            <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
            <Image
            src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            layout="fill"
            className="object-contain"
            onClick={() => router.push("/")}
          />
                </div>
                <div className="cursor-pointer h-24 w-10 relative lg:hidden">
            <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
            layout="fill"
            className="object-contain"
                 />
                </div>
                {/* Middle */}

                <div className="relative mt-1">
                    <div className="absolute top-2 left-2"> 
                        <SearchIcon className="h-5 text-gray-500" />
                    </div>
                    <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md "/>
                </div>

                {/* Right */}
                <div className="flex space-x-4 items-cemter">
                    <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
                    <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
                    <img src="https://scontent.fcra2-1.fna.fbcdn.net/v/t1.6435-9/161054004_3380644385374879_2393323840128663172_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nCEBwgVhMLIAX-UyI1R&_nc_ht=scontent.fcra2-1.fna&oh=00_AT_taiCD1JK_yUpibqTcxMyiTnQTPU-0hF8mIdEMbBpgeQ&oe=6351067D" alt="user-image" className="h-10 rounded-full cursor-pointer" />
                </div>

         </div>



    );
}