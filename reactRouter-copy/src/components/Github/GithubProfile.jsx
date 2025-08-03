import { useLoaderData } from "react-router-dom";

function GithubProfile() {
  const data = useLoaderData();

  return (
    <>
      <p className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Name: {data.name}</p>
      <div className="flex flex-row text-center m-4 -mt-3 bg-gray-600 text-white p-4 text-3xl">
        <img src={data.avatar_url} alt="Git picture" width={300} />
        <div className="flex flex-col justify-start text-center m-4 bg-gray-600 text-white p-4 text-xl">
          <p className="flex justify-start pl-1.5 pt-4">Login name: {data.login}</p>
          <p className="pt-4">Bio: {data.bio}</p>
          <p className="pt-4 flex pl-1.5 justify-start">No. of repos: {data.public_repos}</p>
        </div>
      </div>
    </>
  );
}

export default GithubProfile;

// loader for the above
export const githubLoader = async ({ params }) => {
  const response = await fetch(`https://api.github.com/users/${params.username}`);
  if (!response.ok) {
    throw new Error("User not found");
  }
  return response.json();
};
