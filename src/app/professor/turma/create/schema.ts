import { z } from 'zod';

export const schema = z.object({
  nomeTurma: z.string(),
  curse: z.string(),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  nomeTurma: '',
  curse: '',
};
