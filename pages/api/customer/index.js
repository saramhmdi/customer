import connectDB from "../../../utils/connectDB";
import Customer from "../../../models/customer";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    res
      .status(500)
      .json({ status: "faild", message: "Error in connecting to DB" });
    return;
  }
  if (req.method === "POST") {
    const data = req.body.data;
    if (!data.name || !data.lastName || !data.email)
      return res
        .status(400)
        .json({ status: "failed", message: "invalid data" });
    try {
      const customer = await Customer.create(data);
      res
        .status(201)
        .json({ status: "success", message: "Data created ", data: customer });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ status: "failed", message: "Error in storing data DB" });
    }
  }

}
