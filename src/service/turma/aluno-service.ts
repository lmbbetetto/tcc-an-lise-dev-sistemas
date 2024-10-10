import { Turma, TurmaPayload } from "./types";



export async function createTurma(data: TurmaPayload): Promise<Turma> {
    try {
        const response = await fetch('http://localhost:3000/api/turma', {
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

export async function updateTurma(id: string, data: TurmaPayload): Promise<Turma> {
    try {
        const response = await fetch(`http://localhost:3000/api/turma/${id}`, {
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