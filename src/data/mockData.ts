// ... existing code ...
export const groups = {
    Tier1: {
        percentage: 5,
        totalSavings: 10000,
        currency: "NGN",
        members: [
            { id: 1, name: "Alice", balance: 10500, initialDeposit: 10000 },
            { id: 2, name: "Bob", balance: 10500, initialDeposit: 10000 },
            { id: 3, name: "Charlie", balance: 10500, initialDeposit: 10000 },
        ],
        waitingList: [
            { id: 10, name: "Zara", balance: 10000 },
        ],
    },
    Tier2: {
        percentage: 10,
        totalSavings: 20000,
        currency: "NGN",
        members: [
            { id: 4, name: "David", balance: 22000, initialDeposit: 20000 },
            { id: 5, name: "Eve", balance: 22000, initialDeposit: 20000 },
        ],
        waitingList: [
            { id: 11, name: "Yusuf", balance: 22000, initialDeposit: 20000 },
        ],
    },
    Tier3: {
        percentage: 20,
        totalSavings: 30000,
        currency: "NGN",
        members: [
            { id: 6, name: "Frank", balance: 36000, initialDeposit: 30000 },
        ],
        waitingList: [
            { id: 12, name: "Xena", balance: 36000, initialDeposit: 30000 },
        ],
    },
};

// Simulate weekly progress: add interest to each member's balance and update totalSavings
export function simulateWeeklyProgress() {
    Object.values(groups).forEach(group => {
        group.members.forEach(member => {
            member.balance += member.balance * (group.percentage / 100);
        });
        group.totalSavings = group.members.reduce((sum, m) => sum + m.balance, 0);
    });
}

// Withdraw a student: remove from group, update total, and add from waitingList
export function withdrawStudent(tier, studentId) {
    console.log("Withdrawing student:", studentId);
    const group = groups[tier as keyof typeof groups];
    console.log("Group:", group);
    if (!group) return false;
    const idx = group.members.findIndex(m => m.id === studentId);
    console.log("Index:", idx);
    if (idx === -1) return false;
    group.members.splice(idx, 1);
    // Add from waiting list if available
    // if (group.waitingList.length > 0) {
    //     const newMember = group.waitingList.shift();
    //     if (newMember) {
    //         group.members.push({
    //             ...newMember,
    //             initialDeposit: newMember.balance
    //         });
    //     }
    // }
    group.totalSavings = group.members.reduce((sum, m) => sum + m.balance, 0);
    return true;
}

// Add a student to waiting list
export function addToWaitingList(tier, student) {
    const group = groups[tier as keyof typeof groups];
    if (!group) return false;
    group.waitingList.push(student);
    return true;
}
// ... existing code ...