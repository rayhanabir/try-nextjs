import Link from 'next/link';

function Home(){
    return (
        <>
        <h2>this is home page</h2>

        <h3>
            <Link href='/posts'>
                <a>Posts</a>
            </Link>
        </h3>
        </>
    )
}

export default Home;