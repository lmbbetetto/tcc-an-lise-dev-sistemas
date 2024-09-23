import { z } from 'zod';

export const schema = z.object({
    teste: z.string(),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
    teste: ''
};
