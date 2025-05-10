

// import React from "react";
import { groups, withdrawStudent } from "../data/mockData";
import type { UserData } from "../App";
import { useEffect } from "react";

const Dashboard = ({ isLogged, userData }: {
    isLogged: boolean,
    userData: UserData | null
}) => {
    if (!isLogged) return null;

    // Add the user to the appropriate group
    useEffect(() => {
        if (!userData) return;
        const group = groups[`Tier${userData.savingsPlan.tier}` as keyof typeof groups];
        if (!group) return;
        if (group.members.some((member: { name: string }) => member.name === userData.username)) return;
        group.members.push({
            id: (Number(Math.random().toFixed(0)) * 1) + groups.Tier1.members.length + 5,
            name: userData.username,
            initialDeposit: userData.savingsPlan.balance,
            balance: userData.savingsPlan.balance,
        });
    }, [userData]);

    const id = userData ? groups[`Tier${userData.savingsPlan.tier}` as keyof typeof groups].members.find((member: { name: string }) => {
        if (!userData) return;
        return member.name === userData.username;
    })?.id : null;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Savings Dashboard</h2>
            <p className="text-gray-300 mb-6">Welcome, {userData?.username}!</p>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Savings Plan</h3>
                <p className="text-gray-300">
                    Tier: {userData?.savingsPlan.tier}
                </p>
                <p className="text-gray-300">
                    Percentage: {userData?.savingsPlan.percentage}%
                </p>
                <button className="border cursor-pointer hover:bg-white/80 p-2 bg-white text-black capitalize" onClick={() => userData && withdrawStudent(`Tier${userData.savingsPlan.tier}`, id)} >withdraw</button>
            </div>
            {Object.entries(groups).map(([tier, group]) => (
                <div key={tier} className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">{tier} (Total: ₦{group.totalSavings.toLocaleString()})</h3>
                    <table className="min-w-full border border-gray-300 mb-2">
                        <thead>
                            <tr className="bg-transparent">
                                <th className="border px-4 py-2">Name</th>
                                <th className="border px-4 py-2">Initial Deposit (₦)</th>
                                <th className="border px-4 py-2">Current Balance (₦)</th>
                                <th className="border px-4 py-2">Accumulated Interest (₦)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {group.members.map((member) => (
                                <tr key={member.id}>
                                    <td className="border px-4 py-2">{member.name}</td>
                                    <td className="border px-4 py-2">{member.initialDeposit.toLocaleString()}</td>
                                    <td className="border px-4 py-2">{member.balance.toLocaleString()}</td>
                                    <td className="border px-4 py-2">{(member.balance - member.initialDeposit).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;