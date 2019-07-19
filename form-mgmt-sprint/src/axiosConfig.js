
const axiosConfig = {
    headers: { 
        Authorization: localStorage.getItem('token') 
    }
}
export default axiosConfig;

//axiuos with auth function - safer route, fixes render issue