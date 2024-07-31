const API_URL = "http://localhost:5000";

// Fetch Chats
export const fetchChats = async () => {
    try {
        const response = await fetch(`${API_URL}/chats`);
        if (!response.ok) {
            throw new Error(`Error fetching chats: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Fetch Posts
export const fetchPosts = async () => {
    try {
        const response = await fetch(`${API_URL}/posts`);
        if (!response.ok) {
            throw new Error(`Error fetching posts: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// User Login
// export const loginUser = async (credentials) => {
//     try {
//         const response = await fetch(`${API_URL}/login`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(credentials),
//         });
//         if (!response.ok) {
//             throw new Error(`Error logging in: ${response.statusText}`);
//         }
//         return response.json();
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };

// Fetch Group by ID
export const fetchGroup = async (groupId) => {
    try {
        const response = await fetch(`${API_URL}/group/${groupId}`);
        if (!response.ok) {
            throw new Error(`Error fetching group: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Fetch Comments
export const fetchComments = async () => {
    try {
        const response = await fetch(`${API_URL}/comments`);
        if (!response.ok) {
            throw new Error(`Error fetching comments: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Fetch News
// export const fetchNews = async () => {
//     try {
//         const response = await fetch(`${API_URL}/News`);
//         if (!response.ok) {
//             throw new Error(`Error fetching news: ${response.statusText}`);
//         }
//         return response.json();
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };
export const fetchNews = async () => {
    return fetch('/News');  // Ensure the endpoint matches the server's expectation
};


// Fetch Counters
export const fetchCounters = async () => {
    try {
        const response = await fetch(`${API_URL}/counters`);
        if (!response.ok) {
            throw new Error(`Error fetching counters: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};
