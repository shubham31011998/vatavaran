export const apiKey = 'place your openAI api key here';
// in some cases your api key maybe already expired
// try to use a new account to create an api key

export const dummyMessages = [
    {
        role: 'user', 
        content: 'How are you?'
    },
    {
        role: 'assistant',
        content: "I'm fine, How may I help you today."
    },
    {
        role: 'user',
        content: 'create an image of a dog playing with cat'
    },
    {
        role: 'assistant',
        content: 'https://storage.googleapis.com/pai-images/ae74b3002bfe4b538493ca7aedb6a300.jpeg'
    },
    {
        role: 'user',
        content: 'Can you provide me with the latest updates on technology?'
    },
    {
        role: 'assistant',
        content: 'Sure, here are some recent updates:\n1. Introduction of Quantum Computing.\n2. Advancements in AI and Machine Learning.\n3. Growth of AR and VR technologies.'
    },
    {
        role: 'user',
        content: 'Tell me a joke.'
    },
    {
        role: 'assistant',
        content: 'Why did the computer cross the road?\nTo get to the other website!'
    },
    {
        role: 'user',
        content: 'What are the top programming languages in 2024?'
    },
    {
        role: 'assistant',
        content: 'According to recent surveys, the top programming languages in 2024 are:\n1. Python\n2. JavaScript\n3. Java\n4. C++\n5. Swift'
    }
];
