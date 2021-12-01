import Head from 'next/head'
import {useRouter} from 'next/router'

export default function Id() {
    const router = useRouter(); 
    // UseRouter trả về một objcect ;
    const {params = []} = router.query;
  return (
     <h1>Page Doc : {params.length} - Length</h1>
  )
}
