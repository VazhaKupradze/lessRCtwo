import Child from './Child';


function Parent() {
    let users = [
        {
            firstName: 'Lasha',
            lastName: 'Amashukeli',
            id: 1,
            age: 25,
        },

        {
            firstName: 'George',
            lastName: 'smith',
            id: 2,
            age: 22,
        },

        {
            firstName: 'Merry',
            lastName: 'Christmas',
            id: 3,
            age: 20,
        },

        {
            firstName: 'Nick',
            lastName: 'Kvizhinadze',
            id: 4,
            age: 31,
        },

        {
            firstName: 'Max',
            lastName: 'Verstappen',
            id: 5,
            age: 26,
        }
    ]

    return (
        <Child users={users} isUserLoggedIn={true}>

        </Child>
    )
}

export default Parent;
