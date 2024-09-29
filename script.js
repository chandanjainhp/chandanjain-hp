 // JavaScript to handle dynamic menu toggle
 const menuBtn = document.querySelector('.menu-btn');
 const navbar = document.querySelector('.navbar');

 menuBtn.addEventListener('click', () => {
     if (navbar.style.display === 'flex') {
         navbar.style.display = 'none';
     } else {
         navbar.style.display = 'flex';
     }
 });


 document.addEventListener('DOMContentLoaded', function() {
    const portfolioData = {
        name: "Your Name",
        jobTitle: "Your Job Title",
        company: "Company Name",
        users: "10 million",
        yearsExperience: 5,
        currentYear: new Date().getFullYear(),
        statistic: "19 million readers",
        mainResponsibility: "our thought leadership program",
        secondaryResponsibility: "Content Series",
        university: "University Name",
        graduationYear: 2016,
        major: "Major",
        minor1: "Minor 1",
        minor2: "Minor 2",
        hobby: "travelling",
        regions: "North America, Europe, and Asia",
        personalExperience: "teaching English in Thailand for six months after graduation",
        skills: "writing blog posts, landing pages, press releases, and advertisement copy"
    };

    // Load images
    const introSection = document.getElementById('intro-section');
    const images = [
        {src: "path_to_plant_image.jpg", alt: "Decorative plant with pens"},
        {src: "path_to_yellow_mug.jpg", alt: "Yellow mug"}
    ];
    images.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        imgElement.alt = img.alt;
        introSection.appendChild(imgElement);
    });

    // Load content
    const contentSection = document.getElementById('content-section');
    const template = document.getElementById('content-template');
    const content = template.content.cloneNode(true);
    
    content.getElementById('bio').innerHTML = 
        <p>Hi, my name is ${portfolioData.name}. I'm currently a ${portfolioData.jobTitle} for ${portfolioData.company}, a platform with over ${portfolioData.users} monthly users. I've been professionally working for ${portfolioData.company} for over ${portfolioData.yearsExperience} years, and in ${portfolioData.currentYear} alone, my work has reached ${portfolioData.statistic}.</p>
    ;
    
    content.getElementById('experience').innerHTML = 
        <p>At ${portfolioData.company}, I oversee ${portfolioData.mainResponsibility}, where I have the privilege of interviewing top Marketing execs in the field and turning their insights into thoughtful, actionable stories for our readers. I also manage ${portfolioData.secondaryResponsibility}, which has brought in 1.6 million views to-date.</p>
    ;
    
    content.getElementById('education').innerHTML = 
        <p>I am a ${portfolioData.graduationYear} graduate of ${portfolioData.university} with a degree in ${portfolioData.major}. I also studied ${portfolioData.minor1} and ${portfolioData.minor2}.</p>
    ;
    
    content.getElementById('interests').innerHTML = 
        <p>When I'm not working, you can find me ${portfolioData.hobby}. I've traveled across ${portfolioData.regions}, and my love for travel led me to ${portfolioData.personalExperience}.</p>
    ;
    
    content.getElementById('freelance').innerHTML = 
        <p>Besides my work at ${portfolioData.company}, I'm open to freelance projects. Please contact me if you're interested in collaboration. I have experience in ${portfolioData.skills}.</p>
    ;
    
    content.getElementById('name').textContent = portfolioData.name;

    contentSection.appendChild(content);

    // Add interactivity
    document.querySelectorAll('p').forEach(p => {
        p.addEventListener('click', function() {
            this.classList.toggle('highlight');
        });
    });
});



