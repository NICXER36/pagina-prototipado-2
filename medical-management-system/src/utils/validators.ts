export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return (
        password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumbers &&
        hasSpecialChars
    );
};

export const validateRUT = (rut: string): boolean => {
    const rutRegex = /^\d{1,8}-[0-9kK]$/;
    return rutRegex.test(rut);
};

export const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d{9}$/; // Assuming a 9-digit phone number
    return phoneRegex.test(phone);
};