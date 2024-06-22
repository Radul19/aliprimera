import { RequestHandler } from "express"
const debug = false

export const test: RequestHandler = async (req, res) => {
    if (debug) console.log('#test')
    res.send('')
}

// export const namehere = async (req,res)=>{
//     if(debug) console.log('#namehere')
//     try {
//         res.send('ok')
//     } catch (error:any) {
//         res.status(400).json({ msg: error.message })
//     }
//
// }
