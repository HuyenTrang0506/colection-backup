import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import axiosClient from '../../ultils/AxiosClient';
export default function ShadowInputs() {
    let globalResponse = null;
    const [agreeChecked, setAgreeChecked] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formError, setFormError] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleAgreeChange = (event) => {
        setAgreeChecked(event.target.checked);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRepeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value);
    };
    const register = async (username, password) => {
        try {
            const response = await axiosClient.post('/register', {
                email: username,
                password: password
            });
            console.log(response);

            // Set the response message in the component state
            setResponseMessage(response.status);
        } catch (error) {
            // Handle login error
            console.error('Register Error:', error);
            setResponseMessage(error.response.status);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!agreeChecked) {
            setFormError('Please agree to the terms and conditions.');
            return;
        }

        if (password.length < 6) {
            setPasswordError('Password should be at least 6 characters long.');
            return;
        }

        if (password !== repeatPassword) {
            setPasswordError('Passwords do not match.');
            return;
        }
        register(email, password)
            .then((response) => {
                setEmail('');
                setPassword('');
                setRepeatPassword('');
                setResponseMessage(response.status);
                console.log(response);
            })
            .catch((error) => {
                // Handle login error
            });

    };

    return (
        <form className="flex max-w-md flex-col gap-4 mx-auto h-screen justify-center" onSubmit={handleSubmit}>
            {responseMessage && <div>{responseMessage}</div>}
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email2" value="Your email" />
                </div>
                <TextInput onChange={handleEmailChange} value={email} id="email2" placeholder="tranghuyen@example.com" required shadow type="email" />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password2" value="Your password" />
                </div>
                <TextInput
                    id="password2"
                    required
                    shadow
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="repeat-password" value="Repeat password" />
                </div>
                <TextInput
                    id="repeat-password"
                    required
                    shadow
                    type="password"
                    value={repeatPassword}
                    onChange={handleRepeatPasswordChange}
                />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="agree" checked={agreeChecked} onChange={handleAgreeChange} />
                <Label className="flex" htmlFor="agree">
                    <p>I agree with the</p>
                    <a className="ml-1 text-cyan-600 hover:underline dark:text-cyan-500" href="/forms">
                        <p>terms and conditions</p>
                    </a>
                </Label>
            </div>
            {formError && <p className="text-red-500">{formError}</p>}
            {passwordError && <p className="text-red-500">{passwordError}</p>}
            <Button type="submit" disabled={!agreeChecked}>
                Register new account
            </Button>
        </form>
    );
}