import { FaltaDisciplinar, FaltaDisciplinarPayload } from "./types";


export async function createFaltaDisciplinar(data: FaltaDisciplinarPayload): Promise<FaltaDisciplinar> {
    try {
        const response = await fetch('http://localhost:3000/api/faltas-disciplinares', {
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

export async function updateAluno(id: string, data: FaltaDisciplinarPayload): Promise<FaltaDisciplinar> {
    try {
        const response = await fetch(`http://localhost:3000/api/falta-disciplinar/${id}`, {
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