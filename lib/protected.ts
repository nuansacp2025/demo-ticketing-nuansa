import { getSeats, Seat } from "./db";

export function getMySeats(ticketId: string): Map<string, Seat> {
    return new Map(getSeats().entries()
        .filter(([id, seat], _) => seat.reservedBy === ticketId)
        .toArray());
}