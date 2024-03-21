import CourseCountCard from "./course-count-card";
import StudentCountCard from "./student-count-card";
import TeacherCountCard from "./teacher-count-card";

export default function HomeGestor() {
    return (
        <div className="grid grid-cols-3 gap-4">
            <StudentCountCard />
            <TeacherCountCard />
            <CourseCountCard />
        </div>
    )
}