import User from "../components/User";

function UserList({users}){

    return(
        <>
            <h3>All user list</h3>
            {
                users.map(user => <User user={user} key={user.id}/>)
            }
        </>
    )
}
export default UserList;

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return{
        props:{
            users:data
        }
    }
}