export async function loadImagesExperience(setExperiences) {
    
    const imageNames = ['royce.jpg', 'maesa.jpg', 'experis.jpg', 'oneai.svg'];

    //this will be the info that is within our timeline
    const timelineInfo = [
        {
            index: 0, 
            dates: '2018 - 2022', 
            info: 'In 2022, graduated from UCLA with Bachelor of Arts in Economics and a Minor in Cognitive Science',
            responsibilities: [],
            title: 'University - UCLA'
        },
        {
            index: 1, 
            dates: '2021 - 2022',
            info: "My most recent work experience was as an intern for a beauty marketing company. I enjoyed thinking about trends and making predictions within the men's grooming space. Specifically, I was an asset for advising about their newest men's brand -- a progressive hair day brand for men at retail",
            responsibilities: ['Create aesthetically appealing presentations that are presented to retail clients considering stocking our brands and products', 'Present to company executives regarding brand viability and vision', 'Research male consumer dynamics and trends through use of statistical data and IRI revenue reports'],
            title: 'Marketing Intern - Maesa NYC'
        },
        {
            index: 2, 
            dates: '2022 - 2023',
            info: "Brightcode is an initiative by Birthright Labs, the Israeli Innovation Authority and Experis Israel. The program seeks to train a cohort of students from all over the world to be Full Stack Developers and assist in their relocation to Israel. The training is five months, which is followed by a job placement with a two year work term in Israel.",
            responsibilities: [],
            title: 'Full Stack Bootcamp - Experis'   
        },
        {
            index: 3, 
            dates: '2023 - 2023',
            info: `One AI engineered an API for generative AI, enabling customized chatbot creation from client PDFs and website URLs.
                I automated the generation of hundreds of demo chatbots for our SEO effort with Python code (selenium library), boosting efficiency by 300% compared to manual creation.
                 Resolved data persistence issues in client frontend-database interaction through SQL queries, enhancing team efficiency through reuse`,
            responsibilities: ["Gained first-hand sales experience supporting the sales team in 20+ sales demo calls", "Built website components with HTML and Javascript on Webflow"],
            title: 'Data Analyst - One AI'   
        }
    ]

    const loadedImages = await Promise.all(imageNames.map(async (imageName) => {
        const imageModule = await import(`../../resources/${imageName}`);
        return {
            name: imageName,
            src: imageModule.default
        };
    }));


    //EXPERIENCES WILL BE AN OBJECT THAT COMBINES THE INFO OF EXPERIENCE WITH THE IMAGES
    let experiences = timelineInfo.map((object, idx) => {
        return { 
            ...object,
            ...loadedImages[idx]
        }
    })


    setExperiences(experiences);
}


