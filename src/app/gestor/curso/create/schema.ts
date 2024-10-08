import { z } from 'zod';

export const schema = z.object({
  curso: z.string()
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  curso: ''
};
