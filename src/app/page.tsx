// export default function  Home(){
//   return (
//     <div>Hello Im page 1</div>
//   )
// }

import Box from "@/components/Box/Box"


const Home = () => {


  const print = () => {
    return "Hey ANshu"
  }
  const sayHello = () => {
    return "Hello"
  }

  return (

    <>
      <h1>My Value is : {print()} {sayHello()} </h1>
      <Box/>
    </>


  )
}

export default Home