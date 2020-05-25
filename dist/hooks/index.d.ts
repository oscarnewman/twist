interface FormFields {
    [field: string]: {
        required?: boolean;
        type?: boolean;
    };
}
interface FormState {
    [field: string]: unknown;
}
interface UseFormReturn {
    data: FormState;
    props: {
        [field: string]: unknown;
    };
}
export declare function useForm(fields: FormFields): UseFormReturn;
export {};
