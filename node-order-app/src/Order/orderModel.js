
import mySqlConnection from "../services/mysqlConnection";
class OrderModel {

  formatDate = () => {
    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
    const currentYear = currentDate.getFullYear();

    const dateString = currentYear + "/" + (currentMonth + 1) + "/" + currentDayOfMonth;
    return dateString;
  }

  insertOrder = (parameters) => {
    try {
      return new Promise((resolve, reject) => {
        const queryParams = [this.formatDate()];

        for (let prop in parameters) {
          queryParams.push(parameters[prop]);
        }



        let sql = "insert into order_list( order_date,customer_name,customer_address,ship_date,item_code,item_description,item_quantity,item_tax,gross_order_amount,total_tax,shipping_tax,total_order_amount,rate) values(?,?,?,?,?,?,?,?,?,?,?,?,?);";

        mySqlConnection.query(sql, queryParams, (error, result) => {

          if (error) {

            reject({ success: false, data: "Error while requesting shift" });
          } else {
            resolve({ success: true, data: result });
          }
        });
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  getOrders = () => {
    try {
      return new Promise((resolve, reject) => {
        let sql = `SELECT 
                      id AS orderId,
                      customer_address AS customerAddress,
                      customer_name AS customerName,
                      item_code AS itemCode,
                      item_description AS itemDescription,
                      item_quantity AS quantity,
                      item_tax AS taxOnItem,
                      gross_order_amount AS grossOrderAmount,
                      total_tax AS totalTax,
                      shipping_tax AS shippingTax,
                      total_order_amount AS totalOrderAmount,
                      ship_date AS shipDate,
                      rate
                  FROM
                      order_list;`;
        mySqlConnection.query(sql, (error, result) => {

          if (error) {

            reject({ success: false, data: "Error while requesting shift" });
          } else {
            resolve({ success: true, data: result });
          }
        });
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  updateOrder = (parameters) => {
    try {
      return new Promise((resolve, reject) => {
        const queryParams = [];

        for (let prop in parameters) {
          queryParams.push(parameters[prop]);
        }



        let sql = `update order_list 
                    set 
                    customer_name=?,
                    customer_address=?,
                    ship_date=?,
                    item_code=?,
                    item_description=?,
                    item_quantity=?,
                    item_tax=?,
                    gross_order_amount=?,
                    total_tax=?,
                    shipping_tax=?,
                    total_order_amount=?,
                    rate=? where id =?;`;

        let sql1 = mySqlConnection.query(sql, queryParams, (error, result) => {

          if (error) {

            reject({ success: false, data: "Error while requesting shift" });
          } else {
            resolve({ success: true, data: result });
          }
        });
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  deleteOrder = (parameters) => {
    try {
      return new Promise((resolve, reject) => {
        const queryParams = [this.formatDate()];

        for (let prop in parameters) {
          queryParams.push(parameters[prop]);
        }

        let sql = `delete from order_list where id =?;`;

        mySqlConnection.query(sql, [parameters.orderId], (error, result) => {

          if (error) {

            reject({ success: false, data: "Error while requesting shift" });
          } else {
            resolve({ success: true, data: result });
          }
        });
      });
    } catch (error) {
      throw new Error(error);
    }
  };

}

export default OrderModel;