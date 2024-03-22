import { loadImagesHome } from "../HomePage/homepage";
import { techImageNames, portfolioData } from "../utilities";

//**
//  * 
//  * @returns [{}] name and src of all tech images needed for  
//  */
async function getTechImages(){
    const loadedImages = await Promise.all(techImageNames.map(async (imageName) => {
        const imageModule = await import(`../../resources/techs/${imageName}`);
        return {
        name: imageName,
        src: imageModule.default
        };
    }));

    return loadedImages
}

//**
//  * 
//  * @returns 
//  */
async function getDescImages(){
    let descImageNames = portfolioData.map(element => element.imgDescName);

    const loadedImages = await Promise.all(descImageNames.map(async (descImageName) => {
        const imageModule = await import(`../../resources/${descImageName}`);
        return {
            imgDescName: descImageName,
            srcDesc: imageModule.default
        };
    }));

    return loadedImages;

}

export async function loadPortfolio(setPortfolio){ 

    //first, lets get the images we need for the tech I use
    let techImages = await getTechImages();
 
    //we then want to replace the names of tech used in the portfolio data with the relevant techImages

    let descImages = await getDescImages();

    //now the portfolio has the necessary imgDescriptions for the covers
    let portfolioWithDescriptions = descImages.map((descImage, idx) => {
        return { 
            ...descImage,
            ...portfolioData[idx]
        }
        }
    );


    //replace all of the techImgNames in portfolioWithDescriptions with REAL techImages (srcs)
    
    for(let portfolioObjIncomplete of portfolioWithDescriptions){
        let techUsed = portfolioObjIncomplete.techUsed;
        let techUsedWithImages = techUsed.map((techName) => techImages.find(techImage => techImage.name === techName));
        portfolioObjIncomplete.techUsed = techUsedWithImages;
    }

    console.log(portfolioWithDescriptions)

    setPortfolio(portfolioWithDescriptions);
}