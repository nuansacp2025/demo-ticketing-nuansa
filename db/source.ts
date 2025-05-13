export const customers = new Map([
    ["3bf3a617533f4c4a", { email: "test@example.com", ticketIds: ["e4d909c290d0fb1c", "ad41402abc4b2a76"] }],
    ["aa220f29902c4c27", { email: "taken@example.com", ticketIds: ["cd793037a0760186"] }]
]);

export const tickets = new Map([
    ["e4d909c290d0fb1c", { code: "DEF555", category: "X", seatConfirmed: false }],
    ["ad41402abc4b2a76", { code: "ABC123", category: "Y", seatConfirmed: false }],
    ["cd793037a0760186", { code: "GHI789", category: "X", seatConfirmed: true }]
]);

export const seats = new Map([
    ["A1", [true, ""]],
    ["A2", [true, ""]],
    ["A3", [true, ""]],
    ["A4", [true, ""]],
    ["A5", [true, ""]],
    ["B1", [true, ""]],
    ["B2", [true, ""]],
    ["B3", [true, ""]],
    ["B4", [false, "cd793037a0760186"]],
    ["B5", [false, "cd793037a0760186"]],
    ["C1", [true, ""]],
    ["C2", [true, ""]],
    ["C3", [true, ""]],
    ["C4", [true, ""]],
    ["C5", [true, ""]]
]);
