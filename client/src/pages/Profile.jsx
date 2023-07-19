import React from 'react';
import NavBar from '../components/NavBar';
// import UserContext from '../Context';
import { useHistory } from 'react-router-dom'
// import BookCard from '../components/BookCard';

function Profile({user, updateUser}) {
// const {user, setUser} = useContext(UserContext)
const history = useHistory()


// function handleDelete() {
//     fetch(`/api/users`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     })
//         .then((response) => {
//             if (response.ok) {
//             updateUser(null);
//             history.push("/");
//             } else {
//             throw new Error("Error confirming delete");
//             }
//         })
//         .catch((error) => {
//         console.error(error);
//         });
// }

function handleLogout() {
    fetch("/api/signout").then((res) => {
        if (res.ok){
            updateUser(null);
            history.push("/process");
        }
    });
}

// function handleLogout() {
//     fetch(`/api/users/signout`, {
//     method: "DELETE",
//     headers: {
//         'Content-Type': 'application/json'
//     }
//     })
//     .then((response) => {
//         if (response.ok) {
//             updateUser(null);
//             history.push("/process")
//         } else {
//             throw new Error("Error logging out")
//         }
//     })
//     .catch((error) => {
//     console.error(error);
//     })
// }

// const userLibrary = user.user_library

// const favoriteBooks = userLibrary.map((book) => {
//     return (
//         <BookCard 
//             key={book.id}
//             book={book}
//             id={book.id}
//         />
//     )
// })   


    return (
        <div>
        <NavBar />
        <h2>Profile</h2>
        <h3>{user.username}</h3>
        <h3>{user.email}</h3>
        {/* <h3>Favorite Books</h3>
        {favoriteBooks} */}
        <button className="primary" onClick={handleLogout}>Logout</button> 
        {/* <button onClick={handleDelete}>Delete User</button> */}
        </div>
    );
}

export default Profile;