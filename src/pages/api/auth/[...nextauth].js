import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Provider.Google({
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET,
    }),
  ],
};
export default NextAuth(authOptions);
