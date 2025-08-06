'use server';

type FormState ={
    message : string
}

export async function greetFullName(prevState: FormState, formData: FormData):Promise<FormState> {

    const firstName = formData.get('firstName')?.toString()
    const lastName = formData.get('lastName')?.toString()

    return {
        message: `Hello ${firstName} ${lastName} !`
    }

}