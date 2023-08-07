import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';

const AllUser = () => {
    const [makeAdmin, setMakeAdmin] = useState(null);

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allUser', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = (id) =>{
        fetch(`http://localhost:5000/users/make/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                toast('Make admin successfully');
                refetch();
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    };
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className='bg-green-400 text-white'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user._id}</td>
                                <td>
                                <label 
                                   onClick={()=> setMakeAdmin(user)} 
                                   htmlFor="confirmation-modal" 
                                   className="btn btn-sm bg-green-500 text-white">Make Admin</label>
                                    {/* <button
                                    onClick={()=> handleMakeAdmin(user._id)}
                                    className='btn btn-sm bg-green-400 text-white'>Make Admin</button> */}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                makeAdmin && <ConfirmationModal
                title={`Are you sure you want to make admin?`}
                message={`If you make admin ${makeAdmin.name}. It cannot be undone`}
                handleDelete={()=>handleMakeAdmin(makeAdmin._id)}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllUser;