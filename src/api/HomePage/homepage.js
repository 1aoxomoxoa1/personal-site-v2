import { techImageNames } from "../utilities";

export async function loadImagesHome(setImages) {

    const loadedImages = await Promise.all(techImageNames.map(async (imageName) => {
        const imageModule = await import(`../../resources/techs/${imageName}`);
        return {
            name: imageName,
            src: imageModule.default
        };
    }));

    setImages(loadedImages);
}