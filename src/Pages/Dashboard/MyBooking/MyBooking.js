import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';

const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [deletingBook, setDeletingBook] = useState(null);

    const url = `http://localhost:5000/bookings?email=${user?.email}`

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

    const handleDeleteBook = (id) =>{
       fetch(`http://localhost:5000/booking/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
       })
       .then(res => res.json())
       .then(data => {
         if(data.acknowledged){
            toast('Delete successfully')
            refetch();
         }
       })
    }

    if(isLoading){
        return <Loading></Loading>
    };
    
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
                            bookings?.map((book, i) => <tr key={book._id}>
                                <th>{i + 1}</th>
                                <td>{book.name}</td>
                                <td>{book.date}</td>
                                <td>{book.destination}</td>
                                <td>{book.description}</td>
                                <td>
                                   <label 
                                   onClick={()=> setDeletingBook(book)} 
                                   htmlFor="confirmation-modal" 
                                   className="btn btn-sm bg-green-500 text-white">Delete</label>
                                    
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingBook && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingBook.name}. It cannot be undone`}
                handleDelete={()=>handleDeleteBook(deletingBook._id)}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyBooking;