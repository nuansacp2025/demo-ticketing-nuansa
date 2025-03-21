"use client"

import React from "react";
import { getTicketDetails, getTicketId, type TicketDetails } from "@/lib/db";
import { verify } from "@/lib/auth";
import { useParams } from "next/navigation"

// @ts-ignore
export default function Page(params) {
  const { address } = useParams<{ address: string }>();

  const [ticketDoesNotExist, setTicketDoesNotExist] = React.useState(false);
  const [authorized, setAuthorized] = React.useState(false);
  const [ticketId, setTicketId] = React.useState("");
  const [details, setDetails] = React.useState<TicketDetails | null>(null);

  React.useEffect(() => {
    if (address === undefined) return;
    const id = getTicketId(address);
    setTimeout(() => {
      if (id !== undefined) setAuthorized(verify(id));
      setTicketDoesNotExist(id === undefined);
      setDetails(getTicketDetails(id));
      setTicketId(id);
    }, 1000);
  }, [])

  return (
    <div className="flex h-screen flex-col justify-center px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        {ticketDoesNotExist ? <p>404 | This ticket does not exist</p> : ticketId ? <>
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              {authorized ? <p className="text-2xl">Ticket ID: <span className="text-[#1A7F7D]"><b>{ticketId}</b></span></p>
              : <p>You need to <a href="/" className="text-[#1A7F7D]">login</a> to display the ticket ID.</p>}
            </div>
            {details?.finalized ? <>
              <p>Seats:</p>
              <div className="text-xl text-semibold text-[#1A7F7D]">
                {details.seats.map((seat, index) => (
                  <p key={index}><b>{seat}</b></p>
                ))}
              </div>
            </> : <>
              <p>You have not selected your seats. {
                authorized ? <a href={`${address}/select`} className="text-[#1A7F7D]">Select now.</a> : <a href="/" className="text-[#1A7F7D]">Login to select.</a>
              }</p>
            </>}
              
          </div>
        </> : "Loading..."}
      </div>
    </div>
  )
}