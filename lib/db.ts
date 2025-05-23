import { customers, tickets, seats } from "@/db/source";

export interface Customer {
    id: string,
    email: string,
    ticketIds: string[],
}

export interface Ticket {
    id: string,
    code: string,
    category: string,
    seatConfirmed: boolean,
}

export interface Seat {
    id: string,
    isAvailable: boolean,
    reservedBy: string,
}

export function getCustomer(id: string): Customer | null {
    const obj = customers.get(id);
    if (obj === undefined) {
        return null;
    }
    return { id, ...obj };
}

export function getCustomerByEmail(email: string): Customer | null {
    const obj = Array.from(customers.entries()).filter(val => val[1].email === email)[0];
    if (obj === undefined) {
        return null;
    }
    return { id: obj[0], ...obj[1] };
}

export function getCustomerByTicketId(ticketId: string): Customer | null {
    const obj = Array.from(customers.entries()).filter(val => val[1].ticketIds.includes(ticketId))[0];
    if (obj === undefined) {
        return null;
    }
    return { id: obj[0], ...obj[1] };
}

export function getTicket(id: string): Ticket | null {
    const obj = tickets.get(id);
    if (obj === undefined) {
        return null;
    }
    return { id, ...obj };
}

export function getTicketByCode(code: string): Ticket | null {
    const obj = Array.from(tickets.entries()).filter(val => val[1].code === code)[0];
    if (obj === undefined) {
        return null;
    }
    return { id: obj[0], ...obj[1] };
}

export function getSeats(): Map<string, Seat> {
    return new Map(Array.from(seats.entries())
        .map(([id, [isAvailable, reservedBy]], _) => [id, { id, isAvailable, reservedBy }] as [string, Seat]));
}
