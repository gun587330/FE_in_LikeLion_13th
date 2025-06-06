import axios from "axios";

export const baseURL ="https://week11-server.onrender.com"

export const getPerPage = async(page) => {
    const response = await axios.get(`${baseURL}/lionlist?page=${page}`);
    return response.data;
}

export const getGenderUser = async(gender) => {
    const response = await axios.get(`${baseURL}/lionlist?gender=${gender}`);
    return response.data;
}

// 필수과제 1
export const getPartUser = async(part) => {
    const response = await axios.get(`${baseURL}/lionlist?part=${part}`);
    return response.data;
}