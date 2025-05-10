import { useState } from "react";

const Auth = ({ isLogged, setIsLoggedIn }: {
    isLogged: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const [username, setUsername] = useState('');
    const [selectedOption, setSelectedOption] = useState("");
    const tierOptions = {
        Tier1: {
            tier: 1,
            balance: 10000,
            percentage: 5,
        },
        Tier2: {
            tier: 2,
            balance: 20000,
            percentage: 10,
        },
        Tier3: {
            tier: 3,
            balance: 30000,
            percentage: 20,
        }
    };
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (!username || !selectedOption) {
                        alert('Please fill all fields');
                        return;
                    }
                    localStorage.setItem('userData', JSON.stringify({
                        username,
                        savingsPlan: tierOptions[selectedOption as keyof typeof tierOptions],
                    }));
                    setIsLoggedIn(true);
                }}
                className={` flex-col gap-4 w-full max-w-md mx-auto p-6 ${isLogged ? 'hidden' : 'flex'}`}
            >
                <input
                    type="text"
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Saving Tier</option>
                    <option value="Tier1">Tier 1</option>
                    <option value="Tier2">Tier 2</option>
                    <option value="Tier3">Tier 3</option>
                </select>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:cursor-not-allowed disabled:bg-blue-400 hover:bg-blue-600 transition-colors"
                    disabled={!username || !selectedOption}
                >
                    Login
                </button>
            </form>
        </>
    )
}
export default Auth