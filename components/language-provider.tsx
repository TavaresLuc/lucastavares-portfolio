"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "pt"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hello, I'm",
    "hero.title": "Fullstack Developer",
    "hero.description":
      "Specialized in C# .NET, VB6, ReactJS, and SQL Server. Expert in RESTful APIs, database optimization, process automation, and CI/CD pipelines.",
    "hero.cta": "Get in Touch",
    "hero.download": "Download CV",

    // About
    "about.title": "About Me",
    "about.description":
      "Fullstack Developer with experience in C# .NET, VB6, ReactJS and SQL Server. Specialist in RESTful API development, SQL database optimization, process automation and CI/CD pipelines. Performance, scalability and security focused, applying SOLID and Clean Architecture for robust software construction.",

    // Experience
    "experience.title": "Professional Experience",
    "experience.summary.title": "3+ Years of Fullstack Development Excellence",
    "experience.summary.description":
      "Throughout my career, I have evolved from Technical Support to a Mid-level Fullstack Developer, consistently delivering high-impact solutions across diverse technology stacks. My journey spans multiple roles at leading technology companies, where I've specialized in building robust, scalable applications and optimizing complex database systems.",
    "experience.highlight1.title": "Database Performance Optimization",
    "experience.highlight1.desc":
      "Achieved up to 90% reduction in query response times through advanced SQL Server optimization techniques, handling large-scale data operations with precision and efficiency.",
    "experience.highlight2.title": "Fullstack Development",
    "experience.highlight2.desc":
      "Experience using modern technologies including C# .NET, ReactJS, SQL Server, Git, and VB6, ensuring high standards of reliability and performance.",
    "experience.highlight3.title": "Process Automation & CI/CD",
    "experience.highlight3.desc":
      "Implemented automated workflows and continuous integration pipelines, reducing bug resolution time by 40% and streamlining development processes across teams.",
    "experience.highlight4.title": "Financial Systems Expertise",
    "experience.highlight4.desc":
      "Currently developing and maintaining critical payment processing systems at BrasilCard, handling sensitive financial data with focus on security, consistency, and transactional integrity.",
    "experience.companies": "Key Companies",
    "experience.technologies": "Core Technologies",
    "experience.achievements": "Key Achievements",

    // Skills
    "skills.title": "Technologies & Skills",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.database": "Database",
    "skills.tools": "Tools & Methodologies",
    "skills.design": "UI/UX",
    "skills.soft": "Soft Skills",
    "skills.soft.learning": "Fast Learning",
    "skills.soft.teamwork": "Teamwork",
    "skills.soft.problem": "Problem Solving",
    "skills.soft.proactive": "Proactivity",

    // Education
    "education.title": "Education",
    "education.degree1": "Systems Analysis and Development",
    "education.school1": "Centro Universitário de João Pessoa",
    "education.degree2": "Technical in Informatics",
    "education.school2": "Escola Técnica de Brasília",
    "education.degree3": "English Course",
    "education.school3": "Skill Idiomas",

    // Contact
    "contact.title": "Get in Touch",
    "contact.description":
      "I'm always open to discussing new opportunities and interesting projects. Feel free to reach out!",
    "contact.location": "João Pessoa, Paraíba, Brazil",
    "contact.info": "Contact Information",
    "contact.connect": "Connect With Me",
    "contact.send": "Send Email",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with Next.js and Tailwind CSS",

    // Languages
    "languages.title": "Languages",
    "languages.portuguese": "Portuguese - Fluent",
    "languages.english": "English - Advanced",
    "languages.spanish": "Spanish - Basic",

    // Projects
    "projects.title": "My Projects",
    "projects.description":
      "Check out some of my recent projects on GitHub. These showcase my skills and experience as a developer.",
    "projects.viewCode": "View Code",
    "projects.liveSite": "Live Demo",
    "projects.viewMore": "View More on GitHub",
    "projects.retry": "Retry Loading",
  },
  pt: {
    // Navigation
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.education": "Formação",
    "nav.contact": "Contato",

    // Hero
    "hero.greeting": "Olá, eu sou",
    "hero.title": "Desenvolvedor Fullstack",
    "hero.description":
      "Especializado em C# .NET, VB6, ReactJS e SQL Server. Expert em APIs RESTful, otimização de banco de dados, automação de processos e pipelines CI/CD.",
    "hero.cta": "Entre em Contato",
    "hero.download": "Baixar CV",

    // About
    "about.title": "Sobre Mim",
    "about.description":
      "Desenvolvedor Fullstack com experiência em C# .NET, VB6, ReactJS e SQL Server. Especialista em desenvolvimento de APIs RESTful, otimização de banco de dados SQL, automação de processos e pipelines CI/CD. Atuação focada em desempenho, escalabilidade e segurança, aplicando SOLID e Clean Architecture para construção de software robusto.",

    // Experience
    "experience.title": "Experiência Profissional",
    "experience.summary.title": "4+ Anos de Excelência em Desenvolvimento Fullstack",
    "experience.summary.description":
      "Ao longo da minha carreira, evoluí de Suporte Técnico para Desenvolvedor Fullstack Pleno, entregando consistentemente soluções de alto impacto em diversas stacks tecnológicas. Minha jornada abrange múltiplas funções em empresas líderes de tecnologia, onde me especializei na construção de aplicações robustas e escaláveis e na otimização de sistemas de banco de dados complexos.",
    "experience.highlight1.title": "Otimização de Performance de Banco de Dados",
    "experience.highlight1.desc":
      "Alcancei até 90% de redução no tempo de resposta de queries através de técnicas avançadas de otimização SQL Server, lidando com operações de dados em larga escala com precisão e eficiência.",
    "experience.highlight2.title": "Desenvolvimento Fullstack",
    "experience.highlight2.desc":
      "Experiência usando tecnologias modernas incluindo C# .NET, ReactJS, SQL Server, Git e VB6, garantindo altos padrões de confiabilidade e performance.",
    "experience.highlight3.title": "Automação de Processos & CI/CD",
    "experience.highlight3.desc":
      "Implementei fluxos de trabalho automatizados e pipelines de integração contínua, reduzindo o tempo de resolução de bugs em 40% e otimizando processos de desenvolvimento entre equipes.",
    "experience.highlight4.title": "Expertise em Sistemas Financeiros",
    "experience.highlight4.desc":
      "Atualmente desenvolvendo e mantendo sistemas críticos de processamento de pagamentos na BrasilCard, lidando com dados financeiros sensíveis com foco em segurança, consistência e integridade transacional.",
    "experience.companies": "Empresas Principais",
    "experience.technologies": "Tecnologias Principais",
    "experience.achievements": "Principais Conquistas",

    // Skills
    "skills.title": "Tecnologias e Competências",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.database": "Banco de Dados",
    "skills.tools": "Ferramentas e Metodologias",
    "skills.design": "UI/UX",
    "skills.soft": "Soft Skills",
    "skills.soft.learning": "Aprendizado Rápido",
    "skills.soft.teamwork": "Trabalho em Equipe",
    "skills.soft.problem": "Resolução de Problemas",
    "skills.soft.proactive": "Proatividade",

    // Education
    "education.title": "Formação Acadêmica",
    "education.degree1": "Análise e Desenvolvimento de Sistemas",
    "education.school1": "Centro Universitário de João Pessoa",
    "education.degree2": "Técnico em Informática",
    "education.school2": "Escola Técnica de Brasília",
    "education.degree3": "Curso de Inglês",
    "education.school3": "Skill Idiomas",

    // Contact
    "contact.title": "Entre em Contato",
    "contact.description":
      "Estou sempre aberto para discutir novas oportunidades e projetos interessantes. Sinta-se à vontade para entrar em contato!",
    "contact.location": "João Pessoa, Paraíba, Brasil",
    "contact.info": "Informações de Contato",
    "contact.connect": "Conecte-se Comigo",
    "contact.send": "Enviar Email",

    // Footer
    "footer.rights": "Todos os direitos reservados.",
    "footer.built": "Construído com Next.js e Tailwind CSS",

    // Languages
    "languages.title": "Idiomas",
    "languages.portuguese": "Português - Fluente",
    "languages.english": "Inglês - Avançado",
    "languages.spanish": "Espanhol - Básico",

    // Projects
    "projects.title": "Meus Projetos",
    "projects.description":
      "Confira alguns dos meus projetos recentes no GitHub. Eles demonstram minhas habilidades e experiência como desenvolvedor.",
    "projects.viewCode": "Ver Código",
    "projects.liveSite": "Demo ao Vivo",
    "projects.viewMore": "Ver Mais no GitHub",
    "projects.retry": "Tentar Novamente",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
