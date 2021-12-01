function MenberYoutube( {data}) {
   return<h3>{data}</h3>
}
export default MenberYoutube;

export async function getStaticProps(context) {
    return {
        props : {
            data: context.preview 
            ? "Video Đang được chạy"
            : "Nâng cấp để Chở thành hội viên của kênh này" 

        }
    }
}