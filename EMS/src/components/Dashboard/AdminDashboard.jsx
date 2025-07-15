import React from 'react'

import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
import Header from '../others/Header'
import AuthProvider from '../../context/AuthProvider'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
          <Header changeUser={props.changeUser}/>
            <CreateTask/>
            <AllTask/>
            <AuthProvider/>
           
        </div>
    )
}

export default AdminDashboard