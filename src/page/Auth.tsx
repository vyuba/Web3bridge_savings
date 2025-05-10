import { useState } from "react";

const Auth = ({ isLogged, setIsLoggedIn }: {
    isLogged: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const [username, setUsername] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
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
                        role: selectedOption
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
                    <option value="Tier_1">Tier 1</option>
                    <option value="Tier_2">Tier 2</option>
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