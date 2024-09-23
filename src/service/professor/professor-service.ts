import { TeacherPayload, TeacherShow } from './types';

export async function createProfessor(data: TeacherPayload): Promise<TeacherShow> {
    try {
        const response = await fetch('http://localhost:3000/api/professor', {
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

export async function updateProfessor(id: string, data: TeacherPayload): Promise<TeacherShow> {
    try {
        const response = await fetch(`http://localhost:3000/api/professor/${id}`, {
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