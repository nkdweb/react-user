import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {

  const USERS = [
    {
      id:'ID100', name: 'Maxwell', image:'https://i.pravatar.cc/150?img=13',places:2
    }
  ]
  return <UsersList items={USERS}/>
}

export default Users;