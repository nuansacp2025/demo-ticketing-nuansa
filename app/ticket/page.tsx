"use client"

import { Profile } from "@/lib/protected";
import React from "react";

export default function Page() {
  const [profile, setProfile] = React.useState<Profile | null>(null);

  React.useEffect(() => {
    fetch("/api/me", { method: "GET", credentials: "include" }).then(response => {
      if (response.redirected) {
        window.location.href = response.url;
      } else if (response.ok) {
        return response.json();
      } else {
        response.json().then(({ error }) => { console.log(response.status, error); });
      }
    }).then(profile => {
      setProfile(profile);
    });
  }, [])

  return (
    <div className="flex h-screen flex-col justify-center px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        {profile !== null ? <>
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <p className="text-2xl">Ticket ID: <span className="text-[#1A7F7D]"><b>{profile.ticketCode}</b></span> (category {profile.ticketCategory})</p>
            </div>
            {profile.seatConfirmed ? <>
              <p>Seats:</p>
              <div className="text-xl text-semibold text-[#1A7F7D]">
                {profile.seatIds.map((seat, index) => (
                  <p key={index}><b>{seat}</b></p>
                ))}
              </div>
            </> : <>
              <p>You have not selected your seats. <a href="/ticket/select" className="text-[#1A7F7D]">Select now.</a></p>
            </>}
          </div>
        </> : "Loading..."}
      </div>
    </div>
  )
}