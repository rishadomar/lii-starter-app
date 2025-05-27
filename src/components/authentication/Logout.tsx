import { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { oktaAuth } = useOktaAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            await oktaAuth.signOut();
            navigate('/');
        };
        logout();
    }, [oktaAuth, navigate]);

    return null;
};

export default Logout;
