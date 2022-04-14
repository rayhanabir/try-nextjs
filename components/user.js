function User({user}){
    const {name, email} = user;
    return(
        <>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </>
    )
}
export default User;