import { useState } from "react";

function Github() {
  const [username, setUsername] = useState("");   // for taking and setting username from the user
  const [data, setData] = useState(null);   // for storing the fetched data from api
  const [error, setError] = useState("");    // to handle error 

  const handleSubmit = async (e) => {
    e.preventDefault();   // prevent automaTIC FIRE 
    setError("");         // no error at start
    setData(null);        // no data at first

    if (!username.trim()) {              // check whether username entered or not 
      setError("Username is required");  // if not set error
      return;
    }
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");         // if wrong input show error

      const result = await response.json();   // changing response to json
      setData(result);                        //setting result
    } catch (err) {                           // if catches fire  
      setError("Something is wrong ");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center m-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          className="p-2 border-2 border-gray-400 rounded-md w-64 mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
        >
          Fetch Profile
        </button>
      </form>

      {error && <p className="text-red-600 text-center mt-4">{error}</p>}

      {data && (
        <>
          <p className="flex text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Name: {data.name}
          </p>
          <div className="flex flex-row text-center m-4 -mt-3 bg-gray-600 text-white p-4 text-3xl">
            <img src={data.avatar_url} alt="Git picture" width={300} />
            <div className="flex flex-col justify-start text-center m-4 bg-gray-600 text-white p-4 text-xl">
              <p className="flex justify-start pt-4">Login name: {data.login}</p>
              <p className="pt-4">Bio: {data.bio}</p>
              <p className="flex justify-start pt-4">
                No. of repos: {data.public_repos}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Github;
