'use client'
import { tierStyles } from "@/types/tier";
import { SignOutButton, SignUpButton } from "@clerk/nextjs";
import React from "react";
import { useRouter } from 'next/navigation'
export default function Header({ user }: HeaderProps) {
  const router = useRouter()
  const handleClick = () => {
    router.push('/updatetier') // or any dynamic path like `/update-tier?from=events`
  }
  return (
    <header className="w-full flex items-center justify-between px-4 py-3 bg-white shadow-md">
      <div className="text-xl font-bold text-black text-black-700">EventTier</div>
      <div className="flex items-center gap-4">
        {!user ? (
          <SignUpButton mode="redirect" >
            <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        ) : (
          <>
            <span className={`font-medium text-black cursor-pointer font-bold text-xl px-3 py-2 rounded ${tierStyles[user.tierName?.charAt(0).toUpperCase() + user.tierName?.slice(1)]}`}>{user.tierName}</span>
            {user.imageUrl ? (
              <img
                src={user.imageUrl}
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-purple-500 object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full border-2 border-purple-500 bg-white bg-white-100 flex items-center justify-center text-purple-700 font-bold text-lg cursor-pointer">
                {user.username?.charAt(0).toUpperCase() || "U"}
              </div>
            )}
           

            <SignOutButton>
              <button className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800 transition cursor-pointer">
                Sign Out
              </button>
            </SignOutButton>
          </>
        )}
      </div>
    </header>
  );
}