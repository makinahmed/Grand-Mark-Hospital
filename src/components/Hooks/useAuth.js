import React, { useContext } from 'react';
import { AuthContext } from '../Context/ContextProvider';

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;