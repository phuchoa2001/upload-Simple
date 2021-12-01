import { getSession } from "next-auth/client";

const handler = async (req , res) => {
    const Session = await getSession({req});
    if(!Session){
        res.status(401).json({error: "No Menber !"})
    }else {
        res.status(200).json({messger: "Success" , Session});
    }
}
export default handler;