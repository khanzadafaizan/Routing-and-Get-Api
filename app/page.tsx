import Image from 'next/image'
import Users from './components/Users';
export default async function Home() {
  const response = await fetch ('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return (
       <><div className="flex flex-col text-center w-full mb-20 pt-10">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div><section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-2">
            {users.map((user) => <Users key = {user.id} user={user}/>)}
          </div>
        </div>
      </section></>
  )
}
