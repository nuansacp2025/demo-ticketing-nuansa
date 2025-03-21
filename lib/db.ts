import { addresses, seats, tickets } from "@/db/source";

export interface TicketDetails {
    email: string,
    address: string,
    category: string,
    finalized: boolean,
    seats: string[]
}

export function getTicketDetails(ticketId: string): TicketDetails {
    // @ts-ignore
    return tickets[ticketId];
}

export function getTicketId(address: string): string {
    // @ts-ignore
    return addresses[address];
}

export function getSeats(): object {
    return seats;
}
