import {getSession , signIn} from 'next-auth/client'
import { useEffect, useState } from 'react';
function Dashbroad2() {
   const [loading , setloading] = useState(true);

   useEffect(() => {
     const securePage = async() => {
         const session =  await getSession();
         if(!session){
            signIn();
         }else {
            setloading(false)
         }
     }
     securePage();
   }, [])
   if(loading) {
       return <h3>Loading...</h3>
   }
    return(
        <h3>Page dashbroad 2</h3>
    )
}
export default Dashbroad2;