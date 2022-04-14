import Link from 'next/link';

function postList({posts}){
    console.log(posts);
    return(
        <>
            <h4>all posts are here</h4>
            {
                posts.map(post =>{
                    return(
                        <div key={post.id}>
                            <Link href={`posts/${post.id}`} passHref>
                            <p>titile : {post.title} and my id is :{post.id}</p>
                            </Link>
                            <hr />
                        </div>
                        
                    )
                })
            }
        </>
    )
}
export default postList;

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    
    return{
        props:{
            posts: data.slice(0, 5)
        }
    }
}