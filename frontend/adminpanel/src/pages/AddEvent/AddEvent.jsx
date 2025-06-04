import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { addEvent } from '../../services/eventService';
import { toast } from 'react-toastify';


const AddFood = () => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Sport Events'
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (!image) {
            toast.error('Please select an image')
            return;
        }




        try {
            await addEvent(data, image)
            toast.success('Event added successfully.')
            setData({ name: "", description: "", category: "Sport", price: "" });
            setImage(null)
        } catch (error) {
            toast.error("Error adding event.")
        }


    }
    return (
        <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-4">
                    <div className="card-body">
                        <h2 className="mb-4">Add Event</h2>
                        <form onSubmit={onSubmitHandler}>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    <img src={image ? URL.createObjectURL(image) : assets.upload} alt='' width={120} />
                                </label>
                                <input type="file" className="form-control" id="image" hidden onChange={(e) => setImage(e.target.files[0])} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" placeholder="Enter name..." className="form-control" id="name" required name='name' onChange={onChangeHandler} value={data.name} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea placeholder='Write content here...' className="form-control" id="message" rows="5" required name='description' onChange={onChangeHandler} value={data.description}></textarea>
                            </div>


                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <select name='category' id='category' className='form-control' onChange={onChangeHandler} value={data.category}>
                                    <option value="Sport">Sport Events</option>
                                    <option value="Concerts & Music Festivals">Concerts & Music Festivals</option>
                                    <option value="Cinema & Film Festivals">Cinema & Film Festivals</option>
                                    <option value="Exhibitions & Art Shows">Exhibitions & Art Shows</option>
                                    <option value="Theatre & Perfomances">Theatre & Perfomances</option>
                                    <option value="Cultural & Literary">Cultural & Literary Events</option>
                                    <option value="Food & Drink">Food & Drink Events</option>
                                    <option value="Family & Community">Family & Community Events</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type='number' name='price' placeholder='zł' id='price' className='form-control' onChange={onChangeHandler} value={data.price}></input>
                            </div>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFood;
