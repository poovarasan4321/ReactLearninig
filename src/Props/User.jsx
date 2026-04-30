import React from 'react'

const User = (Props) => {
    let { employee1 } = Props;
    let { employee2 } = Props;
    let { employee3 } = Props;
    let { employee4 } = Props;
    let { employee5 } = Props;
    return (
        <>
            <h1>User Component</h1>
            <h1>Employee 1
                <ul>
                    <li>Name : {employee1.eName}</li>
                    <li>Age : {employee1.eAge}</li>
                    <li>Salary : {employee1.Salary}</li>
                    <li>Role : {employee1.eRole}</li>
                </ul>
            </h1>
            <h1>Employee 2
                <ul>
                    <li>Name : {employee2.eName}</li>
                    <li>Age : {employee2.eAge}</li>
                    <li>Salary : {employee2.Salary}</li>
                    <li>Role : {employee2.eRole}</li>
                </ul>
            </h1>
            <h1>Employee 3
                <ul>
                    <li>Name : {employee3.eName}</li>
                    <li>Age : {employee3.eAge}</li>
                    <li>Salary : {employee3.Salary}</li>
                    <li>Role : {employee3.eRole}</li>
                </ul>
            </h1>
            <h1>Employee 4
                <ul>
                    <li>Name : {employee4.eName}</li>
                    <li>Age : {employee4.eAge}</li>
                    <li>Salary : {employee4.Salary}</li>
                    <li>Role : {employee4.eRole}</li>
                </ul>
            </h1>
            <h1>Employee 5
                <ul>
                    <li>Name : {employee5.eName}</li>
                    <li>Age : {employee5.eAge}</li>
                    <li>Salary : {employee5.Salary}</li>
                    <li>Role : {employee5.eRole}</li>
                </ul>
            </h1>
        </>
    )
}

export default User
