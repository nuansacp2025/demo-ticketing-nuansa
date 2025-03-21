export const addresses = {
    e4d909c290d0fb1c: "DEF555",
    ad41402abc4b2a76: "ABC123",
    cd793037a0760186: "GHI789"
}

export const tickets = {
    DEF555: { email: "rafael@example.com", address: "e4d909c290d0fb1c", category: "X", finalized: false, seats: [] },
    ABC123: { email: "test@example.com", address: "ad41402abc4b2a76", category: "Y", finalized: false, seats: [] },
    GHI789: { email: "taken@example.com", address: "cd793037a0760186", category: "X", finalized: true, seats: ["B4", "B5"] }
};

export const seats = {
    A1: [true, ""],
    A2: [true, ""],
    A3: [true, ""],
    A4: [true, ""],
    A5: [true, ""],
    B1: [true, ""],
    B2: [true, ""],
    B3: [true, ""],
    B4: [false, "cd793037a0760186"],
    B5: [false, "cd793037a0760186"]
}
