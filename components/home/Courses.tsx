import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, Circle } from 'lucide-react';

const courseOutline = [
    {
        id: 'basics',
        title: 'HTML Basics',
        description: 'Learn the fundamental building blocks of HTML',
        lessons: [
            { id: 'intro', title: 'Introduction to HTML', completed: false },
            { id: 'structure', title: 'HTML Document Structure', completed: false },
            { id: 'text', title: 'Text Elements', completed: false },
            { id: 'links', title: 'Links and Anchors', completed: false },
            { id: 'images', title: 'Images and Multimedia', completed: false },
        ]
    },
    {
        id: 'intermediate',
        title: 'Intermediate HTML',
        description: 'Dive deeper into HTML with more advanced elements and attributes',
        lessons: [
            { id: 'lists', title: 'Lists and Tables', completed: false },
            { id: 'forms', title: 'Forms and Input Elements', completed: false },
            { id: 'semantic', title: 'Semantic HTML', completed: false },
            { id: 'embedded', title: 'Embedded Content', completed: false },
            { id: 'accessibility', title: 'HTML Accessibility', completed: false },
        ]
    },
    {
        id: 'advanced',
        title: 'Advanced HTML Concepts',
        description: 'Master advanced HTML techniques and best practices',
        lessons: [
            { id: 'metadata', title: 'Metadata and SEO', completed: false },
            { id: 'svg', title: 'SVG and Canvas', completed: false },
            { id: 'api', title: 'HTML5 APIs', completed: false },
            { id: 'storage', title: 'Web Storage and Offline Web Apps', completed: false },
            { id: 'optimization', title: 'HTML Performance Optimization', completed: false },
        ]
    }
];

const LessonItem = ({ lesson, onSelect }) => (
    <div className="flex items-center justify-between py-2 border-b last:border-b-0">
        <div className="flex items-center">
            {lesson.completed ? (
                <Check className="w-5 h-5 text-green-500 mr-2" />
            ) : (
                <Circle className="w-5 h-5 text-gray-300 mr-2" />
            )}
            <span className={lesson.completed ? "text-gray-500" : ""}>{lesson.title}</span>
        </div>
        <button
            onClick={() => onSelect(lesson)}
            className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
        >
            {lesson.completed ? 'Review' : 'Start'}
        </button>
    </div>
);

const SectionProgress = ({ lessons }) => {
    const completedLessons = lessons.filter(lesson => lesson.completed).length;
    const progress = (completedLessons / lessons.length) * 100;

    return (
        <div className="mt-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">{completedLessons} of {lessons.length} completed</p>
        </div>
    );
};

const Section = ({ section, onSelectLesson }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4 border rounded-lg overflow-hidden">
            <button
                className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-semibold">{section.title}</h2>
                        <p className="text-sm text-gray-500">{section.description}</p>
                    </div>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
                <SectionProgress lessons={section.lessons} />
            </button>
            {isOpen && (
                <div className="p-4 bg-white">
                    {section.lessons.map((lesson) => (
                        <LessonItem
                            key={lesson.id}
                            lesson={lesson}
                            onSelect={() => onSelectLesson(section.id, lesson.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const CourseOutline = ({ onSelectLesson, courseData }) => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">HTML Learning Path</h1>
            {courseData.map((section) => (
                <Section
                    key={section.id}
                    section={section}
                    onSelectLesson={onSelectLesson}
                />
            ))}
        </div>
    );
};

const Courses = () => {
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [courseData, setCourseData] = useState(courseOutline);

    const handleSelectLesson = (sectionId, lessonId) => {
        setSelectedLesson({ sectionId, lessonId });
        // Here you would typically load the selected lesson content
        console.log(`Selected lesson: ${sectionId} - ${lessonId}`);
    };

    const handleCompletelesson = (sectionId, lessonId) => {
        setCourseData(prevData =>
            prevData.map(section =>
                section.id === sectionId
                    ? {
                        ...section,
                        lessons: section.lessons.map(lesson =>
                            lesson.id === lessonId ? { ...lesson, completed: true } : lesson
                        )
                    }
                    : section
            )
        );
        setSelectedLesson(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-20 font-mono">
            <div className="container mx-auto px-4">
                {selectedLesson ? (
                    <div>
                        {/* Placeholder for the actual lesson content */}
                        <h2 className="text-2xl font-bold mb-4">Lesson Content: {selectedLesson.sectionId} - {selectedLesson.lessonId}</h2>
                        <button
                            onClick={() => handleCompletelesson(selectedLesson.sectionId, selectedLesson.lessonId)}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
                        >
                            Mark as Complete
                        </button>
                        <button
                            onClick={() => setSelectedLesson(null)}
                            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                        >
                            Back to Course Outline
                        </button>
                    </div>
                ) : (
                    <CourseOutline onSelectLesson={handleSelectLesson} courseData={courseData} />
                )}
            </div>
        </div>
    );
};

export default Courses;

