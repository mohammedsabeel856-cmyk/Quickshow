// import { clerkClient } from "@clerk/express";

// export const protectAdmin = async (req, res, next)=>{
//     try {
//         const { userId } = req.auth();

//         const user = await clerkClient.users.getUser(userId)

//         if(user.privateMetadata.role !== 'admin'){
//             return res.json({success: false, message: "not authorized"})
//         }

//         next();
//     } catch (error) {
//         return res.json({ success: false, message: "not authorized" });
//     }
// }


///ye wala file sahi hai
import { clerkClient } from "@clerk/express";

export const protectAdmin = async (req, res, next) => {
    try {
        const { userId } = req.auth();

        const user = await clerkClient.users.getUser(userId);

        console.log("User ID:", userId);
        console.log("Private Metadata:", user.privateMetadata);

        if (user.privateMetadata.role !== "admin") {
            return res.json({ success: false, message: "not authorized" });
        }

        next();
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "not authorized" });
    }
};




///gpt temp
// import { clerkClient } from "@clerk/express";

// export const protectAdmin = async (req, res, next) => {
//     try {
//         const { userId } = req.auth();

//         console.log("Auth Object:", req.auth());
//         console.log("User ID:", userId);

//         const user = await clerkClient.users.getUser(userId);

//         console.log("Email:", user.emailAddresses[0].emailAddress);
//         console.log("Private Metadata:", user.privateMetadata);

//         if (user.privateMetadata.role !== "admin") {
//             return res.json({ success: false, message: "not authorized" });
//         }

//         next();
//     } catch (error) {
//         console.log(error);
//         return res.json({ success: false, message: "not authorized" });
//     }
// };