
export async function loadContactImages(setContactImages){
    
    const imageNames = ['email.jpg', 'phone.jpg', 'linkedin-bw.png'];
    const information = ['atcohen60@gmail.com', '1-310-779-5359', 'https://www.linkedin.com/in/aaron-t-cohen/']


    const loadedImages = await Promise.all(imageNames.map(async (imageName) => {
        const imageModule = await import(`../../resources/${imageName}`);
        return {
            name: imageName,
            src: imageModule.default
        };
    }));


    for(let i = 0; i < loadedImages.length; i++){
        loadedImages[i].info = information[i];
    }

    setContactImages(loadedImages);
}

