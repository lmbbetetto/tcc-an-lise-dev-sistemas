import { DisciplinaPayload, DisciplinaShow } from "./types";

export async function createDisciplina(data: DisciplinaPayload): Promise<DisciplinaShow> {
    try {
        const response = await fetch('http://localhost:3000/api/disciplina', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Failed to post data. Status code: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function updateDisciplina(id: string, data: DisciplinaPayload): Promise<DisciplinaShow> {
    try {
        const response = await fetch(`http://localhost:3000/api/disciplina/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Failed to update data. Status code: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}