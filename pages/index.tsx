import { NextPageContext } from 'next';
<<<<<<< HEAD
import {getSession} from 'next-auth/react';
import Navbar from '@/components/Navbar'
=======
import {signOut, getSession} from 'next-auth/react';
import  useCurrentUser  from '@/hooks/useCurrentUser';
>>>>>>> f7a3e117f668b09bd85fe16ba377c37dce0a88d2

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {}
  }
}
export default function Home() {
<<<<<<< HEAD

  return (
    <>
      <Navbar />
=======
  const { data: user } = useCurrentUser();
  return (
    <>
    <h1 className="text-green-500 text-4xl">Netflix Clone</h1>
    <p
    className='text-white'
    >Logged in as : {user?.name}</p>
    <button onClick={()=> {signOut()}}
    className='h-10 w-full bg-white'
    >Logout</button>
>>>>>>> f7a3e117f668b09bd85fe16ba377c37dce0a88d2
    </>
  )
}
