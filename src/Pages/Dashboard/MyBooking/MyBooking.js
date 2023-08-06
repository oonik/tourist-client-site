import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const MyBooking = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user.email}`

    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className='text-white bg-green-400'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Destination</th>
                            <th>Special Request</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((book, i) => <tr key={book._id}>
                                <th>{i + 1}</th>
                                <td>{book.name}</td>
                                <td>{book.date}</td>
                                <td>{book.destination}</td>
                                <td>{book.description}</td>
                                <td>
                                    <button
                                     className='btn btn-sm bg-green-500 text-white'>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;