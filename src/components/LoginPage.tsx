import { useEffect } from 'react';
import { useAuthStore } from '../store/auth.store'

export const LoginPage = () => {

    const authStatus = useAuthStore(state => state.state);
    const user = useAuthStore(state => state.user);
    const login = useAuthStore(state => state.login);
    const logout = useAuthStore(state => state.logout);

    useEffect(() => {
        login('john.doe@example.com', 'password123');
        setTimeout(() => {
            logout();
        }, 3000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (authStatus === 'checking') {
        return <h3>Loading...</h3>
    }

    return (
        <>
            <h2>LoginPage</h2>

            {authStatus === 'authenticated'
                ? <div>
                    <pre>
                        Authenticated as: {JSON.stringify({
                            email: user?.email,
                            name: user?.name,
                            id: user?.id
                        }, null, 2)}
                    </pre>
                </div>
                : <div>
                    Unauthenticated
                </div>
            }
            <br />
            {
                authStatus === 'authenticated'
                    ? <button onClick={logout}>Logout</button>
                    : <button onClick={() => login('john.doe@example.com', 'password123')}>Login</button>
            }
        </>
    )
}
