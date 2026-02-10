
import {
    Briefcase,
    Code,
    GraduationCap,
    Mail,
    MapPin,
    Phone,
    Linkedin,
    Smartphone,
    Globe,
    Server
} from 'lucide-react';

export const personalInfo = {
    name: "Yogi Putra",
    role: "Software Engineer",
    email: "mail.yogiputra@gmail.com",
    phone: "081234515178",
    linkedin: "https://linkedin.com/in/oohyugi",
    location: "Jakarta, Indonesia",
    bio: "Software Engineer with expertise in Android and Flutter development, proficient in Java, Kotlin, Dart, Flutter, and JavaScript. Skilled at collaborating with cross-functional teams to deliver high-quality, innovative, and user-friendly mobile solutions. Passionate about staying updated with emerging technologies and continuously enhancing skills to effectively tackle challenges.",
    social: [
        { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/oohyugi" },
        { name: "Email", icon: Mail, url: "mailto:mail.yogiputra@gmail.com" }
    ]
};

export const skills = [
    { name: "Android Development", icon: Smartphone, level: "Expert" },
    { name: "Flutter", icon: Code, level: "Expert" },
    { name: "Kotlin", icon: Code, level: "Expert" },
    { name: "Java", icon: Code, level: "Proficient" },
    { name: "Dart", icon: Code, level: "Expert" },
    { name: "JavaScript", icon: Code, level: "Proficient" },
    { name: "Vue.js", icon: Globe, level: "Intermediate" },
    { name: "Node.js", icon: Server, level: "Intermediate" },
    { name: "Jetpack Compose", icon: Smartphone, level: "Expert" },
    { name: "MVVM / Clean Architecture", icon: Code, level: "Expert" },
    { name: "Firebase", icon: Server, level: "Proficient" },
    { name: "Git", icon: Code, level: "Expert" }
];

export const experience = [
    {
        id: 1,
        company: "Ina Digital Edu (GovTech Edu)",
        role: "Software Engineer",
        period: "Nov 2020 — Present",
        description: "Maintained and optimized a high-traffic Android app with over 2 million Monthly Active Users (MAU). Focused on performance, scalability, and regular updates.",
        achievements: [
            "Maintained app with 2M+ MAU.",
            "Increased test coverage > 70% (JUnit, Espresso), achieving 99%+ crash-free rate.",
            "Developed offline-first feature for limited internet areas.",
            "Migrated XML layouts to Jetpack Compose.",
            "Reduced app size from 18MB to 10MB.",
            "Refactored monolithic codebase to Clean Architecture."
        ],
        stack: ["Kotlin", "Flutter", "Jetpack Compose", "MVVM", "Clean Architecture", "Firebase", "JUnit"]
    },
    {
        id: 2,
        company: "StickEarn",
        role: "Mobile Developer",
        period: "Oct 2017 — Oct 2020",
        description: "Led mobile development for StickEarn, a revolutionary advertising technology startup.",
        achievements: [
            "Led specific app development teams (4 developers).",
            "Refactored StickEarn app from monolithic to MVVM.",
            "Developed Atlas app (Flutter, BLoC) for vending machines.",
            "Contributed to Stickmart web app (Vue.js).",
            "Contributed to StickTab in-car entertainment app."
        ],
        stack: ["Flutter", "Vue.js", "Android", "Kotlin", "MVVM", "BLoC", "Node.js"]
    },
    {
        id: 3,
        company: "Gits Indonesia",
        role: "Android Developer",
        period: "Apr 2016 — Aug 2017",
        description: "Developed various client applications at a digital agency specializing in IT consulting.",
        achievements: [
            "Created and managed variety of client apps.",
            "Collaborated with backend and design teams.",
            "Implemented MVVM architectural patterns."
        ],
        stack: ["Java", "Kotlin", "MVVM", "Node.js", "Express.js"]
    }
];

export const projects = [
    {
        id: 1,
        title: "Rumah Pendidikan App",
        category: "Mobile App",
        description: "High-traffic Android application serving 2M+ users, focused on education. Features offline-first capability and modern UI.",
        tech: ["Flutter", "Clean Architecture", "BLoC", "Offline-first"],
        links: [
            { label: "iOS App", url: "https://apps.apple.com/id/app/rumah-pendidikan/id6741482400" },
            { label: "Android App", url: "https://play.google.com/store/apps/details?id=com.kemendikdasmen.rumahpendidikan&hl=id" }
        ]
    },
    {
        id: 6,
        title: "Ruang GTK",
        category: "Mobile App",
        description: "Educational application for teachers and education personnel.",
        tech: ["Android", "Kotlin", "Jetpack Compose", "Clean Architecture", "Offline-first"],
        links: [
            { label: "Play Store", url: "https://play.google.com/store/apps/details?id=id.belajar.app&hl=id" }
        ]
    },
    {
        id: 2,
        title: "StickEarn App",
        category: "Mobile App",
        description: "Ad-tech mobile application focusing on vehicle advertising performance and scalability.",
        tech: ["Android", "MVVM"],
        links: [
            { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.stickearn&hl=id" }
        ]
    },
    {
        id: 3,
        title: "Atlas App",
        category: "Mobile App",
        description: "Flutter-based application for vending machine purchasing with smooth transaction handling.",
        tech: ["Flutter", "BLoC", "Mobile Payment"]
    },
    {
        id: 4,
        title: "Stickmart",
        category: "Web App",
        description: "In-car commercial platform web application.",
        tech: ["Vue.js", "Web Development"]
    },
    {
        id: 5,
        title: "StickTab",
        category: "Tablet App",
        description: "In-car entertainment application designed specifically for tablets.",
        tech: ["Android", "Tablet UI", "Media"]
    }

];

export const education = {
    degree: "Bachelor's degree, Information Technology",
    school: "Institut Teknologi Padang, Padang",
    icon: GraduationCap
};
