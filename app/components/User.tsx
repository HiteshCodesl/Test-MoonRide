"use client"
import { Button } from '@/components/ui/button';
import {useSession, signOut, signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation';

export function User() {
    
  const { data: session } = useSession()
  const router = useRouter();

 return<>
 {!session ? 
   <Button className='btn-primary' onClick={() => router.push('/login')}>
         SignIn
   </Button>
   : 
   <Button className='btn-primary' onClick={() => signOut()}>
         Logout
   </Button>
   } 
 </>
}

