import { getCustomerByTicketId, getSeats, getTicket, Seat } from "./db";

function getMySeats(ticketId: string): Map<string, Seat> {
    return new Map(getSeats().entries()
        .filter(([id, seat], _) => seat.reservedBy === ticketId)
        .toArray());
}

export interface Profile {
    email: string,
    ticketCode: string,
    seatConfirmed: boolean,
    seatIds: string[],
}

export function getMyProfile(ticketId: string): Profile | null {
    const customer = getCustomerByTicketId(ticketId);
    const ticket = getTicket(ticketId);
    if (customer === null || ticket === null) return null;
    const mySeats = getMySeats(ticketId).keys().toArray();
    return {
        email: customer.email,
        ticketCode: ticket.code,
        seatConfirmed: ticket.seatConfirmed,
        seatIds: mySeats,
    };
}
