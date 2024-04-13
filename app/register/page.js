import Link from 'next/link'
export default function register() {
    return(
    <main className=' flex flex-col items-center max-w-sm p-11 rounded overflow-hidden border border-gray-300' >
      <img src='https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png' className=' w-28 item-center' ></img>
      <h1 className=' font-semibold text-gray-500 mb-3'> Sign up to see photos and videos from your friends. </h1>
      <form className=' flex flex-col gap-3'>
      <input placeholder='Mobile number or email address' className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-grey-500 bg-gray-100 text-black ' ></input>
      <input placeholder='Full name' className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-grey-500 bg-gray-100 text-black'></input>
      <input placeholder='Username' className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-grey-500 bg-gray-100 text-black '></input>
      <input placeholder='Password' className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-grey-500 bg-gray-100 text-black '></input>
      <p>People who use our service may have uploaded your contact information to Instagram.</p>
        <p>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>Sign Up</button>
      </form>
      <p className=' mt-4 '>Have an account?</p><Link href='/' className=' text-blue-500 '>Log in</Link>
    </main>
    )
}