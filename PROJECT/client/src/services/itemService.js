import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/items';


export const getAll = async () => {
    const result = await request.get(baseUrl);
    const items = Object.values(result);
    return items;
}

export const create = async (data, token) => {
    const result = await request.post(baseUrl, data, token);
    return result;
}

export const getOne = async (itemId) => {
    const result = await request.get(`${baseUrl}/${itemId}`);
    return result;
}

// export const addComment = async (itemId, data, token) => {
//     const result = await request.post(`${baseUrl}/${itemId}/comments`, data, token);
//     return result;
// };

export const edit = async (data, token) => {
    console.log(data._id);
    //const result = await request.post(`${baseUrl}/items/${data._id}`, data, token);
    //return result;
}

export const deleteItem = async (itemId, token) => {
    const result = await request.del(`${baseUrl}/${itemId}`, {}, token);
    return result;
};
