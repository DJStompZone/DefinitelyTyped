import {
    callStandardApi, 
    setApiKey, 
    TextToTextModels, 
    ImageToTextModels, 
    TextToImageModels, 
    ImageToImageModels
} from 'deepai';

// $ExpectType void
setApiKey('');

// Testing ImageToImageModels:
// $ExpectType Promise<{id: string, output_url: string}>
callStandardApi('torch-srgan', {image: 'foo.jpg'});

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('waifu2x', {image: 'foo.jpg'});

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('colorizer', {image: 'foo.jpg'});

// Testing TextToTextModels:
// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('text-generator', {text: 'Sample text.'});

// Testing ImageToTextModels:
// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('nsfw-detector', {image: 'foo.jpg'});

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('image-similarity', {image1: 'foo1.jpg', image2: 'foo2.jpg'});

// Testing TextToImageModels with appropriate sample text for each:

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('text2img', { text: 'A serene mountain landscape.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('stable-diffusion', { text: 'A beautiful nebula in deep space.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('cute-creature-generator', { text: 'A creature with fluffy fur and big eyes.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('fantasy-world-generator', { text: 'A world with dragons and magic.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('cyberpunk-generator', { text: 'A neon-lit city with hovering cars.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('anime-portrait-generator', { text: 'A young warrior with silver hair.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('old-style-generator', { text: 'A knight standing beside his trusty steed.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('renaissance-painting-generator', { text: 'A royal court with jesters and nobility.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('abstract-painting-generator', { text: 'The emotions of joy and sorrow intertwined.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('impressionism-painting-generator', { text: 'A bustling Parisian street at dusk.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('surreal-graphics-generator', { text: 'Floating islands with waterfalls in the sky.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('3d-objects-generator', { text: 'A detailed model of a futuristic car.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('origami-3d-generator', { text: 'A folded paper crane.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('hologram-3d-generator', { text: 'A floating display of Earth.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('3d-character-generator', { text: 'A robot with advanced articulation.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('watercolor-painting-generator', { text: 'A gentle stream running through a meadow.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('pop-art-generator', { text: 'A vibrant depiction of celebrity culture.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('contemporary-architecture-generator', { text: 'A modern museum with sleek lines.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('future-architecture-generator', { text: 'A floating city above clouds.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('watercolor-architecture-generator', { text: 'An old stone bridge over a calm river.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('fantasy-character-generator', { text: 'An elf with a quiver and glowing tattoos.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('steampunk-generator', { text: 'Gears, cogs, and steam-powered machines.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('logo-generator', { text: 'Logo for a tech company named "DeepAI".' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('pixel-art-generator', { text: 'A brave hero with a sword.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('street-art-generator', { text: 'Graffiti showcasing urban rebellion.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('surreal-portrait-generator', { text: 'A face with galaxies for eyes.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('anime-world-generator', { text: 'A peaceful village with cherry blossoms.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('fantasy-portrait-generator', { text: 'A mage with fire swirling around her hands.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('comics-portrait-generator', { text: 'A superhero poised to fly.' });

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('cyberpunk-portrait-generator', { text: 'A hacker with augmented reality goggles.' });


// Error checks:

// Missing parameters:
// @ts-expect-error
callStandardApi('torch-srgan', {});

// Invalid model name:
// @ts-expect-error
callStandardApi('foobar', {});

// Mismatching parameters:
// @ts-expect-error
callStandardApi('text-generator', {image: 'foo.jpg'});

// @ts-expect-error
callStandardApi('nsfw-detector', {text: 'This should be an image.'});
