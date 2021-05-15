import React from 'react'
import PropTypes from 'prop-types';


const Profile = ({children, fullName, bio, profession, alertMe}) => {
    return (
        <div>
            {children} <br />
            My name is {fullName} <br />
            {bio} <br />
            {profession} <br />
            <button  onClick={alertMe}>See my name</button>
        </div>
    )
}

Profile.defaultProps={
    fullName:"Anonymos",
    bio:"not defined",
    profession:"not defined",
  }

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
}
  
export default Profile
