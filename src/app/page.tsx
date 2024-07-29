import CardChamada from "./home/button-chamada";
import CourseCountCard from "./home/course-count-card";
import CardAddStudent from "./home/new-add-student";
import StudentCountCard from "./home/student-count-card";
import TeacherCountCard from "./home/teacher-count-card";

export default function HomeGestor() {
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4">
                <StudentCountCard />
                <TeacherCountCard />
                <CourseCountCard />
            </div>
            <CardAddStudent />
            <CardChamada />
        </div>
    )
}