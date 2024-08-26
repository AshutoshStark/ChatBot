

import { GoogleGenerativeAI} from "@google/generative-ai";

export async function fileToGenerativePart(file) {
    const base64EncodedDataPromise = new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.readAsDataURL(file);
    });

    return {
        inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
}

async function aiImageRun(query,imageInineData) {
    
    const MODEL_NAME = "gemini-pro-vision";
    const API_KEY = process.env.REACT_APP_GPT_KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const result = await model.generateContent([
        `${query}`, imageInineData
    ]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
}