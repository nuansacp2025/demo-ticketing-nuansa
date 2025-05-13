import { getCustomerByEmail, getTicketByCode } from './db';
import jwt from 'jsonwebtoken';

const SECRET_KEY = "your-secret-key"; // Replace with a secure key

function makeJWT(customerId: string, ticketId: string): string {
    return jwt.sign({ customerId, ticketId }, SECRET_KEY, { expiresIn: '1h' });
}

export function login(email: string, ticketCode: string): { status: boolean, token: string } {
    const customer = getCustomerByEmail(email);
    const ticket = getTicketByCode(ticketCode);
    if (customer !== null && ticket !== null && customer.ticketIds.includes(ticket.id)) {
        const token = makeJWT(customer.id, ticket.id);
        return { status: true, token };
    }
    return { status: false, token: "" };
}

export function verify(token: string): { customerId: string, ticketId: string } {
    try {
        const decoded = jwt.verify(token, SECRET_KEY) as { customerId: string, ticketId: string };
        return { customerId: decoded.customerId, ticketId: decoded.ticketId };
    } catch (error) {
        throw new Error("Invalid token");
    }
}
