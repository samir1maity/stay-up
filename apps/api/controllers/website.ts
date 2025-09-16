import type { Request, Response } from "express";
import { prismaClient } from "store/client";
import { website } from "types/type";

async function create(req: Request, res: Response) {
  try {
    const result = website.safeParse(req.body)

    if(result.error){
        res.status(422).json({
            success: false,
            message: "Validation failed in website creation",
            error: result.error.issues
        })
        return
    }

    const { url } = result.data

    const websiteData = await prismaClient.website.create({
        data : {
            url,
            userId: req.userId!
        }
    })

    res.status(201).json({
        success: true,
        message: 'Website creation successful',
        data: websiteData
    })

  } catch (error) {
    res.status(500).json({
        success: false,
        message: 'something went wrong while creating website'
    })
  }
}

const websiteController = {
  create,
};

export default websiteController;
