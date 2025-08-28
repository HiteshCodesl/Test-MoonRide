import NextAuth from "next-auth";
import GoogleProvider  from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
import  CredentialsProvider  from "next-auth/providers/credentials";
import {compare} from "bcrypt";
import prismaClient from "@/app/config/prisma";

const handler = NextAuth({
   
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        GithubProvider({
             clientId: process.env.GITHUB_CLIENT_ID!,
             clientSecret: process.env.GITHUB_CLIENT_SECRET!
        }),
         CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: 'email', type: 'text', placeholder: 'enter your email'},
                password: {label: 'password', type: 'password'},
            },
            async authorize(credentials) {
                
              if(!credentials?.email || !credentials.password) {
                return null;
              };

              const user = await prismaClient.user.findUnique({
                where : {
                    email: credentials.email
                }
              })
              if(!user) return null;

              const isValidPassword = await compare(credentials.password ,user.password)

              if(!isValidPassword){
                return null;
              }

              return{
                 id: user.id,
                 email: user.email,
                 name: user.name
              }
            },
         })
    ],
     pages: {
        signIn: '/login'
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };