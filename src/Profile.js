import {useState} from 'react';
function Profile() {
    const [loggedIn, setLoggedIn] = useState(1);

    // lets say we have 3 users to log 1,2,3
    return (
        <div>
            {
                loggedIn == 1?
                 <p>Welcome waq</p>
                 :
                 loggedIn==2?
                 <p>Guest</p>
                 :
                 <p>other</p>
            }
        </div>
    );
}
export default Profile;