import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    await connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");
  console.log(user);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          console.log(user);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        // token.img = user.img;
      }
      console.log(token);
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        // session.user.img = token.img;
      }
      console.log(session);
      return session;
    },
  },
});