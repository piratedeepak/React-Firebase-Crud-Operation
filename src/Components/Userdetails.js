import React, {useState, useEffect} from 'react'
import Userdetailsform from './Userdetailsform'
import firebaseDb from "../firebase";

function Userdetails()  {

    var [userObject, setUserObject] = useState({});
    var [currentId, setCurrentId] = useState('');

    useEffect(() => {
        firebaseDb.child('User Details').on('value', snapshot => {
            if (snapshot.val() != null) {
                setUserObject({
                    ...snapshot.val()
                });
                
            
            }
            else 
                 setUserObject({})
        })
        
    }, [])

    const CreateorEdit = obj => {
        if (currentId == '')
        firebaseDb.child('User Details').push(
            obj,
            err => {
                if (err)
                    console.log(err);
            }
        )
        else
        firebaseDb.child(`User Details/${currentId}`).set(
            obj,
            err => {
                if (err)
                    console.log(err);
                else
                setCurrentId('')
            }
        )

    }

    const onDelete = key => {
        if (window.confirm("Are you want to delete this record")) {
            firebaseDb.child(`User Details/${key}`).remove(
               
            err => {
                if (err)
                    console.log(err);
                else
                setCurrentId('')
            }
            )
            
            
        }
    }

    return (
        <React.Fragment>
        <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">User Details</h1>
                </div>
            </div>
        <div className="row">
            <div className="col-md-4">
                <Userdetailsform {...({CreateorEdit, currentId, userObject})}/>
            </div>
            <div className="col-md-8">
              <table className="table table-borderless table-stripped">
                  <thead className="thead-light">
                      <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Gender</th>
                          <th>Skills</th>
                          <th>Description</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          Object.keys(userObject).map(id => {
                              return <tr key={id}>
                                  <td>
                                      {userObject[id].name}
                                  </td>
                                  <td>
                                      {userObject[id].email}
                                  </td>
                                  <td>
                                      {userObject[id].phone}
                                  </td>
                                  <td>
                                      {userObject[id].gender}
                                  </td>
                                  <td>
                                      {userObject[id].skills}
                                  </td>
                                  <td>
                                      {userObject[id].description}
                                  </td>
                                  <td >
                                      <a className="btn text-primary" onClick={() => {setCurrentId(id)}}>
                                            <i className="fas fa-pencil-alt"></i>
                                      </a>
                                      <a className="btn text-danger">
                                            <i className="far fa-trash-alt" onClick={() => {onDelete(id)}}></i>
                                      </a>
                                  </td>
                              </tr>
                          })
                      }
                  </tbody>
                </table>  
            </div>
        </div>
        </React.Fragment>
    )
}

export default Userdetails
