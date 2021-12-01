import { getSession } from "next-auth/client";

function Blog2({data}) {
    return(
        <h3>Page Blog : {data}</h3>
    )
}
export default Blog2;
export async function getServerSideProps(context) {
    const session = await getSession(context);
    if(!session) {
        return {
            redirect: {
                destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog2",
                permanent : false
            }
        }
    }
    return {
        props: {
            session,
            data: session ? "kho bạn có 100 cuộn sách" : "nhận sách miền phí tại đây"
        }
    }
}