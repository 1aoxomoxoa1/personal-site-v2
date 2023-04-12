export async function loadImagesExperience(setExperiences) {
    
    const imageNames = ['royce.jpg', 'maesa.jpg', 'experis.jpg'];

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
            index: 1, 
            dates: '2022 - 2023',
            info: "Brightcode is an initiative by Birthright Labs, the Israeli Innovation Authority and Experis Israel. The program seeks to train a cohort of students from all over the world to be Full Stack Developers and assist in their relocation to Israel. The training is five months, which is followed by a job placement with a two year work term in Israel.",
            responsibilities: [],
            title: 'Full Stack Bootcamp - Experis'   
        }
    ]

    const loadedImages = await Promise.all(imageNames.map(async (imageName) => {
        const imageModule = await import(`../../resources/${imageName}`);
        return {
            name: imageName,
            src: imageModule.default
        };
    }));

    console.log(loadedImages);

    //EXPERIENCES WILL BE AN OBJECT THAT COMBINES THE INFO OF EXPERIENCE WITH THE IMAGES
    let experiences = timelineInfo.map((object, idx) => {
        return { 
            ...object,
            ...loadedImages[idx]
        }
    })

    console.log(experiences);

    setExperiences(experiences);
}


