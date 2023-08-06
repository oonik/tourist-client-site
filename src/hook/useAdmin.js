import React, { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(true);
    const [adminIsLoading, setAdminIsLoading] = useState(false);

    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/user/admin/${email}`)
            .then(res => res.json())
            .then(data => {
              setIsAdmin(data.isAdmin);
              setAdminIsLoading(true)
            })
        }
    },[email])
    return [isAdmin, adminIsLoading];
};

export default useAdmin;