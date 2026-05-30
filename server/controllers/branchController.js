import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import Hospitality from "../models/Hospitality.js";

// GET /api/branches
export const getBranches = async (req, res) => {
    try {
        const branches = await Hotel.find({
            $or: [{ status: "approved" }, { status: { $exists: false } }]
        }).populate("owner", "image username");
        res.json({ success: true, branches });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

// GET /api/branches/:city
export const getBranchByCity = async (req, res) => {
    try {
        const { city } = req.params;
        
        // Replace dashes with spaces (e.g. addis-abeba -> addis abeba)
        const formattedCity = city.replace(/-/g, ' ');
        
        const branchHotel = await Hotel.findOne({
            city: { $regex: new RegExp("^" + formattedCity + "$", "i") },
            $or: [{ status: "approved" }, { status: { $exists: false } }]
        }).populate("owner", "image username");

        if (!branchHotel) {
            return res.json({ success: false, message: "Branch not found" });
        }

        const rooms = await Room.find({
            hotel: branchHotel._id,
            isAvailable: true
        });

        const hospitalities = await Hospitality.find({
            hotel: branchHotel._id,
            isAvailable: true
        });

        res.json({ 
            success: true, 
            branch: branchHotel,
            rooms,
            hospitalities
        });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}
