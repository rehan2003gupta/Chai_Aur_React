import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Github() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(""); 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      setError("");
      navigate(`/github/${username}`); // Navigate to new dynamic route
    }
    else{
      setError("Username cannot be empty");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px]">
      <form onSubmit={handleSubmit} className="bg-gray-300 focus:bg-gray-500 p-6 min-h-[220px] rounded shadow-xl">
        <label className="block mb-2 text-xl font-semibold">Enter GitHub Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="e.g. rehan2003gupta"
          className="border-2 border-blue-300 focus:outline-hidden focus:border-blue-600 px-3 py-2 mb-4 w-full"
        />
        
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
     
      </form>
         {error && <div className="text-red-600 mt-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 scale-110 text-sm mb-2">{error}</div>}
    </div>
  );
}

export default Github;
