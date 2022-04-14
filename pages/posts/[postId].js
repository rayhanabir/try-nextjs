import {useRouter} from 'next/router'


function post({ post }) {
    const router = useRouter();
    if(router.isFallback){
        return <h4>loading..</h4>
    }
  return (
    <>
      <h3>
        My id is {post.id} and my title is {post.title}
      </h3>
      <p>body: {post.body}</p>
    </>
  );
}
export default post;

export async function getStaticPaths() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   const paths = data.map((post) => {
//     return {
//       params: {
//         postId: `${post.id}`,
//       },
//     };
//   });

  return {
    // paths: paths,
    paths:[
        {
            params:{postId:'1'}
        },
        {
            params:{postId:'2'}
        },
        {
            params:{postId:'3'}
        },
        {
            params:{postId:'4'}
        },
        {
            params:{postId:'5'}
        },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
}
