import './Child.css'

function Child(props) {

    return (
        <>
            {props.isUserLoggedIn
                ? props.users.length
                    ? (<>
                        {props.users.map(user => (
                            <div className="usersCard" key={user.id}>
                                <p>Firstname: {user.firstName}</p>
                                <p>Lastname: {user.lastName}</p>
                                <p>Id: {user.id}</p>
                                <p>Age: {user.age}</p>
                            </div>))}
                    </>)
                    : (<div> no users in the system</div>)
                : (<div>not authorized to see user list</div>)}
        </>
    )
}

export default Child;
