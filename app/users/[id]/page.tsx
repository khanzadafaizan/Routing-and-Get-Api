
export default async function UdersId(props){
  const response = await fetch (`https://jsonplaceholder.typicode.com/users/${props.params.id}`);
  const currentUser = await response.json();
  return(
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/80x80"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  {currentUser.name}
                </h2>
                <p className="text-gray-500">{currentUser.username}</p>
                <p className="text-gray-500">{currentUser.email}</p>
                <p className="text-gray-500">{currentUser.phone}</p>
                <a className="text-indigo-500 inline-flex items-center">Learn More
                </a>
              </div>
            </div>
          </div>
    )
}