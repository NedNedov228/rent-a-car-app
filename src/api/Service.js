const API_URL = 'http://localhost:8000/api';

export let isAuth;

// Check if token is in localStorage and is not expired and set isAuth to true
if (localStorage.getItem('token')) {
    isAuth = true;
}
else isAuth = false;
    

export const login = async (username, password) => {
    console.log('login invoke')
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    });


    if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        isAuth = true;
        location.reload();
    }
}

export const register = async (username, password) => {



    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    });

    if (response.ok) {

        //goto login page
        location.href = '/login';

    }

    // Add Complainment

    
}

// export const addComplainment = async (descr , status) => {
//     const token = localStorage.getItem('token');
//     const response = await fetch(`${API_URL}/zayavki/add`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({descr , status})
//     });

//     if (response.ok) {
//         return await response.json();
//     }
// }

// export const getComplainments = async () => {
//     const token = localStorage.getItem('token');
//     const response = await fetch(`${API_URL}/zayavki/my`, {
//         method: 'GET',
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     });

//     if (response.ok) {
//         const json = response.json();
//         console.log('json', json)
//         return await json;
//     }

    
// }

export const getComplainments = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/bookings/my`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            const json = await response.json();
            return json;
        } else {
            console.error('Failed to fetch complaints', response.statusText);
            return [];
        }
    } catch (error) {
        console.error('An error occurred while fetching complaints:', error);
        return [];
    }
};

export const addComplain = async (period, auto) => {
    try {
        auto = 1; 
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/bookings/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ period, auto })
        });

        if (response.ok) {
            const json = await response.json();
            location.reload();
            return json;
        } else {
            console.error('Failed to add complaint', response.statusText);
            return null;
        }
    } catch (error) {
        console.error('An error occurred while adding complaint:', error);
        return null;
    }
};

export const deleteComplain = async (id) => {
    console.log('invoke deleteComplain', id);
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/bookings/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            // location.reload();
            return true;
        } else {
            console.error('Failed to delete complaint', response.statusText);
            // location.reload();
            return false;
        }
    } catch (error) {
        console.error('An error occurred while deleting booking:', error);
        // location.reload();
        return false;
    }
};
// logout

export const logout = () => {
    localStorage.removeItem('token');
    isAuth = false;
    location.reload();
}