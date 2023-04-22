export const clearUserData = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}