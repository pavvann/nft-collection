import { Description } from "@ethersproject/properties";

export default function handler(req,res) {
    const tokenId = req.query.tokenId;
    const image_url = "https://gateway.pinata.cloud/ipfs/QmeXxLF5gxRaXMaKRCMQ7C7o3yqeFJhEzmCVGsk3aiHMuk?_gl=1*1n4fj1k*_ga*MTE4Mzc2MTM5LjE2NzU3NDc1NTc.*_ga_5RMPXG14TE*MTY3NTc0NzU1Ny4xLjEuMTY3NTc0Nzc2MC40Ny4wLjA.";
    res.status(200).json({
        name: "testing #" + tokenId,
        description: "testing nfts",
        image: image_url
    });
}