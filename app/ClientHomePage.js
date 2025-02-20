// // ClientHomePage.js
// 'use client';

// import Link from "next/link";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// const ClientHomePage = ({ session }) => {
//   const router = useRouter();

//   useEffect(() => {
//     if (session) {
//       router.push("/auth/profile");
//     }
//   }, [session, router]);

//   return (
//     <div className="min-h-screen p-8">
//       <h1 className="text-3xl font-bold mb-8">Welcome to the Student Portal</h1>
//       {!session ? (
//         <div className="space-x-4">
//           <Link
//             href="/auth/signin"
//             className="text-blue-600 hover:text-blue-800"
//           >
//             Sign In
//           </Link>
//           <span>or</span>
//           <Link
//             href="/auth/signup"
//             className="text-blue-600 hover:text-blue-800"
//           >
//             Sign Up
//           </Link>
//         </div>
//       ) : (
//         <div className="space-y-4">
//           <p className="text-lg">Hello, {session.user.username}!</p>
//           <Link
//             href="/api/auth/signout"
//             className="text-blue-600 hover:text-blue-800"
//           >
//             Sign Out
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ClientHomePage;