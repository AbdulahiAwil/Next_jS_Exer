
'use server';

type FormState = {
    success: boolean,
    message : string,
    
    error : string
}


export async function greet(prevState: FormState, formData: FormData): Promise<FormState> {
    const email = formData.get('email')?.toString();
    const password= formData.get('password')?.toString();
    
    if(!email || email.trim()=== ''){
        return {
            success: false,
            message: '',
            error: 'Email is required.'
        }
    }
    if(!password || password?.length < 6){
        return{
            success: false,
            message: '',
            error: "Password must be at least 6 characters"
        }

    }
    return {
        success: true,
        message: `Thank you for submiting ${email}`,
        error: ''
    }
}

// export async function greet(formData: FormData){
//     const email = formData.get('email')
   
//     return `Thank you for submiting ${email}`
// }