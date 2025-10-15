import { create } from 'zustand';

interface AuthState {
    state: 'checking' | 'authenticated' | 'unauthenticated';
    token?: string;
    user?: {
        id: string;
        name: string;
        email: string;
    };

    login: (email: string, password: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    state: 'checking',
    token: undefined,
    user: undefined,

    login: (email: string, password: string) => {
        // Simulate an API call
        setTimeout(() => {
            set({
                state: 'authenticated',
                token: 'fake-jwt-token',
                user: {
                    id: '1',
                    name: 'John Doe',
                    email: email
                }
            });
        }, 1000);
    },

    logout: () => {
        set({
            state: 'unauthenticated',
            token: undefined,
            user: undefined
        });
    }
}));