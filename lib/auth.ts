import { getCustomerByEmail, getTicketByCode } from './db';
import jwt from 'jsonwebtoken';

const SECRET_KEY = "your-secret-key"; // Replace with a secure key

function makeJWT(ticketId: string): string {
    return jwt.sign({ ticketId }, SECRET_KEY, { expiresIn: '1h' });
}

export function login(email: string, ticketCode: string): { status: boolean, token: string } {
    const customer = getCustomerByEmail(email);
    const ticket = getTicketByCode(ticketCode);
    if (customer !== null && ticket !== null && customer.ticketIds.includes(ticket.id)) {
        const token = makeJWT(ticket.id);
        return { status: true, token };
    }
    return { status: false, token: "" };
}

export function verify(token: string): { ticketId: string } {
    try {
        const decoded = jwt.verify(token, SECRET_KEY) as { ticketId: string };
        return { ticketId: decoded.ticketId };
    } catch (error) {
        throw new Error("Invalid token");
    }
}
