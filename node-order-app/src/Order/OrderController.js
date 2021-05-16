import OrderModel from "./orderModel";
class OrderController {

  constructor() {
    this.objOrderModel = new OrderModel();
  }

  addOrder = async (req, res) => {
    try {

      await this.objOrderModel.insertOrder(req.body);

      res.status(200).send({
        data: "Order Added Successfully",
        status: 200,
      });
    } catch (error) {
      res.status(500).send({
        data: error,
        status: 500,
      });
    }
  }

  getOrders = async (req, res) => {
    try {
      const result = await this.objOrderModel.getOrders(req.body);

      res.status(200).send({
        data: "Order Fetched Successfully",
        result: result,
        status: 200,
      });
    } catch (error) {
      res.status(500).send({
        data: error,
        status: 500,
      });
    }

  }

  updateOrder = async (req, res) => {
    try {
      const result = await this.objOrderModel.updateOrder(req.body);

      res.status(200).send({
        data: "Order Fetched Successfully",
        result: result,
        status: 200,
      });
    } catch (error) {
      res.status(500).send({
        data: error,
        status: 500,
      });
    }

  }

  deleteOrder = async (req, res) => {
    try {

      const result = await this.objOrderModel.deleteOrder(req.body);

      res.status(200).send({
        data: "Order Fetched Successfully",
        result: result,
        status: 200,
      });
    } catch (error) {
      res.status(500).send({
        data: error,
        status: 500,
      });
    }

  }
}

export default OrderController;