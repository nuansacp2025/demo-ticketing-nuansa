import { getCustomerByTicketId, getSeats, getTicket, Seat } from "./db";

export interface Profile {
    email: string,
    ticketCode: string,
    ticketCategory: string,
    seatConfirmed: boolean,
    seatIds: string[],
}

export function getMyProfile(ticketId: string): Profile | null {
    const customer = getCustomerByTicketId(ticketId);
    const ticket = getTicket(ticketId);
    if (customer === null || ticket === null) return null;
    console.log("test 1")
    const mySeats = Array.from(getSeats().entries())
        .filter(([id, seat], _) => seat.reservedBy === ticketId)
        .map(([id, seat], _) => id);
    console.log("test 2")
    return {
        email: customer.email,
        ticketCode: ticket.code,
        ticketCategory: ticket.category,
        seatConfirmed: ticket.seatConfirmed,
        seatIds: mySeats,
    };
}
