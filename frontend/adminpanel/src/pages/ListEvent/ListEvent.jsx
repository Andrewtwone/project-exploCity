import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import './ListEvent.css'
import { deleteEvent, getEventList } from '../../services/eventService';

const ListFood = () => {
    const [list, setList] = useState([]);
    const fetchList = async () => {
        try {
            const data = await getEventList();
            setList(data);
        } catch (error) {
            toast.error('Error while reading the events.')
        }
    }

    const removeEvent = async (eventId) => {
        try {
            const success = await deleteEvent(eventId);
            if (success) {
                toast.success('Event removed.');
                await fetchList();
            } else {
                toast.error('Error occured while removing the event')
            }
        } catch (error) {
            toast.error('Error occured while removing the event')
        }
    }

    useEffect(() => {
        fetchList()
    }, [])
    return (
        <div className="py-5 row justify-content-center">
            <div className="col-11 card">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.imageUrl} alt='' height={48} width={48} />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.category}</td>
                                        <td>zł{item.price}</td>
                                        <td className='text-danger'>
                                            <i className='bi bi-x-circle-fill' onClick={() => removeEvent(item.id)} />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListFood;
