import { getTicketDetails, getTicketId, type TicketDetails } from './db';

export function login(email: string, ticketId: string): { status: boolean, address: string } {
    const details = getTicketDetails(ticketId);
    if (details !== undefined && details.email == email) {
        document.cookie = `ticketId=${ticketId};`;
        return { status: true, address: details.address };
    }
    return { status: false, address: "" };
}

export function verify(ticketId: string): boolean {
    const verifier = document.cookie
      .split('; ')
      .find(row => row.startsWith('ticketId='))
      ?.split('=')[1];
      return ticketId == verifier;
}
