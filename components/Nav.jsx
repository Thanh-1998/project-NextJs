'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

function Nav() {
  const { data: session } = useSession()

  const [toggle, setToggle] = useState(false)
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }
    setUpProviders()
  }, [])
  console.log('providers', providers);
  return (
    <nav className='flex justify-between w-full mb-16 pt-3 px-10'>
      <Link href='/' className='flex gap-2 justify-center'>
        <p className='logo_text'>NextJs</p>
      </Link>

      <div className='flex'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/craate-post' className='btn_black btn'>
              Create Post
            </Link>

            <button className='btn_outline btn'>
              Sign Out
            </button>

            <div className='flex'>
              <button
                className='btn btn_outline'
                onClick={() => setToggle(prev => !prev)}
              >
                Profile
              </button>

              {toggle && (
                <div className='dropdown'>
                  <Link
                    href='/profile'
                    className='dropdown-link'
                    onClick={() => setToggle(false)}
                  >
                    My Profile
                  </Link>

                  <Link
                    href='/create-post'
                    className='dropdown-link'
                    onClick={() => setToggle(false)}
                  >
                    Create Post
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map(provider => (
              <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='btn_black'
              >
                Sign In
              </button>
            ))}
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;