"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const RoomList = ({ rooms }: { rooms: any }) => {
  return (
    <div>
      {rooms.data.map((room: any) => {
        console.log(room);
        const imgURL = `http://127.0.0.1:1337${room.image?.url}`;

        return (
          <div key={room.id}>
            <Link href={`/room/${room.id}`}>
              <div className="relative w-full h-[300px] overflow-hidden mb-6">
                <Image
                  src={imgURL}
                  fill
                  priority
                  alt=""
                  className="object-cover"
                  unoptimized
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RoomList;
