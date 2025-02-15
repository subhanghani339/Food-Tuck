import { getServerSession } from "next-auth"; // Assuming you're using next-auth

export async function getUserSession(req: Request) {
  const session = await getServerSession();
  return session?.user || null;
}
