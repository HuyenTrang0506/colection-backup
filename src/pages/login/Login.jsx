import React, { useRef } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import axiosClient from '../../ultils/AxiosClient';
import { redirect } from 'react-router-dom';
export default function DefaultForm() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const login = async (username, password) => {
        try {
            const response = await axiosClient.post('/login', {
                email: username,
                password: password
            });

            // Handle the successful login response

            // Do something with the data, such as storing tokens or user information
            const data = response;
            return data; // Return any relevant data from the response
        } catch (error) {
            // Handle login error
            throw error;
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Access the input field values using the refs
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;

        // Perform any necessary actions with the input field values
        console.log('Email:', emailValue);
        console.log('Password:', passwordValue);
        login(emailValue, passwordValue)
            .then((response) => {
                console.log(response);
                const token = response.data.accessToken;
                // Use the access token as needed
                if (token) {
                    localStorage.setItem('ACCESS_TOKEN', token);
                    window.location.href = '/';
                }
            })
            .catch((error) => {
                // Handle login error
                console.error('Login Error:', error);
            });
        // Reset the form if needed
        emailRef.current.value = '';
        passwordRef.current.value = '';
    };

    return (
        <form className="flex max-w-md flex-col gap-4 h-screen mx-auto justify-center" onSubmit={handleSubmit}>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                    id="email1"
                    placeholder="khanhduy@vku.udn.vn"
                    required
                    type="email"
                    ref={emailRef}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput id="password1" required type="password" ref={passwordRef} />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
}