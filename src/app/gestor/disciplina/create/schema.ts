import { z } from 'zod';

export const schema = z.object({
  id: z.string(),
  name: z.string(),
  curse: z.string(),
  professor: z.string()
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
    id: '',
    name: '',
    curse: '',
    professor: ''
};
