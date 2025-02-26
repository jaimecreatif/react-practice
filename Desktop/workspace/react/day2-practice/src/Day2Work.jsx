import React from "react"

const users = [
  {name: "Lee", job: "Data Scientist"},
  {name: "Park", job: "Prodcut Manager"}
];

function Day2() {
  return (
    <>
      <UserCard name="Kim" job="Software Engineer" />
      <hr />
      <div>
        {users.map((user, index) => (
          <UserCard key={index} name={user.name} job={user.job}/>
        )) }
      </div>
    </>
  )
}

function UserCard(props) {
  return (
    <>
      <p>Name: {props.name} </p>
      <p>Job: {props.job} </p>
    </>
  )
}

export default Day2;