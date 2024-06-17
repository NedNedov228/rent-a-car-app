import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingsList.css'
import { getComplainments, addComplain, deleteComplain } from '../api/Service';

const BookingsList = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newBooking, setNewBooking] = useState({ period: new Date(), auto: 1 });

    const autoOptions = [
        { value: 1, label: 'Car 1' },
        { value: 2, label: 'Car 2' },
        { value: 3, label: 'Car 3' },
    ];

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const data = await getComplainments();
                setBookings(data);
            } catch (err) {
                setError('Failed to fetch bookings');
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    const setAutoStatus = (auto) => {
        switch (auto) {
            case 1:
                return 'Car 1';
            case 2:
                return 'Car 2';
            case 3:
                return 'Car 3';
            default:
                return 'Unknown';
        }
    };

    const handlePeriodChange = (date) => {
        setNewBooking(prevState => ({
            ...prevState,
            period: date
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBooking(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDeleteBooking = async (id) => {
        const isDeleted = await deleteComplain(id);
        if (isDeleted) {
            setBookings(prevBookings => prevBookings.filter(booking => booking.id !== id));
        } else {
            setError('Failed to delete booking');
        }
    };

    const handleAddBooking = async (e) => {
        e.preventDefault();
        try {
            const periodString = newBooking.period.toISOString(); // Convert Date to ISO string
            const addedBooking = await addComplain(periodString, newBooking.auto);
            if (addedBooking) {
                setBookings(prevBookings => [...prevBookings, addedBooking]);
                setNewBooking({ period: new Date(), auto: 1 });
            } else {
                setError('Failed to add booking');
            }
        } catch (err) {
            setError('An error occurred while adding the booking');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <form onSubmit={handleAddBooking}>
                <DatePicker
                    selected={newBooking.period}
                    onChange={handlePeriodChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="time"
                />

                <select name="auto" value={newBooking.auto} onChange={handleInputChange} required>
                    <option value="" disabled>Выберите авто</option>
                    {autoOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
                
                <button className='btn' type="submit">Отправить Бронирование</button>
            </form>
            <div className="divider"></div>
            {bookings.length === 0 ? (
                <p>Бронирований не найдено.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th><h2>Номер</h2></th>
                            <th><h2>Период</h2></th>
                            <th><h2>Авто</h2></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <tr key={booking.id}>
                                <td>{"GH234687" + booking.id}</td>
                                <td>{new Date(booking.period).toLocaleString()}</td>
                                <td>{setAutoStatus(booking.auto)}</td>
                                <td>
                                    <button onClick={() => handleDeleteBooking(booking.id)} className='btn btn-danger'>Удалить Бронирование</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default BookingsList;
