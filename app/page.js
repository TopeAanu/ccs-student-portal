// app/page.js
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to the Student Portal</h1>
      {session ? (
        <div className="space-y-4">
          <p className="text-lg">Hello, {session.user.username}!</p>
          <Link 
            href="/api/auth/signout"
            className="text-blue-600 hover:text-blue-800"
          >
            Sign Out
          </Link>
        </div>
      ) : (
        <div className="space-x-4">
          <Link 
            href="/auth/signin"
            className="text-blue-600 hover:text-blue-800"
          >
            Sign In
          </Link>
          <span>or</span>
          <Link 
            href="/auth/signup"
            className="text-blue-600 hover:text-blue-800"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;