

// import React from "react";
import { groups } from "../data/mockData";
import type { UserData } from "../App";

const Dashboard = ({ isLogged, userData }: {
    isLogged: boolean,
    userData: UserData | null
}) => {
    if (!isLogged) return null;

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