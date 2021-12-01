import Head from 'next/head'
import {useRouter} from 'next/router'

export default function Id() {
    const router = useRouter(); 
    // UseRouter trả về một objcect ;
    const {id , rewierid} = router.query
  return (
     <h1>Page Product {id} rewierid: {rewierid}</h1>
  )
}
