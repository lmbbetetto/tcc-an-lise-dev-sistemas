import { ControlledInput } from "@/components/controlled-field";
import CardChamada from "./components/button-chamada";
import CourseCountCard from "./components/course-count-card";
import CardAddStudent from "./components/new-add-student";
import StudentCountCard from "./components/student-count-card";
import TeacherCountCard from "./components/teacher-count-card";

export default function HomeGestor() {
    return (
        <main className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4">
                <StudentCountCard />
                <TeacherCountCard />
                <CourseCountCard />
            </div>
            <CardAddStudent />
            <CardChamada />
        </main>
    )
}