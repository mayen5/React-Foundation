import { useForm } from 'react-hook-form'

type FormInputs = {
    email: string;
    password: string;
}

export const FormsPage = () => {

    const { register, handleSubmit, formState } = useForm<FormInputs>({
        defaultValues: {
            email: 'carmelo@email.com',
            password: '123456'
        }
    });

    const onSubmit = (data: FormInputs) => {
        console.log(data);
    }

    return (
        <>
            <h2>Forms Page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input type="text" placeholder='Email' {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} />
                    <input type="text" placeholder='Password' {...register('password')} />
                </div>
                <div>
                    <button type="submit" {...handleSubmit(onSubmit)}>Submit</button>
                </div>
            </form>

            <pre>
                {JSON.stringify(formState, null, 2)}
            </pre>
        </>
    )
}
