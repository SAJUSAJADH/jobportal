import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import Connect from "@/dbconfig/connect";
import User from "@/dbmodels/usermodel";
import { signIn, signOut } from "next-auth/react";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        await Connect();

        const user = await User.findOne({ email: credentials?.username });

        if (!user) {
          return null;
        }

        const passwordCorrect = await bcryptjs.compare(
          credentials?.password,
          user?.password,
        );

        if (passwordCorrect) {
          return {
            _id: user?._id,
            email: user?.email,
            username: user?.username,
            role: user?.userType,
            accountstatus: user?.accountStatus,
            profilestatus: user?.profileStatus,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString();
        token.username = user.username;
        token.email = user.email;
        token.role = user.role;
        token.account = user.accountstatus;
        token.profile = user.profilestatus
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session._id = token._id;
        session.user.name = token.username;
        session.role = token.role;
        session.account = token.account;
        session.profile = token.profile
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/",
  },
};
