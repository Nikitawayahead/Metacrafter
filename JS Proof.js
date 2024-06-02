/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
const nftCollection = []
// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(countryName, continent, population, famousLandmark) {
    const nft = {
        countryName: countryName,
        continent: continent,
        population: population,
        famousLandmark: famousLandmark
    };
    nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    nftCollection.forEach(nft => {
        console.log("Country Name: " + nft.countryName);
        console.log("Continent: " + nft.continent);
        console.log("Population: " + nft.population);
        console.log("Famous Landmark: " + nft.famousLandmark);
        console.log("--------------------------");
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// call your functions below this line

mintNFT("India", "Asia", "1.4 billion", "Taj Mahal");
mintNFT("China", "Asia", "1.4 billion", "Great Wall of China");
mintNFT("Pakistan", "Asia", "231 million", "Badshahi Mosque");

listNFTs();

console.log("Total Supply: " + getTotalSupply());
